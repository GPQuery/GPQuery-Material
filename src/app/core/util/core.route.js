(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/races', {
        templateUrl: 'app/dashboard/queries/races/races.html',
        controller: 'RacesController',
        controllerAs: 'vm'
      })
      .when('/results', {
        templateUrl: 'app/dashboard/queries/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'vm'
      })
      .when('/drivers', {
        templateUrl: 'app/dashboard/queries/drivers/drivers.html',
        controller: 'DriversController',
        controllerAs: 'vm'
      })
      .when('/constructors', {
        templateUrl: 'app/dashboard/queries/constructors/constructors.html',
        controller: 'ConstructorsController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/results'
      });
  }

})();
