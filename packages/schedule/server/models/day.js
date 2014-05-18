/**
 * Created by matias on 5/17/14.
 */
/**
 * Created by matias on 5/17/14.
 */
/**
 * Created by matias on 5/16/14.
 */
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var DaySchema = new Schema({
    id: Number,
    startHour: String,
    endHour: String,
    pods: {}
});

mongoose.model('Day', DaySchema);
