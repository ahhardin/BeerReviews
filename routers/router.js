var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:id': 'showReviews',
    '*default': 'showBeers'
  },

  showReviews: function (id) {
    var allBeers = appModel.get('beers');
    var currentBeer = allBeers.findWhere({_id:id});
    appModel.set('current_beer', currentBeer);
    appModel.set('show_reviews', true);
    appModel.set('beer_id', currentBeer.id)
  },

  showBeers: function () {
    appModel.set('show_reviews', false);
  }
});
