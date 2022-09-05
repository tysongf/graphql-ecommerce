module.exports = {
   Query: {
      products: () => { return require('./products.model').getAllProducts() }
   }
}
