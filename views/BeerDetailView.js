var BeerDetailView = Backbone.View.extend({
  tagName: 'reviews-container-inner',

  template: Handlebars.compile($('#beer-detail-template').html()),

  events: {
    "click .submit-review" : "createReview"
  },

  initialize: function() {
    this.listenTo(this.model.get('reviews'), 'add', this.renderReview);
    this.renderReviews();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    this.renderReviews();

    return this;
  },

  createReview: function() {
    var reviewCollection = this.model.get('reviews')
    var newUrl = "https://beer-review-api.herokuapp.com/beers/"+appModel.get('current_beer').id
    reviewCollection.url = newUrl+'/reviews'
    reviewCollection.create({
      name: this.$('#review-name-input').val(),
      text: this.$('#review-notes-input').val(),
    }, { wait: true });
  },

  renderReviews: function() {
    this.model.get('reviews').each(function (m) {
      this.renderReview(m);
    }, this);
  },

  renderReview: function (review) {
    var reviewView = new ReviewView({model:review});
    this.$('.reviews-list').append(reviewView.render().el)
  }
});
