'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
        name: String,
        surname: String,
        email:String,
        password: String,
        rola: String,
        image:String
});

module.exports = mongoose.model('user', UserSchema);