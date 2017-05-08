var squad = [];
var comments = [];

function MiembroSquad(nombre, edad, hobbies,image){ //id de cada una sera su index
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
	this.idMiembro = squad.length;
	this.image = image;
}

function Comentario(idMiembro,comentario,likes){
	this.idMiembro = idMiembro;
	this.comentario = comentario;
	this.likes = likes;
}

function main(){
	var maca = new MiembroSquad('Macarena Baltra', 27, ['Encuadernar','Bailar','Ver series'],'0.png');
	squad.push(maca);
	var bere = new MiembroSquad('Bere Rios', 28, ['Yoga','Animales','Alimentación consciente'],'1.png');
	squad.push(fran);
	var clau = new MiembroSquad('Claudia Rivera', 33, ['Gatos','Patinar','Comer dulces'],'2.png');
	squad.push(clau);
	var susana = new MiembroSquad('Susana Arce', 28, ['Ficcion','Efusividad','Emprender'],'3.png');
	squad.push(susana);
	var rata = new MiembroSquad('Chinchilla Psico', 24, ['Dibujar','Leer','Aprender'],'4.png');
	squad.push(rata);
	var dani = new MiembroSquad('Daniela Medina', 20, ['Juegos de video','Cosas Kawai','Natura'],'5.png');
	squad.push(dani);
llenarDiv();
}

function llenarDiv(){
var espacioDiv = document.getElementById("espacio");

squad.forEach(function(el){
var divAux = document.createElement("div");
divAux.innerHTML += "<b>Nombre: </b>" + el.nombre+"<br>" + "<b>Edad: </b>"+el.edad+" años<br>"+ "<b>Hobbies: </b>";
espacioDiv.appendChild(divAux);

var listAux = document.createElement("ul");
listAux.innerHTML = el.hobbies.forEach(function(e){
		divAux.innerHTML += "<li>"+e+"</li>";
	});

	var cajitaTexto = document.createElement("textarea");
	cajitaTexto.setAttribute("cols","50");
	cajitaTexto.setAttribute("rows","4");
	cajitaTexto.setAttribute("id","cajita");
	divAux.appendChild(cajitaTexto);


	var botonComentario = document.createElement("button");
	botonComentario.innerHTML = "Dejar Comentario";
	botonComentario.onclick = function(){
		var comentarioPersona = document.getElementById("cajita");
		var newComment = comentarioPersona.value;
		var comment = document.createTextNode(newComment);
		var commAux = document.createElement("div");
		divAux.appendChild(commAux);
		divAux.appendChild(comment);
		return false;
	};

	divAux.appendChild(botonComentario);


});

	
}


main();