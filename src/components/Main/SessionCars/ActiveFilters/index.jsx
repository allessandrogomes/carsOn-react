import { useSearchParams } from "react-router-dom";
import ChipActiveFilter from "./ChipActiveFilter";
import { useEffect, useState } from "react";

export default function ActiveFilters() {

    const [params, setParams] = useSearchParams()
    const [filters, setFilters] = useState({
        state: {
            values: []
        },
        color: {
            values: []
        },
        brand: {
            values: []
        },
        year: {
            values: []
        },
        price: {
            values: []
        },
    })

    useEffect(() => {
        const state = {
            values: params.get("state") ? params.get("state").split(',') : []
        }

        const color = {
            values: params.get("color") ? params.get("color").split(',') : []
        }

        const brand = {
            values: params.get("brand") ? params.get("brand").split(',') : []
        }

        const year = {
            values: params.get("year") ? params.get("year").split(',') : []
        }

        const price = {
            values: params.get("price") ? params.get("price").split(',') : []
        }

        setFilters(prevFilters => ({
            ...prevFilters,
            state,
            color,
            brand,
            year,
            price
        }))
    }, [params])

    function handleDeleteFilter(filterValue, filterType) {
        setParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            const currentParams = newParams.get(filterType)
            if (currentParams) {
                const paramsArray = currentParams.split(',').map(term => term.trim()).filter(term => term !== filterValue);

                if (paramsArray.length > 0) {
                    newParams.set(filterType, paramsArray.join(','))
                } else {
                    newParams.delete(filterType)
                }
                newParams.set("page", 1)
                return newParams
            }
        })
    }

    return (
        <div className="w-[95%] min-h-20 justify-start flex flex-wrap items-center text-color3 p-5 font-archivo rounded-full border bg-color4 gap-2">
            <h3>Filtros:</h3>
            {Object.keys(filters).map(filterType => (
                filters[filterType].values.map(filterValue => (
                    <ChipActiveFilter title={filterValue} key={filterValue} handleDelete={() => handleDeleteFilter(filterValue, filterType)} />
                ))
            ))}
        </div>
    )
}