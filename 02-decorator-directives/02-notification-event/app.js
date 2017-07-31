angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.messages = [];
  $scope.handlePause = function(event) {
    $scope.messages.push({text: `paused on ${event.currentTarget.currentTime} seconds`});
  };
});

angular.module('app').directive('eventPause', function ($parse) {
  return {
    restrict: 'A',
    link: function(scope, el, attrs) {
      //In order to parse from string value to executable function
      let eventPauseFunction = $parse(attrs['eventPause']);
      el.on('pause', function(event) {
        //Why is necessary to use apply in custom directives: https://www.sitepoint.com/understanding-angulars-apply-digest/
        scope.$apply(() => {
          eventPauseFunction(scope, {evt: event});
        });
      });
    }
  }
});

angular.module('app').directive('spacebarSupport', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $('body').keypress(function(event) {
        let videoElement = element[0];
        
        if (event.keyCode === 32) {
          if (videoElement.paused) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        }
      });
    }
  }
});