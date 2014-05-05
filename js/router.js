/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files:
  // Views
  'views/search',
  'views/organizations/list',
  'views/organizations/item'

], function($, _, Backbone,
                  SearchView,
                  OrganizationListView,
                  OrganizationItemView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',

      'organizations/:id': 'showOrganization',
      'organizations(/)': 'showOrganizations',

      'grants(/)': 'showGrants',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var Router = {
    initialize: function(){
      var router = new AppRouter();

      router.on('route:home', function() {
        var homeView = new SearchView({});
      });

      router.on('route:showOrganization', function(id) {
        console.log("Show organzation", id);
        var itemView = new OrganizationItemView({
          id: id
        });
      });

      router.on('route:showOrganizations', function() {
        console.log("Show organizations");
        var listView = new OrganizationListView();
      });

      router.on('route:defaultAction', function(actions) {
        console.log('No route:', actions);
      });

      Backbone.history.start();
    }
  };

  return Router;
});
