angular.module('angularApp')
  .factory('Answer', function ($resource) {
    return $resource("http://192.168.10.73:8080/tweets/:tweetId/answers");
  })
