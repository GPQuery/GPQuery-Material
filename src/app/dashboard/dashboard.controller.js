(function() {
    'use strict';

    angular
        .module('GPQuery.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($log) {
        var vm = this;
        vm.title = 'DashboardController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();