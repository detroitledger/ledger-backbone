/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files:
  // Models
  'models/flags',

  // Templates
  'text!templates/flag.html'
], function($, _, Backbone, Flags, template){

  var PageView = Backbone.View.extend({
    el: '#flag',
    events: {
      'click .flag-toggle': 'show',
      'click .submit': 'submit'
    },
    template: _.template(template),

    initialize: function(options) {
      console.log("Initialize flag");
      _.bindAll(this, 'render', 'show', 'submit');

      this.flag = new Flags.Model({
        target_id: options.target_id
      });
      this.render();
    },

    render: function() {
      console.log("Rendering flag", this.model);
      this.$el.html(this.template({
        nid: this.nid
      }));
    },

    submit: function(event) {
      console.log('Submitting', event);
      event.preventDefault();
      var text = $('#flag textarea').val();
      console.log(text);
      this.flag.set('note');
      this.flag.save();
    },

    show: function(event) {
      console.log('Showing flag', event);
      event.preventDefault();
      $('.flag').show();
    }
  });

  return PageView;
});
