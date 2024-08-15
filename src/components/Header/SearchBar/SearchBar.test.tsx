import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchBar from '.'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Ao digitar no campo de pesquisa', () => {
  test('deve receber o valor digitado', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        advertisements: [
          {
            _id: '666910e72df21cf74befc042',
            brand: 'Volkswagen',
            model: 'Golf',
            year: '2005',
          },
        ],
        totalAdvertisements: 1,
      },
    })

    render(
      <MemoryRouter initialEntries={['/']}>
        <SearchBar />
      </MemoryRouter>,
    )

    const input = screen.getByTestId('searchInput')

    fireEvent.change(input, { target: { value: 'golf' } })

    // Espera finalizar todas as requisições assíncronas antes de verificar sua existência
    await waitFor(() => {
      expect(input).toHaveValue('golf')
    })
  })

  test('deve renderizar a lista de sugestão', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        advertisements: [
          {
            _id: '666910e72df21cf74befc042',
            brand: 'Volkswagen',
            model: 'Golf',
            year: '2005',
          },
        ],
        totalAdvertisements: 1,
      },
    })

    render(
      <MemoryRouter initialEntries={['/']}>
        <SearchBar />
      </MemoryRouter>,
    )

    const input = screen.getByTestId('searchInput')

    fireEvent.change(input, { target: { value: 'golf' } })

    // Espera finalizar todas as requisições assíncronas antes de verificar sua existência
    await waitFor(() => {
      const list = screen.getByTestId('suggestionList')
      expect(list).toBeInTheDocument()
    })
  })
})
