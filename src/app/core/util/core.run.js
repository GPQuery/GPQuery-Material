(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $route, $log) {


    //  Route Change Page Title
    // ------------------------------

    $rootScope.$on('$routeChangeSuccess', function() {

      $rootScope.title = $route.current.title;
      $log.debug('Route Change: ' + $rootScope.title);

    });

  }

})();
