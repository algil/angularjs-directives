angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
});

angular.module('app').directive('spacebarSupport', function () {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      //scope -> the scope of the directive
      //element -> the element (jQuery object) where the directive is on
      //attributes -> attributes of the element
      console.log('scope', scope);
      console.log('element', element);
      console.log('attributes', attributes);

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