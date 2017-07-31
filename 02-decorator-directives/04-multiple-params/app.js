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
    ],
    level: 1
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
    ],
    level: 2
  };
});

angular.module('app').directive('stateDisplay', () => {
  return {
    restrict: 'A',
    link: (scope, el, attrs) => {
      let params = attrs['stateDisplay'].split(' ');
      let linkVar = params[0];
      let classes = params.slice(1);

      scope.$watch(linkVar, (newValue) => {
        el.removeClass(classes.join(' '));
        el.addClass(classes[newValue]);
      });
    }
  }
});

angular.module('app').directive('userInfoCard', function () {
  return {
    templateUrl: 'userInfoCard.html',
    restrict: 'E',
    scope: {
      user: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function ($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');

      $scope.nextState = () => {
        console.log('aaa');
        //$scope.user.level = ++$scope.user.level % 4;
        $scope.user.level++;
        $scope.user.level = $scope.user.level % 4;
        console.log($scope.user.level);
      };

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