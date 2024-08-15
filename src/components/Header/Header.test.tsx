import { MemoryRouter } from 'react-router-dom'
import Header from '.'
import { screen, render } from '@testing-library/react'

const setWindowWidth = (width: number) => {
  window.innerWidth = width
  window.dispatchEvent(new Event('resize'))
}

describe('Deve existir no cabeçalho', () => {
  test('a logomarca (Desktop)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const logoDesktop = screen.getByTestId('logoDesktop')
    expect(logoDesktop).toBeInTheDocument()
  })

  test('a logomarca (Mobile)', () => {
    setWindowWidth(899)

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const logoMobile = screen.getByTestId('logoMobile')
    expect(logoMobile).toBeInTheDocument()
  })

  test('o campo de pesquisa', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const searchBar = screen.getByLabelText('Search Bar')
    expect(searchBar).toBeInTheDocument()
  })

  test('o botão Anunciar Veículo (Desktop)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const advertiseButtonDesktop = screen.getByTestId('advertiseButtonDesktop')
    expect(advertiseButtonDesktop).toBeInTheDocument()
  })

  test('o botão Anunciar Veículo (Mobile)', () => {
    setWindowWidth(899)
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const advertiseButtonMobile = screen.getByTestId('advertiseButtonMobile')
    expect(advertiseButtonMobile).toBeInTheDocument()
  })

  test('o botão Chat (Desktop)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const chatButtonDesktop = screen.getByTestId('chatButtonDesktop')
    expect(chatButtonDesktop).toBeInTheDocument()
  })

  test('o botão Chat (Mobile)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const chatButtonMobile = screen.getByTestId('chatButtonMobile')
    expect(chatButtonMobile).toBeInTheDocument()
  })

  test('o botão Entrar (Desktop)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const loginButtonDesktop = screen.getByTestId('loginButtonDesktop')
    expect(loginButtonDesktop).toBeInTheDocument()
  })

  test('o botão Entrar (Mobile)', () => {
    setWindowWidth(899)

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const loginButtonMobile = screen.getByTestId('loginButtonMobile')
    expect(loginButtonMobile).toBeInTheDocument()
  })

  test('o botão Registrar-se (Desktop)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const registerButtonDesktop = screen.getByTestId('registerButtonDesktop')
    expect(registerButtonDesktop).toBeInTheDocument()
  })
  test('o botão Registrar-se (Mobile)', () => {
    setWindowWidth(899)

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const registerButtonMobile = screen.getByTestId('registerButtonMobile')
    expect(registerButtonMobile).toBeInTheDocument()
  })
})
