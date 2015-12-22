(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
