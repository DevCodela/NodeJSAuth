'use strict';
const mainController = require('../../apps/main/controllers'),
	  usersController = require('../../apps/users/controllers');

const routers = function (server) {

	server.use(mainController);
	server.use(usersController);
};

module.exports = routers;