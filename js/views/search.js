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
  'views/organizations/list',

  // Templates
  'text!templates/search.html',
  'text!templates/title.html'

], function($, _, Backbone, Organizations, OrganizationListView, template, title){

  var SearchView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),
    title: _.template(title),

    events: {
      'keyup .search': 'search'
    },

    initialize: function(options) {
      console.log("Initialize organization list");
      _.bindAll(this, 'render', 'search', 'error');

      this.render();
    },

    render: function() {
      console.log("Rendering the search view");
      this.$el.html(this.template({}));
      $("#title").html(this.title({
        title: "Welcome to the Detroit Ledger"
      }));

      this.organizations = new Organizations.Collection();
      this.organizations.on('error', function(error){
        // TODO:
        // This should work, but doesn't.
        console.log("Hey! What's wrong?", error);
      });

      this.listView = new OrganizationListView({
        el: "#results",
        collection: this.organizations
      });
      this.organizations.fetch({ reset: true });
    },

    error: function(error) {
      console.log(error);
    },

    search: function(event) {
      var val = $(event.target).val();
      window.ga('send', 'event', 'data', 'search', val);
      this.organizations.search({
        title: val
      });
    }
  });

  return SearchView;
});
