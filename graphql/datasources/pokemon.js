const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemonById({ id }) {
    const res = await this.get(`pokemon/${id}`)
    return this.pokemonReducer(res)
  }
}

module.exports = PokemonAPI
