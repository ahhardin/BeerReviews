var ReviewView = Backbone.View.extend({

  className: 'review',

  events: {
    "click .remove-review": "removeReview"
  },

  initialize: function() {
    this.listenTo(this.model, "destroy", this.remove)
  },

  template: Handlebars.compile($('#review-template').html()),

  removeReview: function() {
    this.model.destroy();
  },

  render: function() {
    // console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
