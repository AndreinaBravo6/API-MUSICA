'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = Schema({
        Number: String,
        name: String,
        duration: String,
        file:String,
        album: { type: Schema.ObjetId, ref: 'Album'}
});

module.exports = mongoose.model('Song', SongSchema);