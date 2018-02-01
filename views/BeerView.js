var BeerView = Backbone.View.extend({

  className: 'beer',

  template: Handlebars.compile($('#beer-template').html()),

  events: {
    'click .beer-name': 'makeEditable'
  }

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  makeEditable: function () {
    this.$el.find('.beer-name').
  }

});
