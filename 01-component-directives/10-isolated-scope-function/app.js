angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.user1 = {
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
  $scope.user2 = {
    name: 'Juan',
    address: {
      city: 'Coin',
      country: 'Spain'
    },
    friends: [
      'Fran',
      'Marco'
    ]
  };
});

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: 'userInfoCard.html',
    restrict: 'E',
    scope: {
      // '=' binding is for two-way model binding. The model in parent scope is linked to the model in the directive's isolated scope.
      //same to: '=user' we could specify a name to use in the directive, for instance:
      //user: '=person' should be used like <user-info-card person="somUser">
      user: '=',
      // '@' binding is for passing strings. These strings support {{}} expressions for interpolated values.
      initialCollapsed: '@collapsed'
    },
    controller: function ($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');

      //this is the parent scope (same $id)
      $scope.rankMe = function() {
        $scope.user.rank = 'Senior Developer';
      };

      $scope.toggleCollapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };

      $scope.removeFriend = function(friend) {
        var index = $scope.user.friends.indexOf(friend);
        if (index > -1) {
          $scope.user.friends.splice(index, 1);
        }
      };
    }
  }
});


angular.module('app').directive('friend', function() {
  return {
    templateUrl: 'friend.html',
    restrict: 'E',
    scope: {
      friend: '=data',
      // '&' binding is for passing a method into your directive's scope so that it can be called within your directive.
      notifyParent: '&onRemove'
    },
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      };
      $scope.confirmRemove = function() {
        $scope.notifyParent();
      };
      $scope.cancelRemove = function() {
        $scope.removing = false;
      };
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