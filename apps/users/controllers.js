'use strict';
const express = require('express'),
	  router = express.Router(),
	  User = require('./models').User;


router.route('/ingresar/')

	.get(function (req, res) {
		let error_message = req.flash('error')[0];
		res.locals.error_message = error_message;
		res.render('users/login.html');
	});

router.route('/salir/')

	.get(function (req, res) {
		req.logout();
		res.redirect('/');
	});

router.route('/admin/usuarios/')

	.get(function (req, res) {
		User.find()
		.then(function (users) {
			res.locals.users = users;
			return res.render('users/users.html');
		});
	});

router.route('/admin/usuarios/crear')

	.get(function (req, res) {
		return res.render('users/create_user.html');
	})
	.post(function (req, res) {
		let user = new User({
			username: req.body.username,
			password: req.body.password
		});
		user.save(function (err) {
			if (!err) return res.redirect('/admin/usuarios/');
		})
	});

module.exports = router;