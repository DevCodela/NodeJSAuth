'use strict';
const mongoose = require('../../config/mongoose'),
	  Schema = mongoose.Schema;

const schemas = {

	userSchema: new Schema({
		username: {type: String},
		password: {type: String},

		facebook: {
			id: {type: String}
		}
	})

};

module.exports = schemas;