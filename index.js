'use strict'

var app = require ('./app.js');
var port = process.env.PORT || 1515;

app.listen(port,function (){
	console.log("La app esta respondiendo correctamente http://localhost:"+port);
});