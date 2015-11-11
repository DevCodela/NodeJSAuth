'use strict';
const express = require('express'),
	  router = express.Router();

router.route('/')

	.get(function (req, res) {
		console.log(req.user);
		res.locals.user = req.user;
		res.render('main/home.html');
	});

module.exports = router;