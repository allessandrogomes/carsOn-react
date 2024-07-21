import ICity from '../interfaces/ICity'
import IState from '../interfaces/IState'

export async function getBrazilStates(): Promise<IState[]> {
  try {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
    )
    const data = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filteredData: IState[] = data.map((state: any) => ({
      id: state.id,
      uf: state.sigla,
      name: state.nome,
    }))
    const states: IState[] = filteredData.sort((a, b) =>
      a.name.localeCompare(b.name),
    )
    return states
  } catch (error) {
    console.error('Erro ao buscar os Estados:', error)
    return []
  }
}

export async function getBrazilCities(uf: string) {
  try {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
    )
    const data = await response.json()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cities: ICity[] = data.map((city: any) => ({
      id: city.id,
      name: city.nome,
    }))
    return cities
  } catch (error) {
    console.log('Erro ao buscar as Cidades', error)
    return []
  }
}
