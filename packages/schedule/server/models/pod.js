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
var PodSchema = new Schema({
    duration: String,
    assigned: {}
});

mongoose.model('Pod', PodSchema);
