import { useEffect, useState } from "react";
import CardCar from "./CardCar";
import axios from "axios";
import { Box, Pagination, Stack } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function Cars() {

    const [advertisements, setAdvertisements] = useState([])
    const [totalPages, setTotalPages] = useState(10)

    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = parseInt(searchParams.get('page') || '1', 10)

    useEffect(() => {
        axios.get(`https://localhost:3001/advertisements?page=${currentPage}`)
            .then(response => {
                setAdvertisements(response.data.advertisements)
                setTotalPages(response.data.totalPages)
            })
            .catch(error => console.error("Erro ao buscar os dados:", error));
    }, [currentPage])

    function changePage(event, value) {
        setSearchParams({ page: value })
    }

    return (
        <section className="flex flex-col">
            <Box className="flex justify-start flex-wrap gap-8">
                {advertisements.map(ad => (
                    <CardCar {...ad} key={ad._id} />
                ))}
            </Box>
            <Stack spacing={2} className="self-center">
                <Pagination page={currentPage} count={totalPages} onChange={changePage} />
            </Stack>
        </section>
    )
}