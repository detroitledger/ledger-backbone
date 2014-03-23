/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    text: 'lib/text',
    jquery: 'lib/jquery-1.10.0',
    lodash: 'lib/lodash',
    backbone: 'lib/backbone'
  },

  shim: {
    lodash: {
      exports: '_'
    },

    backbone: {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require(['jquery', 'lodash', 'backbone', 'app'], function ($, _, Backbone, app) {
  'use strict';
  $(document).ready(function () {
      app.initialize();
  });
});
