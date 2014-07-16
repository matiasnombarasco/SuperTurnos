'use strict';
var schedule = require('../controllers/schedule');
// The Package is past automatically as first parameter
module.exports = function(Schedule, app, auth, database) {

    app.route('/schedule')
        .get(schedule.all)
        .post(auth.requiresLogin, schedule.create);


    app.get('/schedule/example/render', function(req, res, next) {
        Schedule.render('index', {
            package: 'schedule'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
