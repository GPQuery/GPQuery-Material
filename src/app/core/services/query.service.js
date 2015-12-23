(function() {
  'use strict';

  /**
   * Service for route resolving promises
   *
   * @param   {String}  url
   * @param   {Object}  paramDefaults
   * @param   {Object}  actions
   * @return  {Object}  service
   * @link    https://docs.angularjs.org/api/ngResource/service/$resource
   */

  angular
    .module('GPQuery.core')
    .factory('queryService', queryServiceFactory);

  /** @ngInject */
  function queryServiceFactory($log) {
    var service = {
      func: func
    };
    return service;

    ////////////////

    function func() {

    }

  }

})();
