'use strict';

/**
 * @ngdoc function
 * @name studentsAdmin.controller:EscortListCtrl
 * @description
 * # ScortListCtrl
 * Controller of the studentsAdmin
 */
angular.module('studentsAdmin')
  .controller('studentsController',['$http','$routeParams', function($http,$routeParams){
      var students = this;
      var student = this;
      students.lista = [];
      students.filtro = '';
      student.id = $routeParams.id;
      students.cargar = function(){
          var url = 'api/students/load.php';
          $http.get(url).then(function(response){
            students.lista = response.data;
          },function(error){

          });
      };
      students.eliminar = function() {
          console.log(student.id);
          var url = 'api/students/delete.php?id=' + student.id;
          $http.get(url).then(function (response) {
          },function(error){

          });
      };
      students.cargar();
  }]);