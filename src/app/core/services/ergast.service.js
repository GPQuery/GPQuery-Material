(function() {
  'use strict';

  /**
   * Ergast Wrapper for ngResource
   *
   * @param   {String}  url
   * @param   {Object}  paramDefaults
   * @param   {Object}  actions
   * @return  {Object}  service
   * @link    https://docs.angularjs.org/api/ngResource/service/$resource
   */
  angular
    .module('GPQuery.core')
    .factory('ergastService', ergastServiceFactory);

  /** @ngInject */
  function ergastServiceFactory($log, $resource) {


    /**
     * Parameterised Default URL
     *
     * @param {String}      series    'f1' or 'fe'
     * @param {int|String}  season    Year, 1950-present, or 'current'
     * @param {int|String}  round     Round Number, or 'last'
     * @param {String}      resource  Resource Query
     */
    var url = 'http://ergast.com/api/:series/:season/:round/:resource.json';


    /**
     * Default Parameters
     *
     * @param paramDefaults.series    'f1'
     * @param paramDefaults.season    'current'
     * @param paramDefaults.round     'last'
     * @param paramDefaults.resource  'results'
     */
    var paramDefaults = {
      series    : 'f1',
      season    : 'current',
      round     : 'last',
      resource  : 'results'
    };


    /**
     * Custom Resource actions
     *
     * @return  {HttpPromise}
     * @link    https://docs.angularjs.org/api/ng/service/$http#usage
     */
    var actions = {};


    // Get Resource
    // ------------------------------
    actions.getResource = {
      method  : 'GET',
      params  : {resource: '@resource'}
    };


    // Get Driver Standings
    // ------------------------------
    actions.getDriverStandings = {
      method  : 'GET',
      params  : {resource  : 'driverStandings'}
    };


    // Create $resource Object
    // ------------------------------
    var service = $resource(url, paramDefaults, actions);


    // Return Service
    // ------------------------------
    return service;

  }

})();
