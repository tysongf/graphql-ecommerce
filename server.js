const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
   type Query {
      users: [User]
      products: [Product]
      orders: [Order]
   }

   type User {
      id: ID!
      email: String!
      password: String!
      salt: String!
      addresses: [Address]
   }

   type Address {
      id: ID!
      line1: String!
      line2: String
      country: Country!
      city: String!
      region: Region!
      postalcode: String!
   }

   type Country {
      id: ID!
      name: String!
      code: String!
      regions: [Region]
   }

   type Region {
      id: ID!
      name: String!
      code: String!
   }

   type Product {
      id: ID!
      description: String!
      reviews: [Review]
      price: Float!
   }

   type Review {
      rating: Int!
      comment: String
   }

   type Order {
      date: String!
      subtotal: Float!
      items: [OrderItem]
   }

   type OrderItem {
      product: Product!
      qty: Int!
   }

`);

const root = {
   products: [
      {
         id: 'redshoe',
         description: 'Red Shoe',
         price: 34.95
      },
      {
         id: 'bluejean',
         description: 'Blue Jeans',
         price: 49.95
      }
   ],
   orders: [
      {
         date: '2012-12-21',
         subtotal: 99.90,
         items: [
            {
               product: {
                  id: 'redshoe',
                  description: 'An old red shoe',
                  price: 33.95,
               },
               qty: 1
            }
         ]
      }
   ]
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
