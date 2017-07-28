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
    restrict: 'E',
    //This attribute replace custom tags element (<user-info-card>) for a valid html tags (<div >)
    //If this is true, template only must have a root element
    //NOTE: It's not a good practice to use replace attribute
    replace: true
  }
});