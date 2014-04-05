/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files:
  // Models
  'models/organizations',

  // Views
  'views/grants/list',

  // Templates
  'text!templates/organizations/item.html',
  'text!templates/title.html'

], function($, _, Backbone, Organizations, GrantListView, template, title){

  var OrganizationView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),
    title: _.template(title),

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

      $("#title").html(this.title({
        title: this.organization.get('title')
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
