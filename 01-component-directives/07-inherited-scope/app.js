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
});

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: 'userInfoCard.html',
    restrict: 'E',
    controller: function ($scope) {
      $scope.collapsed = false;

      //this is the parent scope (same $id)
      $scope.rankMe = function() {
        $scope.user.rank = 'Senior Developer';
      };

      $scope.toggleCollapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
    }
  }
});

angular.module('app').directive('address', function () {
  return {
    templateUrl: 'address.html',
    restrict: 'E',
    // 'scope: true' Create a new scope (inherit scope) for this directive but inherit the scope parent (inside the prototype '__proto__')
    // Try turn to false o remove it and check whats happen when click on address title.
    // This happen because collapsed property is the same property of parent directive (userInfoCard) in case that scope attribute is false
    scope: true,
    controller: function ($scope) {
      $scope.collapsed = true;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      };
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      };
    }
  }
});