'use strict'

var express = require('express');

var Metodos = require('../controller/metodos');

var api = express.Router();

api.post('/TipoPost',Metodos.accion);

module.exports = api;
