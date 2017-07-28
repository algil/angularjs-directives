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
  };
  console.log($scope);
});

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: 'userInfoCard.html',
    restrict: 'E',
    //'scope: true' Create a new scope for this directive but inherit the scope parent (inside the prototype '__proto__')
    scope: true,
    controller: function ($scope) {
      //this print a different scope
      console.log($scope);

      $scope.rankMe = function() {
        //Accessing to a inherited parent property
        $scope.user.rank = 'Senior Developer';
      };
    }
  }
});