import { useSearchParams } from 'react-router-dom'
import ChipActiveFilter from './ChipActiveFilter'
import { useEffect, useState } from 'react'

interface IFilterValues {
  values: string[]
}

interface IFilters {
  state: IFilterValues
  city: IFilterValues
  color: IFilterValues
  brand: IFilterValues
  year: IFilterValues
  price: IFilterValues
}

export default function ActiveFilters() {
  const [params, setParams] = useSearchParams()
  const [filters, setFilters] = useState<IFilters>({
    state: { values: [] },
    city: { values: [] },
    color: { values: [] },
    brand: { values: [] },
    year: { values: [] },
    price: { values: [] },
  })

  useEffect(() => {
    const state = {
      values: params.get('state') ? params.get('state')!.split(',') : [],
    }

    const city = {
      values: params.get('city') ? params.get('city')!.split(',') : [],
    }

    const color = {
      values: params.get('color') ? params.get('color')!.split(',') : [],
    }

    const brand = {
      values: params.get('brand') ? params.get('brand')!.split(',') : [],
    }

    const year = {
      values: params.get('year') ? params.get('year')!.split(',') : [],
    }

    const price = {
      values: params.get('price') ? params.get('price')!.split(',') : [],
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      state,
      city,
      color,
      brand,
      year,
      price,
    }))
  }, [params])

  function handleDeleteFilter(filterValue: string, filterType: keyof IFilters) {
    setParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams)
      const currentParams = newParams.get(filterType)

      if (currentParams) {
        const paramsArray = currentParams
          .split(',')
          .map((term) => term.trim())
          .filter((term) => term !== filterValue)

        if (paramsArray.length > 0) {
          newParams.set(filterType, paramsArray.join(','))
        } else {
          newParams.delete(filterType)
        }
      }

      newParams.set('page', '1')
      return newParams
    })
  }

  return (
    <div className="flex min-h-20 w-[95%] flex-wrap items-center justify-start gap-2 rounded-full border bg-color4 p-5 font-archivo text-color3">
      <h3>Filtros:</h3>
      {Object.keys(filters).map((filterType) =>
        filters[filterType as keyof IFilters].values.map(
          (filterValue: string) => (
            <ChipActiveFilter
              filterType={filterType}
              filter={filterValue}
              key={filterValue}
              handleDelete={() =>
                handleDeleteFilter(filterValue, filterType as keyof IFilters)
              }
            />
          ),
        ),
      )}
    </div>
  )
}
