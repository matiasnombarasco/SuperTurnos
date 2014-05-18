'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('schedule example page', {
            url: '/schedule/example',
            templateUrl: 'schedule/views/index.html'
        });
    }
]);
