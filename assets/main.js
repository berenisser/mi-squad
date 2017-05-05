function MiembroSquad(nombre, edad, hobbie){
	this.nombre = nombre;
	this.edad = edad;
	this.hobbie = hobbie;
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
var Rata = new MiembroSquad("Chinchilla Psico", 24, ["Dibujar","leer","aprender"]);
squad.push(Rata);
var Nico = new MiembroSquad("Nicole Aliste", 32, ["Juegos de video","Cosas Kawai","Alicia"]);
squad.push(Nico);