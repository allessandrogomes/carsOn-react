import SearchIcon from '@mui/icons-material/Search'
import { Box, Input } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IAdvertisement } from '../../../interfaces/IAdvertisement'
import apiService from '../../../services/apiService'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [results, setResults] = useState<IAdvertisement[] | []>([])
  const [totalResults, setTotalResults] = useState<number>(0)
  const [showList, setShowList] = useState<boolean>(false)

  const navigate = useNavigate()

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    if (searchValue) {
      setShowList(true)
      apiService
        .get('/advertisements/search', {
          params: { search: searchValue },
        })
        .then((response) => {
          const { advertisements, totalAdvertisements } = response.data || {}

          if (advertisements && totalAdvertisements !== undefined) {
            setResults(response.data.advertisements)
            setTotalResults(response.data.totalAdvertisements)
          } else {
            console.error('Estrutura de resposta inesperada:', response.data)
            setResults([])
            setTotalResults(0)
          }
        })
        .catch((error) => {
          console.error('Erro ao buscar os dados:', error)
          setResults([])
          setTotalResults(0)
        })
    } else {
      setResults([])
      setTotalResults(0)
    }
  }, [searchValue])

  function handleBlur() {
    setTimeout(() => {
      setShowList(false)
    }, 500)
  }

  return (
    <div aria-label="Search Bar" className="relative">
      <Box
        sx={{
          alignItems: 'center',
          backgroundColor: '#FFF',
          borderRadius: '32px',
          display: 'flex',
          gap: '5px',
          justifyContent: 'space-between',
          padding: '5px 12px',
          width: { lg: '300px', xl: '500px' },
        }}
      >
        <Input
          inputProps={{ 'data-testid': 'searchInput' }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              navigate(`/?search=${searchValue}`)
              setShowList(false)
            }
          }}
          onBlur={handleBlur}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Pesquise por um veículo"
          type="text"
          disableUnderline
          sx={{ fontFamily: 'Archivo, sans-serif', width: '100%' }}
        />
        <SearchIcon
          onClick={() => navigate(`/?search=${searchValue}`)}
          sx={{ color: '#2DD4BF', cursor: 'pointer' }}
        />
      </Box>
      {searchValue && (
        <ul
          data-testid="suggestionList"
          className={`${!showList ? 'hidden' : ''} absolute left-5 w-[85%] bg-white text-teal-400`}
        >
          {results.map((ad) => (
            <li className="border-2 py-2" key={ad._id}>
              <button
                onClick={() => navigate(`advertisement?id=${ad._id}`)}
                className="ml-2 cursor-pointer"
              >
                {ad.brand} {ad.model} {ad.year}
              </button>
            </li>
          ))}
          <span className="opacity-0.5 ml-2 text-xs text-[#757575]">
            {totalResults === 1
              ? `${totalResults} resultado encontrado...`
              : `${totalResults} resultados encontrados...`}
          </span>
          {totalResults > 1 ? (
            <li className="cursor-pointer border-2 py-2">
              <button onClick={() => navigate(`/?search=${searchValue}`)}>
                <p className="ml-2 text-center font-bold">Ver todos</p>
              </button>
            </li>
          ) : (
            ''
          )}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
