'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('AboutCtrl', function ($scope, Tweet, Answer, growl) {

    $scope.tweets =  Tweet.query();
    $scope.answers = [];

    $scope.saveTweet = function () {
      Tweet.save({
        authorName: $scope.name,
        authorEmail: $scope.email,
        message: $scope.message
      },function () {
        growl.addSuccessMessage("Tweet saved !",{ttl: 3000});
        $scope.name = "";
        $scope.email = "";
        $scope.message = "";
      }, function () {
        growl.addErrorMessage("Fail to save Tweet !",{ttl: 3000});
      });
    }

    $scope.loadAnswers = function(id) {
      if(!$scope.answers[id]) {
        $scope.answers[id] = [];
      }
      $scope.answers[id].push(Answer.query({tweetId: id}));

    }

  });
