var BeerView = Backbone.View.extend({

  className: 'beer',

  template: Handlebars.compile($('#beer-template').html()),

  events: {
    'click .edit': 'editMode',
    'keypress .beer-name': 'submitOnEnter',
    'click .remove' : 'deleteMe'
  },

  initialize: function( ){
    this.listenTo(this.model,'destroy',this.remove)
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  editMode: function () {
    this.$el.addClass('editing');
    this.$('.beer-name').focus();
},

  submitOnEnter: function (e) {
    if (e.keyCode == 13) {
      this.model.set({name: this.$('.edit-mode').val()})
      this.$el.removeClass('editing');
      this.render()
  }
},

close: function () {
  var value = this.$nameInput.val();

  if (!this.model.get('edit_mode')) {
    return;
  }
  this.model.set('name', value);
  this.model.set('edit_mode', false);
  this.model.save();
},

  deleteMe: function() {
    this.model.destroy()
  }
});
