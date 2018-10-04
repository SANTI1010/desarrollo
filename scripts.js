//DOM
var total, numero1, numero2;

function totalPagar(numero1,numero2){
	total=numero1*numero2;
	return total;
}

var granTotal = totalPagar(4,25);

var calculadora = document.getElementById("resultado").innerHTML = granTotal + "$";












/*
var fecha = new Date ();
console.log("El año actual es " + fecha.getFullYear()); 
console.log("El dia actual es " + fecha.getDate());
console.log("El año actual es " + fecha.getFullYear());
console.log("El año actual es " + fecha.getFullYear());

*/

/*var pago="cheque";

switch (pago){  
	case "TC" :
	console.log("Se pago con tarjeta de credito");
	break;
	case "Efectivo" :
	console.log("Se pago con Efectivo");
	break;
	case "Debito" :
	console.log("Se pago con tarjeta de Debito");
	break;
default:
	console.log("Pago invalido")
	break;

}*/



//Ejemplo de IF 
 /*var cantidadApagar= 1000;
 var saldo = 1052;
 var recarga= 50;

if(saldo>cantidadApagar){
	console.log("pago realizado");
	saldo-=cantidadApagar;
	console.log("Ahora tienes un saldo de " + saldo);
	if(recarga<saldo){
		console.log("La recarga se realizado");
		saldo-=recarga;
	console.log("Ahora tienes un saldo de " + saldo);	
	} else{
	 console.log("No alcanzo para la recarga");
	} 
} else {
		console.log("No se pudo pagar");
	}
*/


//   FOR



/*var i;

for (i=0;i<51;i++){
	if (i==20){
		console.log("veinteee!!!!!!");
		continue;
	}
console.log(i);	
}

var boca = ["Pipa", "Pavon", "Carlitos", "Gago"];

for (i=0; i < boca.length;i++){
	console.log(boca[i]);
}
*/


/*var frutas = [];
function array_frutas(fruta){
	frutas.push(fruta);
	console.log(frutas);	
}


array_frutas("melon");
array_frutas("banana");
array_frutas("uva");
array_frutas("manzana");


//CARRITO
const IMPUESTO = 0.16;
var total=0;
function carrito (articulo, precio){
	console.log("Articulo: " + articulo + " Precio: " + precio);
	total+=precio + (precio * IMPUESTO);
	console.log("IMPUESTO: " + precio * IMPUESTO);
	console.log("El total es: " + total.toFixed(2));
}

carrito("Mermelada", 59);***/



/*=================== ARRAYS =============*/


/*
var boca = ["Pipa", "Pavon", "Carlitos", "Gago"];
 boca.push ("Jara")
 boca.push("Roman")
console.log(boca);

console.log(boca.indexOf("Pipa"));  Este es para ver en la posicion que esta*/

/*console.log(boca.indexOf("Gago"));

boca.splice(1,2);
console.log("Con splice " + boca); 
 /*Es par eliminar un array desde la posicion establecida entre () ***/
/***************OBJETOS****************/
/*var computadora = {
	nombre: "DELL",
	intel: 5,
	color: "negro",
	fabricacion: "alemania"
}


console.log("El intel de la pc es " + computadora.intel);

/*===========  VARIABLES  =============
var nombre = prompt("como te llamas");
var color = prompt ("cual es tu color favorito")

alert ("Hola "+ nombre + " a mi tambien me gusta mucho el color " + color );
*/

/*
var modelo = "chevrolet";

var motor = 5.5;

var color = "azul";



var modelo2, color ;

modelo2 = "ford";


var color = "red";
*/