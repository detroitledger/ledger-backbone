/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  'models/organizations',
  'text!templates/organizations/list.html'
], function($, _, Backbone, Organizations, template){

  var OrganizationListVIew = Backbone.View.extend({

    el: '#content',
    template: _.template(template),

    initialize: function(options) {
      console.log("Initialize organization list");
      _.bindAll(this, 'render');

      // Get the organziations
      this.organizations = new Organizations.Collection();
      this.organizations.bind('reset', this.render);
    },

    render: function() {
      console.log("Rendering these organizations: ", this.organizations);
      this.$el.html(this.template({
        organizations: this.organizations.toJSON()
      }));
    }
  });

  return OrganizationListVIew;
});
