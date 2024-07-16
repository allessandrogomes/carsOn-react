import ICity from '../interfaces/ICity'
import IState from '../interfaces/IState'

export async function getBrazilStates() {
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const data = await response.json()
    const states: IState[] = data.map((state: IState) => ({
      id: state.id,
      uf: state.sigla,
      name: state.nome,
    }))
    const sortedStates = states.sort((a, b) => a.nome.localeCompare(b.nome))
    return sortedStates
  } catch (error) {
    console.log('Erro ao buscar os estados', error)
    return []
  }
}

export async function getBrazilCities(uf: string) {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    )
    const data = await response.json()
    const cities = data.map((city: ICity) => ({
      id: city.id,
      name: city.nome,
    }))
    return cities
  } catch (error) {
    console.log('Erro ao buscar as cidades', error)
    return []
  }
}
