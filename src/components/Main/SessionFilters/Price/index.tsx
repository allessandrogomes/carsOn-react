import { useSearchParams } from 'react-router-dom'
import Input from '../shared/Input'
import TitleFilter from '../shared/TitleFilter'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import { useEffect, useState } from 'react'
import ButtonOk from '../shared/ButtonOk'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import { formatToBRL } from '../../../../utils/formatToBRL'

export default function Price() {
  const [params, setParams] = useSearchParams()

  const [intervalPrice, setIntervalPrice] = useState({
    minPrice: 0,
    maxPrice: 0,
  })

  const [activeFilter, setActiveFilter] = useState(false)
  const [msgError, setMsgError] = useState('')

  function updateIntervalPrice(intervalType: string, value: string) {
    const price = parseInt(value.replace(/\D/g, ''))
    if (intervalType === 'minPrice') {
      setIntervalPrice((prevInterval) => ({
        ...prevInterval,
        minPrice: price,
      }))
    } else {
      setIntervalPrice((prevInterval) => ({
        ...prevInterval,
        maxPrice: price,
      }))
    }
  }

  function addPriceIntervalFilter(
    event: React.FormEvent<HTMLFormElement>,
    minPrice: number,
    maxPrice: number,
  ) {
    event.preventDefault()
    if (maxPrice < minPrice) {
      setMsgError('O valor "max" precisa ser maior que "min".')
    } else {
      const interval = `${minPrice}-${maxPrice}`
      setParams((prevParams) => {
        const newParams = new URLSearchParams(prevParams)
        newParams.set('price', interval)
        newParams.set('page', '1')
        return newParams
      })
      setMsgError('')
    }
  }

  function removePriceFilter() {
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)
      setIntervalPrice((prevInterval) => {
        prevInterval.minPrice = 0
        prevInterval.maxPrice = 0
        return prevInterval
      })
      newParams.delete('price')
      newParams.set('page', '1')
      return newParams
    })
  }

  useEffect(() => {
    if (params.get('price')) {
      setActiveFilter(true)
      const priceParams = params.get('price')!.split('-')
      setIntervalPrice({
        minPrice: Number(priceParams[0]),
        maxPrice: Number(priceParams[1]),
      })
    } else {
      setActiveFilter(false)
      setIntervalPrice((prevInterval) => {
        prevInterval.minPrice = 0
        prevInterval.maxPrice = 0
        return prevInterval
      })
    }
  }, [params])

  return (
    <div>
      <TitleFilter title="Preço" icon={<AttachMoneyOutlinedIcon />} />
      <div className="flex">
        {activeFilter ? (
          <>
            <span className="mr-1 self-center text-sm underline">
              {formatToBRL(intervalPrice.minPrice)} -{' '}
              {formatToBRL(intervalPrice.maxPrice)}
            </span>
            <button onClick={removePriceFilter}>
              <DisabledByDefaultIcon sx={{ color: 'red' }} />
            </button>
          </>
        ) : (
          <form
            onSubmit={(event) =>
              addPriceIntervalFilter(
                event,
                intervalPrice.minPrice / 100,
                intervalPrice.maxPrice / 100,
              )
            }
          >
            <div className="flex">
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateIntervalPrice('minPrice', event.target.value)
                }
                value={intervalPrice.minPrice}
                placeholder="de"
                h5="ex.: 12.000"
                maxLength={16}
                typeInputPrice
              />
              <Input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  updateIntervalPrice('maxPrice', event.target.value)
                }
                value={intervalPrice.maxPrice}
                placeholder="ate"
                h5="ex.: 48.000"
                maxLength={16}
                typeInputPrice
              />
              <ButtonOk />
            </div>
            {msgError && (
              <span className="text-xs font-bold text-red-600">{msgError}</span>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
