var BeerModel = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: function() {
    return {
      id: null,
      name: '',
      style: '',
      image_url: '',
      abv: 0,
      reviews: new ReviewsCollection(),
    }
  },
  parse: function (response) {
  var reviews = this.get('reviews') || new ReviewsCollection();

  reviews.set(response.reviews);
  response.reviews = reviews

  return response;
}
});
