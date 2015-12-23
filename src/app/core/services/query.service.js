(function() {
  'use strict';

  /**
   * Service for retrieving query mode information
   */
  angular
    .module('GPQuery.core')
    .factory('queryService', queryServiceFactory);

  /** @ngInject */
  function queryServiceFactory($log) {

    var service = {
      getAllQueries:  getAllQueries
    };

    return service;

    ////////////////

    function getAllQueries() {
      return {

      };
    }

  }

})();
