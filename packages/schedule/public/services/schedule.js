'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('Schedule', ['$resource',
    function($resource) {
        return $resource('schedule/:userId', {
            scheduleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
