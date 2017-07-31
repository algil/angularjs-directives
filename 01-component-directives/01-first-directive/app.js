angular.module('app', []);

angular.module('app').controller('MainController', function() {
});

angular.module('app').directive('userInfoCard', function () {
  return {
    template: "User Info Card",
    restrict: "E"
  }
});