const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const schema = makeExecutableSchema({
   typeDefs: loadFilesSync(path.join(__dirname, '**/*.graphql'))
});

const root = {
   users: require('./users/user.model'),
   products: require('./products/product.model'),
   orders: require('./orders/orders.model')
}

const app = express();
app.use('/graphql', graphqlHTTP({
   schema: schema,
   rootValue: root,
   graphiql: true
}));

app.listen(3000, () => {
   console.log(`Running GraphQL Server on port 3000...`);
})
