# gql-apis
A quick experiment using GraphQL (Apollo GraphQL) to fetch resources from a REST API. Fetches some basic data about a Pokemon from the [PokeAPI](https://pokeapi.co/).

### To use:

- Fork or clone this repo
- Navigate to the local copy
- Install dependencies, and run using the commands: `npm i && npm start`

The GraphQL Playground should start up @ `localhost:4000` where you can run test queries to see the schema in action.

### To extend:

This experiment was an attempt to create a template/example for myself on how to structure a project using GraphQL, so hopefully you find this helpful. **Some pointers:**

- Add new types, queries, mutations (if using), etc. to the schema `graphql/schema.js`.
- Add new datasources under `graphql/datasources`. New datasources will also need to be linked in `index.js`. Perhaps these could be combined into a single export if they get unwieldy. See `graphql/datasources/pokemon.js` for an example or [here](https://www.apollographql.com/docs/apollo-server/data/data-sources/#rest-data-source) for more information.
- Place resolvers for the datasources in `graphql/resolvers.js`. See [here](https://www.apollographql.com/docs/apollo-server/data/resolvers/) for more info on how to write these. For more datasources/queries `resolvers.js` could be separated into individual files for each datasource under a new directory `graphql/resolvers/`.
