'use strict';
const passport = require('passport'),
	  facebookStrategy = require('passport-facebook'),
	  User = require('../../apps/users/models').User;


const facebookConfig = function (server) {

	passport.use(new facebookStrategy({
			clientID: '742694022439888',
			clientSecret: '5450a69e21f912864b7e95a785a14515',
			callbackURL: '/auth/facebook/callback/',

		},
		function (accessToken, refreshToken, profile, done) {

			let username = profile._json.name.split(' ').join('.');
			User.findOne({'facebook.id': profile._json.id})
			.then(function (user) {
				if (user) {
					return done(null, user);
				} else {
					let new_user = new User({
						username: username,
						'facebook.id': profile._json.id
					});
					new_user.save(function (err){
						if (!err) return done(null, new_user);
					});
				}
			});

		}
	));

	server.get('/auth/facebook/', passport.authenticate('facebook'));

	server.get('/auth/facebook/callback/', passport.authenticate('facebook', 
									{ successRedirect: '/',
									  failureRedirect: '/ingresar/' }))
};


module.exports = facebookConfig;