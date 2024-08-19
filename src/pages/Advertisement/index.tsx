import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Loading from '../../components/Main/Loading'
import { Box } from '@mui/material'
import { IAdvertisement } from '../../interfaces/IAdvertisement'
import apiService from '../../services/apiService'

export default function Advertisement() {
  const [searchParams] = useSearchParams()

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const [ad, setAd] = useState<IAdvertisement | null>(null)

  useEffect(() => {
    setLoading(true)
    if (searchParams.size) {
      apiService
        .get('/advertisement', {
          params: { id: searchParams.get('id') },
        })
        .then((response) => {
          setTimeout(() => {
            setAd(response.data)
            setLoading(false)
          }, 500)
        })
        .catch((error) => console.error('Erro ao buscar os dados:', error))
    } else {
      navigate('/')
    }
  }, [navigate, searchParams])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center">
          {ad !== null ? (
            <>
              <p>
                {ad.brand} {ad.model} {ad.year}
              </p>
              <img
                className="w-[20%]"
                src={ad.image}
                alt={'Foto do carro' + ' ' + ad.brand + ' ' + ad.model}
              />
            </>
          ) : (
            <p>Anúncio não encontrado...</p>
          )}
        </div>
      )}
    </Box>
  )
}
