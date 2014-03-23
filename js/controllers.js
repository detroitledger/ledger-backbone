/*globals define: true */

define(['angular'], function (angular) {
    'use strict';

  /* Controllers */
  return angular.module('ledgerApp.controllers', ['ledgerApp.services'])
    .controller('OrganizationListCtrl', function($scope) {
      $scope.orgs = [
        {'name': 'a' },
        {'name': 'b' },
        {'name': 'c' }
      ];
    });
});
