(function() {
  'use strict';

  angular
    .module('GPQuery.dashboard')
    .controller('RacesController', RacesController);


  /** @ngInject */
  function RacesController(ergastService, $log) {
    var vm = this;
    vm.results      = {};
    vm.tableHeaders = [];
    vm.resultsRows  = {};

    activate();

    // Constructor
    // ------------------------------
    function activate() {
      getAll();
    }

    // Mutator Function
    // ------------------------------
    function getAll() {
      var params = {
        season    : 'current',
        round     : '',
        resource  : 'races'
      };

      ergastService.getResource(params).$promise
        .then(function(response) {
          vm.resultsRows = response.MRData.RaceTable.Races;
          vm.results = response.MRData;
          $log.info('XHR response success: ' + vm.results);
        }, function(errorMsg) {
          $log.warn('XHR request failed');
          vm.results = errorMsg;
        });

      vm.tableHeaders = ['Rnd', 'Race', 'Circuit', 'Location', 'Date', 'Time'];

    }

  }
})();
