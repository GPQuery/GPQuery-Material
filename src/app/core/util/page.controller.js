(function() {
  'use strict';

  angular
    .module('GPQuery.core')
    .controller('PageController', PageController);


  /** @ngInject */
  function PageController($mdSidenav) {
    var vm = this;

    vm.navLinks = [];
    vm.toggleSidenav = toggleSidenav;

    activate();

    ////////////////


    // PageController Startup Logic
    // ------------------------------

    function activate() {
      vm.navLinks = ['Results', 'Races', 'Drivers', 'Constructors'];
    }


    // Toggle Sidenav
    // ------------------------------

    function toggleSidenav() {
      $mdSidenav('left').toggle();
    }

  }
})();
