/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  'models/grants',
  'text!templates/grants/list.html'
], function($, _, Backbone, Organizations, template){

  var GrantListView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),

    initialize: function(options) {
      console.log("Initialize grant list");
      _.bindAll(this, 'render');

      // Get the organziations
      this.grants = new Grants.Collection();
      this.grants.bind('reset', this.render);
    },

    render: function() {
      console.log("Rendering these grants: ", this.grants);
      this.$el.html(this.template({
        grants: this.grants.toJSON()
      }));
    }
  });

  return OrganizationListVIew;
});
