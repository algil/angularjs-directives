angular.module('app', []);

angular.module('app').controller('MainController', function() {
  var vm = this;
  vm.name = 'Antonio';
  vm.address = {
    city: 'Málaga',
    country: 'Spain'
  };
});

angular.module('app').directive('userInfoCard', function () {
  return {
    template: 'Name: {{vm.name}}<br>Address: {{vm.address.city}} ({{vm.address.country}})',
    restrict: 'E'
  }
});