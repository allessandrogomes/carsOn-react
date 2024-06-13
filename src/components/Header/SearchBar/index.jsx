import SearchIcon from '@mui/icons-material/Search';
import { Box, Input } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')
    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [showList, setShowList] = useState(false)

    function handleSearchChange(event) {
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        if (searchValue) {
            setShowList(true)
            axios.get(`https://localhost:3001/advertisements/search`, {
                params: { query: searchValue }
            })
                .then(response => {
                    setResults(response.data.advertisements)
                    setTotalResults(response.data.totalAdvertisements)
                })
                .catch(error => {
                    console.error("Erro ao buscar os dados:", error)
                })
        } else {
            setResults([])
            setTotalResults(0)
        }
    }, [searchValue])

    return (
        <div className='relative'>
            <Box sx={{
                alignItems: 'center',
                backgroundColor: '#FFF',
                borderRadius: '32px',
                display: 'flex',
                gap: '5px',
                justifyContent: 'space-between',
                padding: '5px 12px',
                width: { lg: '300px', xl: '500px' }
            }}
            >
                <Input
                    onBlur={() => setShowList(false)}
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Pesquise por um veículo"
                    type="text"
                    disableUnderline
                    sx={{ fontFamily: 'Archivo, sans-serif', width: '100%' }}
                />
                <SearchIcon sx={{ color: '#2DD4BF', cursor: 'pointer' }} />
            </Box>
            {searchValue && (
                <ul className={`${!showList ? 'hidden' : ''} absolute left-5 w-[85%] bg-white text-teal-400`}>
                    {results.map(ad => (
                        <li onClick={e => console.log(e.target.textContent)} className='border-2 py-2' key={ad._id}>
                            <p className='ml-2 cursor-pointer'>{ad.brand} {ad.model} {ad.year}</p>
                        </li>
                    ))}
                    <span className='text-[#757575] ml-2 text-xs opacity-0.5'>
                        {totalResults === 1 ? `${totalResults} resultado encontrado...` : `${totalResults} resultados encontrados...`}
                    </span>
                    {totalResults > 1 ? <li onClick={e => console.log(e.target.textContent)} className='border-2 cursor-pointer py-2'>
                        <p className='ml-2 font-bold text-center'>Ver todos</p>
                    </li> : ''}

                </ul>
            )}
        </div>
    )
}

export default SearchBar