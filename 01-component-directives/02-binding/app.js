angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.user = {
    name:'Antonio',
    address: {
      city: 'Málaga',
      country: 'Spain'
    }
  };

});

angular.module('app').directive('userInfoCard', function () {
  return {
    template: 'Name: {{user.name}}<br>Address: {{user.address.city}} ({{user.address.country}})',
    restrict: 'E'
  }
});