// Setup basic express server
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// handle Sockets
io.on('connection', function (socket) {
  	// when the client emits 'new message', this listens and executes
  	console.log("Entro una nueva rata");
	socket.emit('new message', {
		message: "hola rata"
	});

	socket.on("ratita", function (data) {
		console.log(data);	
	});

	socket.on("botonmensaje", function (data) {
		console.log(data);	
	});

	socket.on("suma", function (data) {

		var data1 = parseInt(data.numero1);
		var data2 = parseInt(data.numero2);
		var suma = data1 + data2;
		
		calcular_suma(suma);		
	});

	function calcular_suma(suma){
		socket.emit('resultado', {
			sum: suma
		});
	}


});