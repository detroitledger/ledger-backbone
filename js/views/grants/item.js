/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  'models/grants',
  'text!templates/grants/item.html'
], function($, _, Backbone, Grants, template){

  var GrantView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),

    initialize: function(options) {
      console.log("Initialize grant");
      _.bindAll(this, 'render');

      // Get the organziations
      this.grant = new Grants.Model({
        id: options.id
      });
      this.grant.fetch();
      this.grant.bind('change', this.render);
    },

    render: function() {
      this.$el.html(this.template({
        grant: this.grant.toJSON()
      }));
    }
  });

  return GrantView;
});
