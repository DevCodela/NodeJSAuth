'use strict';
const passport = require('passport'),
	  localStrategy = require('passport-local').Strategy,
	  User = require('../../apps/users/models').User;

const local = function (server) {

	passport.use(new localStrategy({
			usernameField: 'username',
			passwordField: 'password',
		},
		function (username, password, done) {
			User.findOne({username: username})
			.then(function (user) {
				if (!user) return done(null, false, {message: `El username ${username} no existe!`});
				if (user.password === password) {
					return done(null, user);
				} else {
					return done(null, false, {message: 'El password es incorrecto'});
				}
			});
		}
	));

	server.post('/login/', passport.authenticate('local', {
				successRedirect: '/',
				failureRedirect: '/ingresar/',
				failureFlash: true,
	}));

};

module.exports = local;