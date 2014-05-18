/**
 * Created by matias on 5/16/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var ScheduleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    timeoff: {},
    days: {},
});

mongoose.model('Schedule', ScheduleSchema);
