import { screen, render } from '@testing-library/react'
import DefaultPage from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Deve existir na Página Padrão', () => {
  test('o Cabeçalho', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <DefaultPage />
      </MemoryRouter>,
    )

    const defaultPage = screen.getByTestId('header')
    expect(defaultPage).toBeInTheDocument()
  })
})
