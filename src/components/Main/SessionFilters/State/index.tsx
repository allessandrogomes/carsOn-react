import { useEffect, useState } from 'react'
import DividingLine from '../shared/DividingLine'
import TitleFilter from '../shared/TitleFilter'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import { useSearchParams } from 'react-router-dom'
import {
  getBrazilCities,
  getBrazilStates,
} from '../../../../services/getBrazilStatesAndCities'
import ButtonOk from '../shared/ButtonOk'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import IState from '../../../../interfaces/IState'
import ICity from '../../../../interfaces/ICity'

export default function State() {
  const [params, setParams] = useSearchParams()

  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const [states, setStates] = useState<IState[]>([])
  const [cities, setCities] = useState<ICity[]>([])

  const [activeFilter, setActiveFilter] = useState(false)

  function addLocationFilter(
    event: React.FormEvent<HTMLFormElement>,
    stateParam: string,
    cityParam: string,
  ) {
    event.preventDefault()
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)
      newParams.set('state', stateParam.toLowerCase())
      if (cityParam) {
        newParams.set('city', cityParam.toLowerCase())
      }
      newParams.set('page', '1')
      return newParams
    })
  }

  function removeLocationFilter() {
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)
      newParams.delete('state')
      newParams.delete('city')
      newParams.set('page', '1')
      return newParams
    })
  }

  useEffect(() => {
    if (params.get('state')) {
      setState(params.get('state')!)
      setActiveFilter(true)
    } else {
      setParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)
        newParams.delete('city')
        return newParams
      })
      setState('')
      setCity('')
      setActiveFilter(false)
    }

    if (params.get('city') && !params.get('state')) {
      setParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)
        newParams.delete('city')
        return newParams
      })
    } else if (params.get('city')) {
      setCity(params.get('city')!)
    } else {
      setCity('')
    }
  }, [params, setParams])

  useEffect(() => {
    async function fetchStates() {
      const statesData = await getBrazilStates()
      setStates(statesData)
    }

    fetchStates()
  }, [])

  async function fetchCities(uf: string) {
    const citiesData = await getBrazilCities(uf)
    setCities(citiesData)
  }

  useEffect(() => {
    if (state) {
      let uf = ''
      states.forEach((item) => {
        if (item.name === state) {
          uf = item.uf
          return
        }
      })
      fetchCities(uf)
    }
  }, [state, states])

  return (
    <div>
      <TitleFilter icon={<LocationOnOutlinedIcon />} title="Localização" />
      <div className="flex w-72 flex-wrap">
        {!activeFilter ? (
          <form
            onSubmit={(event) => addLocationFilter(event, state, city)}
            className="flex w-full flex-col gap-4"
          >
            <select
              value={state}
              onChange={(event) => setState(event.target.value)}
            >
              <option value="">Selecione Estado</option>
              {states.map((state) => (
                <option value={state.name} key={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {state && (
              <select
                value={city}
                onChange={(event) => setCity(event.target.value)}
              >
                <option value="">Selecionar cidade</option>
                {cities.map((city) => (
                  <option value={city.name} key={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            )}
            <div className="flex gap-4">
              <ButtonOk />
              <button
                type="button"
                onClick={() => {
                  setState('')
                  setCity('')
                }}
                className="text-xs underline"
              >
                Limpar
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="flex flex-col">
              <p className="self-left mr-1 text-sm capitalize">
                Estado: {state}
              </p>
              <p className="self-left mr-1 text-sm capitalize">
                Cidade: {city ? city : 'Todas'}
              </p>
            </div>
            <button onClick={() => removeLocationFilter()}>
              <DisabledByDefaultIcon sx={{ color: 'red' }} />
            </button>
          </>
        )}
      </div>
      <DividingLine />
    </div>
  )
}
