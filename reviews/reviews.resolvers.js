module.exports = {
   Query: {
      reviews: () => { return require('./reviews.model').getAllReviews() }
   }
}
