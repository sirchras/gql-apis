module.exports = {
  Query: {
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonById({ id })
    }
  }
}
