
angular.module('angularApp')
  .controller('AnswerCtrl', function ($scope, $routeParams, Answer, growl) {
    $scope.answers =  Answer.query({tweetId:$routeParams.tweetId});

    $scope.answer = function () {
      Answer.save({tweetId:$routeParams.tweetId},{
        authorName: $scope.name,
        authorEmail: $scope.email,
        message: $scope.message
      },function () {
        growl.addSuccessMessage("reply saved !",{ttl: 3000});
        $scope.name = "";
        $scope.email = "";
        $scope.message = "";
      }, function () {
        growl.addErrorMessage("Fail to reply !",{ttl: 3000});
      });
    }

  });
