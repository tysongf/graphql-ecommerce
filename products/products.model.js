
function getAllProducts() {
   return [
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
}

module.exports = {
   getAllProducts,
}
