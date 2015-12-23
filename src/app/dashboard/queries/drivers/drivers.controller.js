(function() {
  'use strict';

  angular
    .module('GPQuery.dashboard')
    .controller('DriversController', DriversController);


  /** @ngInject */
  function DriversController(ergastService, $log) {
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
        resource  : 'drivers'
      };

      ergastService.getResource(params).$promise
        .then(function(response) {
          vm.resultsRows = response.MRData.DriverTable.Drivers;
          vm.results = response.MRData;
          $log.info('XHR response success: ' + vm.results);
        }, function(errorMsg) {
          $log.warn('XHR request failed');
          vm.results = errorMsg;
        });

      vm.tableHeaders = ['Name', '', 'DOB', 'Nationality'];

    }

  }
})();
