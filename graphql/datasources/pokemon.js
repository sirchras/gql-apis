const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }
}

module.exports = PokemonAPI
