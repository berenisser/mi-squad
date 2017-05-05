function MiembroSquad(nombre, edad, hobbies){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}

var squad = [];

var Maca = new MiembroSquad("Macarena Baltra", 27, ["Encuadernar","Bailar","Ver series"]);
squad.push(Maca);
var Fran = new MiembroSquad("Fran Ruiz-Tagle", 35, ["Ilustrar","Pugs","Clases de manualidades"]);
squad.push(Fran);
var Clau = new MiembroSquad("Claudia Rivera", 33, ["Gatos","Patinar","Comer dulces"]);
squad.push(Clau);
var Susana = new MiembroSquad("Susuna Arce", 28, ["Ficcion","Efusividad","Emprender"]);
squad.push(Susana);
var Rata = new MiembroSquad("Chinchilla Psico", 24, ["Dibujar","leer","Aprender"]);
squad.push(Rata);
var Nico = new MiembroSquad("Nicole Aliste", 32, ["Juegos de video","Cosas Kawai","Alicia"]);
squad.push(Nico);

var impresion = document.getElementById('imprimir');
squad.forEach(function(el){

	impresion.innerHTML += "<div>"+ "<br><b>Nombre: </b>"+el.nombre +"<br>" + "<b>Edad: </b>"+el.edad+" años<br>"+ "<b>Hobbies: </b>" +"</div>";

	var listaHobbies = el.hobbies.forEach(function(e){
		return (impresion.innerHTML += "<li>"+e+"</li>");
	});
});

/*No encontré manera de incluir la variable listaHobbies dentro de la etiqueta <ul> 
en la linea 25 sin que aparezca como undefined, al no poder hacer eso no pude hacer
que la lista de hobbies aparezca dentro del <div> de cada miembro del squad */