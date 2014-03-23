/*jslint nomen: true */
/*globals define: true */


define([
  'jquery',
  'lodash',
  'backbone',

  'settings'
],

function($, _, Backbone, settings) {
  'use strict';

  // Here's the dashboard app:
  // So fancy!
  var Ledger = {
    initialize: function() {
      console.log("Stuff");

      Ledger.router = new RootView();
      Ledger.router.startRouting();
    }
  };

  return Ledger;
});

