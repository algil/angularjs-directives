angular.module('app', []);

angular.module('app').controller('MainController', ($scope) => {
  $scope.messages = [];
  $scope.handlePause = (event) => {
    $scope.messages.push({text: `paused on ${event.currentTarget.currentTime} seconds`});
  };

  $scope.data = {message: 'I have not been clicked yet'};
  $scope.clickHandler = (d) => {
    d.message = 'I have been clicked';
  };
});

angular.module('app').directive('myClick', ($parse) => {
  return {
    restrict: 'A',
    link: (scope, el, attrs) => {
      let myClickFn = $parse(attrs['myClick']);
      el.click(() => {
        scope.$apply(() => {
          myClickFn(scope);
        });
      });
    }
  }
});

angular.module('app').directive('eventPause', ($parse) => {
  return {
    restrict: 'A',
    link: (scope, el, attrs) => {
      //In order to parse from string value to executable function
      let eventPauseFunction = $parse(attrs['eventPause']);
      el.on('pause', (event) => {
        //Why is necessary to use apply in custom directives: https://www.sitepoint.com/understanding-angulars-apply-digest/
        scope.$apply(() => {
          eventPauseFunction(scope, {evt: event});
        });
      });
    }
  }
});

angular.module('app').directive('spacebarSupport', () => {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      $('body').keypress((event) => {
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