'use strict';

angular.module('angularApp')
  .controller('DetailCtrl', function ($scope, Tweet) {
    $scope.tweets =  Tweet.query();
  });

