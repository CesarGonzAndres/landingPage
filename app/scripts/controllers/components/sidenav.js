'use strict';

/**
 * @ngdoc function
 * @name escortAdmin.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the escortAdmin
 */
angular.module('studentsAdmin')
.controller('SidenavCtrl', function ($scope, $timeout, $state, $mdSidenav, $mdDialog, $log, Constants) {
 
 
  $scope.toggleLeft = buildDelayedToggler('left');
 
  function buildDelayedToggler(navID) {
    return debounce(function() {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(navID)
        .toggle()
        .then(function () {
        });
    }, 200);
  }
});
