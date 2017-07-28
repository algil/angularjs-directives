angular.module('app', []);

angular.module('app').controller('MainController', function() {
  var vm = this;
  vm.user = {
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
    template: 'Name: {{vm.user.name}}<br><div ng-show="!!vm.user.address"><br>Address:<br>{{vm.user.address.city}}<br>({{vm.user.address.country}})<br></div><br>Friends:<br><div ng-repeat="friend in vm.user.friends">{{friend}}</div>',
    restrict: 'E'
  }
});