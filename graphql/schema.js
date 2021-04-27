const { gql } = require('apollo-server')

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    types: [Type]!
    height: Int!
    weight: Int!
  }
  type Type {
    id: ID!
    name: String!
  }
  type Query {
    pokemon(id: ID!): Pokemon
  }
`

module.exports = typeDefs
