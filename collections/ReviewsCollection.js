var ReviewsCollection = Backbone.Collection.extend({
  // Reference to this collection's model.
  url: null,
  model: ReviewModel,

  initalize: function() {
    console.log(this.model)
  }
});
