const { ApolloServer } = require('apollo-server')
const typeDefs = require('./graphql/schema')

const server = new ApolloServer({ typeDefs })

server.listen()
  .then(res => {
    console.log(`server running @ ${res.url}`)
  })
