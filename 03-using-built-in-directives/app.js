angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.user = {
    name: 'Antonio',
    //address: {
    //  city: 'Malaga',
    //  country: 'Spain'
    //},
    friends: [
        'Sergio',
        'Inma',
        'Izan'
    ]
  }
});

angular.module('app').directive('userInfoCard', function () {
  return {
    template: 'Name: {{user.name}}<br><div ng-show="!!user.address"><br>Address:<br>{{user.address.city}}<br>({{user.address.country}})<br></div><br>Friends:<br><div ng-repeat="friend in user.friends">{{friend}}</div>',
    restrict: 'E'
  }
});