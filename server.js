'use strict';
const express = require('express'),
	  swig = require('swig'),
	  bodyParser = require('body-parser'),
	  server = express();

server.engine('html', swig.renderFile);

server.set('view engine', 'html');
server.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

server.use(bodyParser.urlencoded({ extended: true }));

server.listen(8000, onListen);
function onListen() {
	console.log("Servidor escuchando al puerto 8000");
}

require('./config/routers')(server);