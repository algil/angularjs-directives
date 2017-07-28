angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.user = {
    name: 'Antonio',
    address: {
      city: 'Malaga',
      country: 'Spain'
    },
    friends: [
        'Sergio',
        'Inma',
        'Izan'
    ]
  }
});

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: 'userInfoCard.html',
    restrict: 'E'
  }
});