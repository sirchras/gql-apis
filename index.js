const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/schema')

const server = new ApolloServer({ typeDefs })

server.listen()
  .then(res => {
    // eslint-disable-next-line no-console, promise/always-return, promise/catch-or-return
    console.log(`🚀 server running @ ${res.url}`)
  })
