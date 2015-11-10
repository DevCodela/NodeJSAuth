'use strict';
const express = require('express'),
	  router = express.Router();

router.route('/')

	.get(function (req, res) {
		res.render('main/home.html');
	});

module.exports = router;