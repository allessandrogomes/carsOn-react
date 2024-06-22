import { Box, Button, Typography } from "@mui/material";
import DividingLine from "../shared/DividingLine";
import Input from "../shared/Input";
import TitleFilter from "../shared/TitleFilter";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ButtonOk from "../shared/ButtonOk";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function Year() {

    const [params, setParams] = useSearchParams()

    const [intervalYear, setIntervalYear] = useState({
        minYear: "",
        maxYear: ""
    })

    const [activeFilter, setActiveFilter] = useState(false)
    const [msgError, setMsgError] = useState("")

    function updateIntervalYear(intervalType, value) {
        const year = value.replace(/\D/g, '')
        if (intervalType === "minYear") {
            setIntervalYear(prevInterval => ({
                ...prevInterval,
                minYear: year
            }))
        } else {
            setIntervalYear(prevInterval => ({
                ...prevInterval,
                maxYear: year
            }))
        }
    }

    function addYearIntervalFilter(event, minYear, maxYear) {
        event.preventDefault()
        if (maxYear < minYear) {
            setMsgError('O valor "até" precisa ser maior que "de".')
        } else {
            const interval = `${minYear}-${maxYear}`
            setParams(prevParams => {
                const newParams = new URLSearchParams(prevParams)
                newParams.set("year", interval)
                newParams.set("page", 1)
                return newParams
            })
            setMsgError("")
        }
    }

    function removeYearFilter() {
        setParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            setIntervalYear(prevInterval => {
                prevInterval.minYear = ""
                prevInterval.maxYear = ""
                return prevInterval
            })
            newParams.delete("year")
            newParams.set("page", 1)
            return newParams
        })
    }

    useEffect(() => {
        if (params.get("year")) {
            setActiveFilter(true)
            const yearParams = params.get("year").split("-")
            setIntervalYear({
                minYear: yearParams[0],
                maxYear: yearParams[1]
            })
        } else {
            setActiveFilter(false)
            setIntervalYear(prevInterval => {
                prevInterval.minYear = ""
                prevInterval.maxYear = ""
                return prevInterval
            })
        }
    }, [params])

    return (
        <div>
            <TitleFilter title="Ano" icon={<CalendarMonthOutlinedIcon />} />
            <div className="flex">
                {activeFilter ? (
                    <>
                        <span className="text-sm underline self-center mr-1">{intervalYear.minYear} - {intervalYear.maxYear}</span>
                        <button onClick={removeYearFilter}><DisabledByDefaultIcon sx={{ color: "red" }} /></button>
                    </>
                ) : (
                    <form onSubmit={(event) => addYearIntervalFilter(event, intervalYear.minYear, intervalYear.maxYear)}>
                        <div className="flex">
                            <Input onChange={(event) => updateIntervalYear("minYear", event.target.value)} value={intervalYear.minYear} h5="ex.: 2010" minLength="4" maxLength="4" placeholder="de" required />
                            <Input onChange={(event) => updateIntervalYear("maxYear", event.target.value)} value={intervalYear.maxYear} h5="ex.: 2018" minLength="4" maxLength="4" placeholder="ate" required />
                            <ButtonOk />
                        </div>
                        {msgError && <span className="text-red-600 text-xs font-bold">{msgError}</span>}
                    </form>
                )}
            </div>
            <DividingLine />
        </div>
    )
}