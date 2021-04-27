const { ApolloServer } = require('apollo-server')

const typeDefs = require('./graphql/schema')
const PokemonAPI = require('./graphql/datasources/pokemon')

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI()
  })
})

server.listen()
  .then(res => {
    // eslint-disable-next-line no-console, promise/always-return, promise/catch-or-return
    console.log(`🚀 server running @ ${res.url}`)
  })
