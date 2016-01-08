(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      //.when('/', {
      //  title         : 'Dashboard',
      //  templateUrl   : 'app/dashboard/dashboard.html',
      //  controller    : 'DashboardController',
      //  controllerAs  : 'vm'
      //})
      .when('/races', {
        title         : 'Races',
        templateUrl   : 'app/dashboard/queries/races/races.html',
        controller    : 'RacesController',
        controllerAs  : 'vm'
      })
      //.when('/results', {
      //  title         : 'Results',
      //  templateUrl   : 'app/dashboard/queries/results/results.html',
      //  controller    : 'ResultsController',
      //  controllerAs  : 'vm'
      //})
      .when('/drivers', {
        title         : 'Drivers',
        templateUrl   : 'app/dashboard/queries/drivers/drivers.html',
        controller    : 'DriversController',
        controllerAs  : 'vm'
      })
      //.when('/constructors', {
      //  title         : 'Constructors',
      //  templateUrl   : 'app/dashboard/queries/constructors/constructors.html',
      //  controller    : 'ConstructorsController',
      //  controllerAs  : 'vm'
      //})
      .otherwise({
        redirectTo    : '/races'
      });
  }



})();
