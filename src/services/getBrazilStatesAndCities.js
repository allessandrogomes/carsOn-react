export async function getBrazilStates() {
    try {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        const states = await response.json()

        const sortedStates = states.sort((a, b) => a.nome.localeCompare(b.nome))
        return sortedStates.map(state => ({
            id: state.id,
            uf: state.sigla,
            name: state.nome
        }))
    } catch (error) {
        console.log("Erro ao buscar os estados", error)
        return []
    }
}

export async function getBrazilCities(uf) {
    try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cities = await response.json()
        return cities.map(city => ({
            id: city.id,
            name: city.nome
        }))
    } catch (error) {
        console.log("Erro ao buscar as cidades", error)
        return []
    }
}