/*jslint nomen: true */
/*globals define: true */

/*
  FIELDS:

  body: null
  changed: 1397950478
  comment: 0
  created: 1397950478
  field_funded_amount: 2250000
  field_funder: Object
  field_grant_tags:
    tid: "968"
  field_grant_types: null
  field_internal_notes: "{"impact_area":"Detroit"}"
  field_recipient:
    name: "Knight Detroit Museum Fund"
    target_id: "305"
  field_source: "http://www.knightfoundation.org/grants/20122043/"
  field_year:
    date_type: "datetime"
    timezone: "America/Detroit"
    timezone_db: "America/Detroit"
    value: "2012-01-01 05:00:00"
    value2: "2017-01-01 05:00:00"
  id: 1595
  log: ""
  name: ""
  revision_timestamp: 1397950478
  revision_uid: 0
  status: 1
  title: "Knight Foundation -> Knight Detroit Museum Fund"
  tnid: 0
  translate: 0
  type: "grant"
  uid: 0
  uuid: "cb117794-947d-4b98-b0a6-cbbd447c5778"
  vid: 1595
  vuuid: "7ee7ae2e-15c1-40a2-b99e-7bae102cb25b"
*/

define([
  // Libraries
  'jquery',
  'lodash',
  'backbone',
  'numeral',

  // Project files
  'settings'
],

function($, _, Backbone, numeral, settings) {
  'use strict';

  var Grants = {};

  Grants.Model = Backbone.Model.extend({

    url: function() {
      return settings.api.baseurl + '/grants/' + this.id + '.jsonp/?callback=?';
    },

    toJSON: function() {
      var attributes = _.clone(this.attributes);

      // Format dollar amounts nicely
      if (attributes && attributes.field_funded_amount) {
        attributes.amount = numeral(attributes.field_funded_amount).format('0,0[.]00');
      }

      return attributes;
    }
  });

  Grants.Collection = Backbone.Collection.extend({
    model: Grants.Model,

    initialize: function(options) {
      _.bindAll(this, 'parse', 'url', 'toJSON');
      this.org = options.org;
      this.direction = options.direction;

      this.fetch({reset: true});
    },

    url: function() {
      var url = settings.api.baseurl + '/orgs/' + this.org + '/';
      if(this.direction === 'funded') {
        url += "grants_funded.jsonp/?callback=?";
      }
      else if (this.direction === 'received') {
        url += "grants_received.jsonp/?callback=?";
      }
      return url;
    },

    parse: function(response) {
      return _.values(response)[0];
    }
  });

  return Grants;

});


