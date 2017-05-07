var squad = [];
var comments = [];

function MiembroSquad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

function Comentario(idMiembro,comentario,likes){
	this.idMiembro = idMiembro;
	this.comentario = comentario;
	this.likes = likes;
}

function main(){
	var maca = new MiembroSquad("Macarena Baltra", 27, ["Encuadernar","Bailar","Ver series"]);
	squad.push(maca);
	var fran = new MiembroSquad("Fran Ruiz-Tagle", 35, ["Ilustrar","Pugs","Clases de manualidades"]);
	squad.push(fran);
	var clau = new MiembroSquad("Claudia Rivera", 33, ["Gatos","Patinar","Comer dulces"]);
	squad.push(clau);
	var susana = new MiembroSquad("Susuna Arce", 28, ["Ficcion","Efusividad","Emprender"]);
	squad.push(susana);
	var rata = new MiembroSquad("Chinchilla Psico", 24, ["Dibujar","leer","Aprender"]);
	squad.push(rata);
	var nico = new MiembroSquad("Nicole Aliste", 32, ["Juegos de video","Cosas Kawai","Alicia"]);
	squad.push(nico);

llenarDiv();
}

function llenarDiv(){
var espacioDiv = document.getElementById("espacio");

squad.forEach(function(el){
var divAux = document.createElement("div");
divAux.innerHTML += "<b>Nombre: </b>" + el.nombre+"<br>" + "<b>Edad: </b>"+el.edad+" años<br>"+ "<b>Hobbies: </b>";
espacioDiv.appendChild(divAux);

var listAux = document.createElement("li");
listAux.innerHTML = el.hobbies.forEach(function(e){
		divAux.innerHTML += "<li>"+e+"</li>";
	});

});
}

main();


var cajitaTexto = document.createElement("textarea");
divAux.appendChild(cajitaTexto);
	


/*var impresion = document.getElementById('imprimir');
squad.forEach(function(el){

	impresion.innerHTML += "<br><b>Nombre: </b>"+el.nombre +"<br>" + "<b>Edad: </b>"+el.edad+" años<br>"+ "<b>Hobbies: </b>" +"</li>";


	/*var listaHobbies = el.hobbies.forEach(function(e){
		impresion.innerHTML += "<li>"+e+"</li>";
	});
}); 

function crearTextoArea(){
	var areaTexto = document.createElement("textarea");
}


/*No encontré manera de incluir la variable listaHobbies dentro de la etiqueta <ul> 
en la linea 25 sin que aparezca como undefined, al no poder hacer eso no pude hacer
que la lista de hobbies aparezca dentro del <div> de cada miembro del squad */