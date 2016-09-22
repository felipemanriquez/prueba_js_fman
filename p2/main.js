
var	alumno	=	{nombre:	"Matías",	edad:5}



function copiafunciones(obx) {
	return Object.assign({}, obx);
}


var copia = copiafunciones(alumno)

console.log(copia);
