(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {


    // Enable Log
    // ------------------------------

    $logProvider.debugEnabled(true);


    // Set Toastr
    // ------------------------------

    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-bottom-left';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    
  }

})();
