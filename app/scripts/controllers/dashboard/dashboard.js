'use strict';

/**
 * @ngdoc function
 * @name escortAdmin.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the escortAdmin
 */
angular.module('escortAdmin')
  .controller('DashboardCtrl', function ($scope, $mdDialog, $auth, $state, Notification) {
    $scope.dashboard = {};
    $scope.newMessage = function (dashboard) {
      Notification.post(dashboard, function(data) {
        $scope.SuccessMessage();
        $scope.dashboard = {};
      });
    };
    $scope.SuccessMessage = function(ev) {
      $mdDialog.show({
        controller: SuccessMessageCtrl,
        templateUrl: 'views/modals/success-message.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen,
      })
      .then(function() {
      }, function() {
      });
    };
    function SuccessMessageCtrl($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
    if(!$auth.isAuthenticated()) {
      $state.go('auth.login');
     }
  });
