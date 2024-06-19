import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import Loading from "../../components/Main/Loading"
import { Box } from "@mui/material"

export default function Advertisement() {

    const [searchParams, setSearchParams] = useSearchParams()

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const [ad, setAd] = useState(null)

    useEffect(() => {
        setLoading(true)
        if (searchParams.size) {
            axios.get(`https://localhost:3001/advertisement`, {
                params: { id: searchParams.get('id') }
            })
                .then(response => {
                    setTimeout(() => {
                        setAd(response.data)
                        setLoading(false)
                    }, 500)
                })
                .catch(error => console.error("Erro ao buscar os dados:", error))
        } else {
            navigate("/")
        }
    }, [searchParams])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {loading ? (
                <Loading />
            ) : (
                <div className="flex items-center flex-col">
                    {ad !== null ? (
                        <>
                            <p>{ad.brand} {ad.model} {ad.year}</p>
                            <img className="w-[20%]" src={ad.image} />
                        </>
                    ) : (
                        <p>Anúncio não encontrado...</p>
                    )}
                </div>
            )
            }
        </Box >
    )
}