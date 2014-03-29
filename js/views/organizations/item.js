/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  'views/grants/list',
  'models/organizations',
  'text!templates/organizations/item.html'
], function($, _, Backbone, GrantListView, Organizations, template){

  var OrganizationView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),

    initialize: function(options) {
      console.log("Initialize organization");
      _.bindAll(this, 'render');

      // Get the organziations
      this.organization = new Organizations.Model({
        id: options.id
      });
      this.organization.fetch();
      this.organization.on('change', this.render);
    },

    render: function() {
      this.$el.html(this.template({
        organization: this.organization.toJSON()
      }));

      this.grantsReceivedView = new GrantListView({
        org: this.organization.get('id'),
        direction: 'received',
        el: '#grants-received'
      });
      this.grantsFundedView = new GrantListView({
        org: this.organization.get('id'),
        direction: 'funded',
        el: '#grants-funded'
      });
    }
  });

  return OrganizationView;
});
