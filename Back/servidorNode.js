var express = require('express');
var app = express();                               
var blockchain = require('./blockchain.js')

app.get('/api/read', function (req, res) {
	console.log('leitura')
	blockchain.leitura('zé');
	
})

app.get('/api/write', function (req, res) {
	console.log('escrita')
	blockchain.escrita('zé');
})

// listen (start app with node server.js) ======================================
app.listen(9090, "0.0.0.0");

let data = "\n" + new Date() + "\nApp listening on port 9090 ";
console.log(data);
