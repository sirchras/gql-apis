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

  pokemonReducer(pokemon) {
    const { id ,name ,types ,height ,weigth } = pokemon
    return {
      id,
      name,
      types: types.map(({ type: { name, url }}) => ({
        id: Number(url.split('/').filter(itm => !!itm).reverse()[0]),
        name
      })),
      height,
      weigth
    }
  }
}

module.exports = PokemonAPI
