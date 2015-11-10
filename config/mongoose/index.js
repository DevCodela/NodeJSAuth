'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');

module.exports = mongoose;