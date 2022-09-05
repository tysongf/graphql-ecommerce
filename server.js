
const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
   typeDefs: loadFilesSync(path.join(__dirname, '**/*.graphql')),
   resolvers: loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))
});

const app = express()
   .use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true
   }))
   .listen(3000, () => {
      console.log(`Running GraphQL Server on port 3000...`);
   }
)
