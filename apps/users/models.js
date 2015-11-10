'use strict';
const mongoose = require('../../config/mongoose'),
	  userSchema = require('./schemas').userSchema;

const models = {

	User: mongoose.model('user', userSchema)

};

module.exports = models;