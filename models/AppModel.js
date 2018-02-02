var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),
      current_beer: null,
      show_reviews: false
    }
  },

  newReviewUrl: function () {
    newUrl = "https://beer-review-api.herokuapp.com/beers/"+this.get('current_beer').get('_id')
    this.get('current_beer').get('reviews').url = newUrl+'/reviews'
  },

  initialize: function() {
    this.on('change:current_beer',this.newReviewUrl)
  },
});
