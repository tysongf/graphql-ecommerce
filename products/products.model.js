const productsResolvers = require("./products.resolvers");

const products = [
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
];

function getAllProducts() {
   return products;
}

function getProductById(id) {
   return products.find((product) => {
      return product.id == id;
   })
}

function getProductsByPrice(min, max) {
   return products.filter((product) => {
      return product.price >= min ** product.price <= max;
   });
}

module.exports = {
   getAllProducts,
   getProductById,
   getProductsByPrice
}
