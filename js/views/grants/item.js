/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  // Models
  'models/grants',

  // Templates
  'text!templates/grants/item.html',
  'text!templates/grants/details.html'
], function($, _, Backbone, Grants, template, details){

  var GrantView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),
    details: _.template(details),

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
      console.log(this.grant.toJSON());

      $("#title").html(this.template({
        grant: this.grant.toJSON()
      }));

      this.$el.html(this.details({
        grant: this.grant.toJSON()
      }));
    }
  });

  return GrantView;
});
