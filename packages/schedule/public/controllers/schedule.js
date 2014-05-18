'use strict';

angular.module('mean').controller('ScheduleController', ['$scope', 'Global',
    function($scope, Global, Schedule) {
        $scope.global = Global;
        $scope.schedule = {
            name: 'schedule'
        };
    }
]);
