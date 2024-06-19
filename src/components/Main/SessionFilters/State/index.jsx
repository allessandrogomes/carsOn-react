import { useEffect, useState } from "react";
import DividingLine from "../shared/DividingLine";
import TitleFilter from "../shared/TitleFilter";
import StateButton from "./ButtonState";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useSearchParams } from "react-router-dom";

const states = [
    { name: 'Acre', uf: 'AC' },
    { name: 'Alagoas', uf: 'AL' },
    { name: 'Amazonas', uf: 'AM' },
    { name: 'Amapá', uf: 'AP' },
    { name: 'Bahia', uf: 'BA' },
    { name: 'Ceará', uf: 'CE' },
    { name: 'Distrito Federal', uf: 'DF' },
    { name: 'Espírito Santo', uf: 'ES' },
    { name: 'Goiás', uf: 'GO' },
    { name: 'Maranhão', uf: 'MA' },
    { name: 'Minas Gerais', uf: 'MG' },
    { name: 'Mato Grosso do Sul', uf: 'MS' },
    { name: 'Mato Grosso', uf: 'MT' },
    { name: 'Pará', uf: 'PA' },
    { name: 'Paraíba', uf: 'PB' },
    { name: 'Pernambuco', uf: 'PE' },
    { name: 'Piauí', uf: 'PI' },
    { name: 'Paraná', uf: 'PR' },
    { name: 'Rio de Janeiro', uf: 'RJ' },
    { name: 'Rio Grande do Norte', uf: 'RN' },
    { name: 'Rondônia', uf: 'RO' },
    { name: 'Roraima', uf: 'RR' },
    { name: 'Rio Grande do Sul', uf: 'RS' },
    { name: 'Santa Catarina', uf: 'SC' },
    { name: 'Sergipe', uf: 'SE' },
    { name: 'São Paulo', uf: 'SP' },
    { name: 'Tocantins', uf: 'TO' }
]

export default function State() {

    const [selected, setSelected] = useState([])
    const [params, setParams] = useSearchParams()

    function resolveSelect(stateName) {
        if (selected.includes(stateName)) {
            setSelected(prevSelected => prevSelected.filter(item => item !== stateName))
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                const currentStates = newParams.get('state')
                if (currentStates) {
                    const statesArray = currentStates.split(',').map(term => term.trim()).filter(term => term !== stateName);

                    if (statesArray.length > 0) {
                        newParams.set('state', statesArray.join(','))
                    } else {
                        newParams.delete('state')
                    }
                    return newParams
                }
            })
        } else {
            setSelected(prevSelected => [...prevSelected, stateName])
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                const currentStates = newParams.get('state')
                if (currentStates) {
                    newParams.set('state', `${currentStates},${stateName}`)
                } else {
                    newParams.set('state', stateName)
                }
                return newParams
            })
        }
    }

    useEffect(() => {
        if (params.get("state")) {
            setSelected([...params.get("state").toLowerCase().split(',')])
        } else {
            setSelected([])
        }
    }, [params])

    return (
        <div>
            <TitleFilter icon={<LocationOnOutlinedIcon />} title="Estado" />
            <div className="flex flex-wrap w-72">
                {states.map(state => <StateButton onClick={() => resolveSelect(state.name.toLowerCase())} selected={selected.includes(state.name.toLowerCase())} uf={state.uf} key={state.uf} />)}
            </div>
            <DividingLine />
        </div>
    )
}