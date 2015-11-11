'use strict';
const express = require('express'),
	  swig = require('swig'),
	  bodyParser = require('body-parser'),
	  cookieParser = require('cookie-parser'),
	  session = require('express-session'),
	  flash = require('connect-flash'),
	  RedisStore = require('connect-redis')(session),
	  server = express();

server.engine('html', swig.renderFile);

server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

server.use(flash());
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session({
	store: new RedisStore({
		host : "127.0.0.1",
		port : 6379,
		db : 1,
	}),
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

/* Passport Config */
require('./config/passport')(server)

server.listen(8080, onListen);
function onListen() {
	console.log("Servidor escuchando al puerto 8080");
}

require('./config/routers')(server);