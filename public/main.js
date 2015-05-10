"use strick";
window.addEventListener("load",load);

function load() {
	var socket = io();
	var rataBoton = document.getElementById("rataBoton");
	var boton = document.getElementById("boton");
	var num1 = document.getElementById("number1");
	var num2 = document.getElementById("number2");
	var suma = document.getElementById("suma");


	socket.on('new message', function (data) {
		console.log(data);
	});

	rataBoton.onclick = function(){
		socket.emit('ratita', {
			rata: "christian"
		});
	};

	boton.onclick = function(){
		socket.emit('botonmensaje', {
			rata: "hola que tal"
		});
	};

	boton.onclick = function(){
		socket.emit('suma', {
			numero1: num1.value,
			numero2: num2.value
		});
	};

	socket.on('resultado', function (data) {
		var valor_suma = data.sum;
		get_suma_client(valor_suma);
	});

	function get_suma_client(valor_suma){
		suma.value = valor_suma;
	}

}

