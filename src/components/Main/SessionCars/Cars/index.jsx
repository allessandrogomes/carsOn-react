import { useEffect, useRef, useState } from "react";
import CardCar from "./CardCar";
import axios from "axios";
import { Box, CircularProgress, Pagination, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function Cars() {

    const [advertisements, setAdvertisements] = useState([])
    const [totalPages, setTotalPages] = useState(10)

    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    const [loading, setLoading] = useState(false);

    const carsSectionRef = useRef(null)

    useEffect(() => {
        if (carsSectionRef.current) {
            window.scrollTo({
                top: carsSectionRef.current.offsetTop - 250,
                behavior: 'smooth'
            });
        }
        setLoading(true)
        axios.get(`https://localhost:3001/advertisements?page=${currentPage}`)
            .then(response => {
                setTimeout(() => {
                    setAdvertisements(response.data.advertisements);
                    setTotalPages(response.data.totalPages);
                    setLoading(false);
                }, 1500)
            })
            .catch(error => {
                console.error("Erro ao buscar os dados:", error)
                setLoading(false)
            })
    }, [currentPage])

    function changePage(event, value) {
        setSearchParams({ page: value })
    }

    return (
        <section ref={carsSectionRef} className="flex flex-col min-h-[800px] justify-between">
            {loading ? (
                <Box sx={{ display: 'flex', alignSelf: 'center', alignItems: 'center', mt: '100px', gap: '15px' }}>
                    <Typography fontWeight="bold">Carregando</Typography>
                    <CircularProgress />
                </Box>
            ) : (
                <Box className="flex justify-start flex-wrap gap-8">
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