'use strict';

// The Package is past automatically as first parameter
module.exports = function(Schedule, app, auth, database) {

    app.get('/schedule/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/schedule/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/schedule/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/schedule/example/render', function(req, res, next) {
        Schedule.render('index', {
            package: 'schedule'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
