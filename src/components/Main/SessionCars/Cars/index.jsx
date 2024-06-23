import { useEffect, useRef, useState } from "react";
import CardCar from "./CardCar";
import axios from "axios";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import Loading from "../../Loading";

export default function Cars() {

    const [advertisements, setAdvertisements] = useState([])
    const [totalPages, setTotalPages] = useState(10)
    const [totalAdvertisements, setTotalAdvertisements] = useState(0)

    const [searchParams, setSearchParams] = useSearchParams()
    let currentPage = parseInt(searchParams.get('page') || '1', 10)

    const [loading, setLoading] = useState(false);

    const carsSectionRef = useRef(null)

    useEffect(() => {
        setLoading(true)
        axios.get(`https://localhost:3001/advertisements/search`, {
            params: {
                search: searchParams.get('search'),
                page: searchParams.get('page'),
                color: searchParams.get('color'),
                year: searchParams.get('year'),
                state: searchParams.get('state'),
                city: searchParams.get('city'),
                brand: searchParams.get('brand'),
                price: searchParams.get('price'),
            }
        })
            .then(response => {
                setTimeout(() => {
                    setAdvertisements(response.data.advertisements);
                    setTotalPages(response.data.totalPages)
                    setTotalAdvertisements(response.data.totalAdvertisements)
                    setLoading(false)
                }, 1000)
            })
            .catch(error => {
                console.error("Erro ao buscar os dados:", error)
                setLoading(false)
            })
        if (carsSectionRef.current) {
            window.scrollTo({
                top: carsSectionRef.current.offsetTop - 250,
                behavior: 'smooth'
            })
        }
    }, [currentPage, searchParams])

    function changePage(event, value) {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams)
            newParams.set('page', value)
            return newParams
        })
    }

    return (
        <section ref={carsSectionRef} className="flex flex-col min-h-[800px] justify-between relative">
            {totalAdvertisements > 0 ?
                <Typography
                    sx={{ position: 'absolute', color: 'GrayText', fontSize: '0.85rem', top: '-20px' }}
                    component="span"
                >
                    {totalAdvertisements > 1 ? `${totalAdvertisements} anúncios encontrados` : "1 anúncio encontrado"}
                </Typography> :
                ''
            }
            {loading ? (
                <Loading />
            ) : totalAdvertisements === 0 ? (
                <Typography>Nenhum anúncio encontrado com a pesquisa <Typography component="span" fontWeight="bold">{searchParams.get('search')}</Typography></Typography>
            ) : (
                <Box className="flex justify-start flex-wrap gap-8 mt-4">
                    {advertisements.map(ad => (
                        <CardCar {...ad} key={ad._id} />
                    ))}
                </Box>
            )}
            <Stack spacing={2} className="self-end">
                <Pagination page={currentPage} count={totalPages} onChange={changePage} />
            </Stack>
        </section>
    )
}