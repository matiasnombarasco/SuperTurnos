'use strict';

angular.module('mean').controller('ScheduleController', ['$scope', 'Global', 'Schedule',
    function ($scope, Global, Schedule) {

        $scope.global = Global;
        $scope.schedule = {
            name: 'schedule'
        };
        $scope.create = function() {
            var agenda = new Schedule({
              name: this.name,
              owner: 'matias'
            });
            agenda.$save(function() {
                    console.log('saved');
            }

            );
        };

        $scope.listAgenda = function () {
            log('hola chiche');
            Schedule.query(function (schedule) {
                console.log('list:' + schedule);
                $scope.schedule = schedule;
            });
            return $scope.schedule;
        };

        $scope.goToAgenda = function() {

        }

    }

]);
