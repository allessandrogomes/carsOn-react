import { useEffect, useState } from "react";
import DividingLine from "../shared/DividingLine";
import TitleFilter from "../shared/TitleFilter";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useSearchParams } from "react-router-dom";
import { getBrazilCities, getBrazilStates } from "../../../../services/getBrazilStatesAndCities";
import ButtonOk from "../shared/ButtonOk";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


export default function State() {

    const [params, setParams] = useSearchParams()

    const [state, setState] = useState("")
    const [city, setCity] = useState("")

    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const [activeFilter, setActiveFilter] = useState(false)

    function addLocationFilter(event, stateParam, cityParam) {
        event.preventDefault()
        setParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.set("state", stateParam.toLowerCase())
            if (cityParam) {
                newParams.set("city", cityParam.toLowerCase())
            }
            newParams.set("page", 1)
            return newParams
        })
    }

    function removeLocationFilter() {
        setParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.delete("state")
            newParams.delete("city")
            newParams.set("page", 1)
            return newParams
        })
    }

    useEffect(() => {
        if (params.get("state")) {
            setState(params.get("state"))
            setActiveFilter(true)
        } else {
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                newParams.delete("city")
                newParams.set("page", 1)
                return newParams
            })
            setState("")
            setCity("")
            setActiveFilter(false)
        }

        if (params.get("city" && !params.get("state"))) {
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                newParams.delete("city")
                newParams.set("page", 1)
                return newParams
            })
        } else if (params.get("city")) {
            setCity(params.get("city"))
        } else {
            setCity("")
        }
    }, [params])

    useEffect(() => {
        async function fetchStates() {
            const statesData = await getBrazilStates()
            setStates(statesData)
        }

        fetchStates()
    }, [])

    useEffect(() => {
        if (state) {
            async function fetchCities() {
                let uf = ""
                states.forEach(item => {
                    if (item.name === state) {
                        uf = item.uf
                        return
                    }
                })
                const citiesData = await getBrazilCities(uf)
                setCities(citiesData)
            }
            fetchCities()
        }
    }, [state])

    return (
        <div>
            <TitleFilter icon={<LocationOnOutlinedIcon />} title="Localização" />
            <div className="flex flex-wrap w-72">
                {!activeFilter ? (
                    <form onSubmit={(event) => addLocationFilter(event, state, city)} className="flex flex-col gap-4 w-full">
                        <select value={state} onChange={event => setState(event.target.value)}>
                            <option value="">Selecione Estado</option>
                            {states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)}
                        </select>
                        {state && (
                            <select value={city} onChange={event => setCity(event.target.value)}>
                                <option value="">Selecionar cidade</option>
                                {cities.map(city => <option value={city.name} key={city.id}>{city.name}</option>)}
                            </select>
                        )}
                        <div className="flex gap-4">
                            <ButtonOk />
                            <button
                                type="button"
                                onClick={() => {
                                    setState("")
                                    setCity("")
                                }}
                                className="underline text-xs"
                            >
                                Limpar
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className="flex flex-col">
                            <p className="text-sm self-left mr-1 capitalize">Estado: {state}</p>
                            <p className="text-sm self-left mr-1 capitalize">Cidade: {city ? city : "Todas"}</p>
                        </div>
                        <button onClick={() => removeLocationFilter()}><DisabledByDefaultIcon sx={{ color: "red" }} /></button>
                    </>
                )}
            </div>
            <DividingLine />
        </div>
    )
}