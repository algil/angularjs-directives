angular.module('app', []);

angular.module('app').controller('MainController', ($scope) => {
  $scope.size = 150;
});

angular.module('app').directive('fontScale', () => {
  return {
    restrict: 'A',
    link: (scope, el, attrs) => {
      scope.$watch(attrs['fontScale'], (newValue) => {
        el.css('font-size', `${newValue}%`);
      });
    }
  }
});

angular.module('app').directive('color', () => {
  return {
    restrict: 'A',
    link: (scope, el, attrs) => {
      scope.$watch(attrs['color'], (newValue) => {
        console.log(newValue);
        el.css('color', `${newValue}`);
      });
    }
  }
});