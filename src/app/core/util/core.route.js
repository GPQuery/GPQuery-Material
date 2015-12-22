(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/races', {
        templateUrl: 'app/dashboard/races/races.html',
        controller: 'RacesController',
        controllerAs: 'vm'
      })
      .when('/results', {
        templateUrl: 'app/dashboard/results/results.html',
        controller: 'ResultsController',
        controllerAs: 'vm'
      })
      .when('/drivers', {
        templateUrl: 'app/dashboard/drivers/drivers.html',
        controller: 'DriversController',
        controllerAs: 'vm'
      })
      .when('/constructors', {
        templateUrl: 'app/dashboard/constructors/constructors.html',
        controller: 'ConstructorsController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/results'
      });
  }

})();
