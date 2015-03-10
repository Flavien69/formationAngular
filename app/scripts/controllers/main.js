'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.hellos = [
      {title: 'hello', description: 'english'},
      {title: 'bonjour', description: 'french'},
      {title: 'hola', description: 'spanish'}];
  });
