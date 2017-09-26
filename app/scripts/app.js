'use strict';

/**
 * @ngdoc overview
 * @name escortAdmin
 * @description
 * # escortAdmin
 *
 * Main module of the application.
 */
angular
  .module('escortAdmin', [
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'angular-carousel',
    'ngMask',
    'ngFileUpload',
    'ngImgCrop',
    'satellizer',
    'ngDroplet'
  ])
  .config(function($stateProvider, $urlRouterProvider, $compileProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    // APP
    .state('app', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      abstract: true,
    })
    .state('app.studentsList', {
      url: 'studentsList',
      templateUrl: 'views/students/studentsList.html',
      controller: 'studentsController',
    });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('escort-red-theme')
      .primaryPalette('red');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('escort-blue-theme')
      .primaryPalette('blue')
      .warnPalette('grey');
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('escort-green-theme')
      .primaryPalette('green');
  });
