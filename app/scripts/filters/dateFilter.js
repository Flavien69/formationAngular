angular.module('angularApp')
  .filter('date', function() {
  return function(timestamp) {
     return moment(timestamp).fromNow();
  }
});
