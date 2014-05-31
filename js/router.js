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
  'views/organizations/item',
  'views/grants/item',
  'views/page'

], function($, _, Backbone,
                  SearchView,
                  OrganizationListView,
                  OrganizationItemView,
                  GrantItemView,
                  PageView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',

      'organizations/:id': 'showOrganization',
      'organizations(/)': 'showOrganizations',

      'grants/:id': 'showGrant',

      ':id': 'showPage',

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
        var listView = new OrganizationListView();
      });

      router.on('route:showGrant', function(id) {
        var itemView = new GrantItemView({
          id: id
        });
      });

      router.on('route:showPage', function(id) {
        var pageView = new PageView({
          id: id
        });
      });

      router.on('oute:defaultAction', function(actions) {
        console.log('No route:', actions);
      });

      Backbone.history.start();
    }
  };

  return Router;
});
