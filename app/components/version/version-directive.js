'use strict';

(function() {
    angular.module('myApp.version.version-directive', [])

        .directive('appVersion', ['version', function(version) {
            return function(scope, elm, attrs) {
                elm.text(version);
            };
        }]);

})();