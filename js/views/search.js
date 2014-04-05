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
  'text!templates/search.html'

], function($, _, Backbone, Organizations, OrganizationListView, template){

  var SearchView = Backbone.View.extend({

    el: '#content',
    template: _.template(template),

    events: {
      'keyup .search': 'search'
    },

    initialize: function(options) {
      console.log("Initialize organization list");
      _.bindAll(this, 'render', 'search', 'results');

      this.render();
    },

    render: function() {
      console.log("Rendering the search view");
      this.$el.html(this.template({}));
    },

    search: function(event) {
      var val = $(event.target).val();
      console.log(val);
      this.organizations = new Organizations.Collection({
        title: val
      });
      this.organizations.on('reset', this.results);
    },

    results: function() {
      this.listView = new OrganizationListView({
        el: "#results",
        collection: this.organizations
      });
    }
  });

  return SearchView;
});
