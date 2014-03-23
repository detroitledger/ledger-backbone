/*jslint nomen: true */
/*globals define: true */

define([
  'jquery',
  'lodash',
  'backbone',
  'views/organizations/list'
], function($, _, Backbone, OrganizationListView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'showOrganizations',
      '/organizations': 'showOrganizations',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var Router = {
    initialize: function(){
      var router = new AppRouter();

      router.on('route:home', function() {
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
