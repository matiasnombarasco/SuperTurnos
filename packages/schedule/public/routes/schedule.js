'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('schedule list', {
            url: '/schedule/list',
            templateUrl: 'schedule/views/index.html'
        });
    }
]);
