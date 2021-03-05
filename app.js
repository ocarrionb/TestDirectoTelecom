'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var metodos_routes = require('./routes/route');

//en esta parte colocamos los datosn a recibir en formato json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api',metodos_routes);

module.exports = app;
