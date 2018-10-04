console.log("1");

(function(){
	"use strict";
	document.addEventListener("DOMContentLoaded",function(){


	//getElementById	

	/*var logo = document.getElementById('logo');  //logo va a ser todo el document, luego puedo usar solo LOGO.


	var navegacion = document.getElementById("navegacion");

	console.log(navegacion);*/


	// getElementByClassName (ayuda a seleccionar a un elemento por el nombre de la clase en HTML)

/*
	var navegacion = document.getElementsByClassName("navegacion");
	console.log(navegacion[0]);
	

	var contenido = document.getElementsByClassName("contenido");  
	console.log(contenido);  //en la consola devuelve como ARRAYS//contenido[0].style.display = "none";   //elimina el todo el contenido

	//contenido[0].style.display = "none";   //elimina el todo el contenido
*/

//=======setAttribute========= es para cambiar un una clase, es el ejemplo de target_blank


//getElementsByTagName ***********Selecciona a los A , DIV, HREF
/*
var enlaces = document.getElementsByTagName("a");
console.log(enlaces.length);

for (var i = 0; i<enlaces.length;i++){
	enlaces[i].setAttribute("target","_blank");
}

var sidebar=document.getElementById("sidebar").getElementsByTagName("a");

for (var i=0;i<sidebar.length;i++){
	sidebar[i].setAttribute("href","https://www.google.com/");
}
*/

/*
var logo = document.querySelector("#logo");
console.log(logo);


var encabezado = document.querySelectorAll("h2, footer p");
console.log(encabezado);

var enlaces = document.querySelectorAll("a");
console.log(enlaces);


var enlace = document.querySelectorAll("a");

for (var i = 0;i<enlace.length;i++){
	console.log(enlace[i].innerText);
}

*/































	
	});
})();

console.log("3");