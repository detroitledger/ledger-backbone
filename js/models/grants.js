/*jslint nomen: true */
/*globals define: true */

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',

  // Project files
  'settings'
],

function($, _, Backbone, settings) {
  'use strict';

  var Organizations = {};

  Organizations.Model = Backbone.Model.extend({
    initialize: function(options) {
      console.log(options);
      this.fetch();
    },

    url: function() {
      return settings.api.baseurl + '/orgs/' + this.id + ".jsonp/?callback=?";
    }
  });


  Organizations.Collection = Backbone.Collection.extend({
    model: Organizations.Model,
    url: settings.api.baseurl + "/orgs.jsonp/?callback=?",

    initialize: function(options) {
      _.bindAll(this, 'parse');
      this.fetch({reset: true});
    },

    parse: function(response) {
      return _.values(response);
    }
  });

  return Organizations;

});


