var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),
      current_beer: null,
      beer_id: null,
      show_reviews: false
    }
  }
});
