 /*  $(document).ready(function(){    //esta funcion es para ver que todo el HTML cargo antes de ejecutar en codigo de JS.
	
});*/  //ESTOS SELECTORES DEBEN ESTAR EN LA RAIZ DE MI PROYECTO.

$(function(){
	"use strict";      //para que JS se ejecute en modo estricto.


$('.nuestros-servicios div:first').show();
$('.servicios nav a:first').addClass('activo');


$('.servicios nav a').on('click', mostrarTabs);

function mostrarTabs(){
	$('.servicios nav a').removeClass('activo');
	$(this).addClass('activo');
	var enlace = $(this).attr('href');
	$('.nuestros-servicios div').fadeOut();
	$(enlace).fadeIn();


return false;


}


	





/*
$('.navegacion').show();	


var proximosViajes = ["Ayacucho", "Tandil", "Rauch", "La Plata","Lujan"];

$.each(proximosViajes, function(i,v){
	if(i==0){
		$('aside').append("<h2> Proximos Viajes</h2>");
	}
		$('aside').append('<li>'+ v + '</li>');
});



var viajesPorFecha = {
	primero:"Ayacucho",
	segundo:"Tandil",
	tercero:"Rauch",
	cuarto:"La Plata",
	quinto:"Lujan"
};

$.each(viajesPorFecha,function(i,v){
	$("aside").append("<li>" + i + " -" + v + "</li>");

});

*/

/*
$('div logo img').on('click',cargarAjax);

function cargarAjax() {
	$.ajax('promociones.txt',{
		succes: agregarContenido,     //succes funcion que se ejecuta si la llamada es exitosa
			type:'GET',               //GET es el tipo donde obtengo la informacion
			datatype:'text'				// tipo de dato
	});
}

function agregarContenido(data,status,jqxhr){
	$('aside').text(data);
	console.log(status);
}
*/






/*
$('.logo img').click(function(){
	$('main article:first').next().next().slideUp(2000);    //El next es para pasar al siguiente elemento
});
*/
/*

$('.logo img').click(function(){   
	$('main article:first').slideUp(500);                  //slideUp lo oculta para arriba
});


$('.sidebar').click(function(){
	$('main article:first').slideDown(1000);				//slideDown lo hace aparecer
});
*/



/*
$('.logo img').on('click',function(){
	$(this).animate({'width': '200px'},1500);   //1000 es un segundo.
});
*/

/*
$('.logo img').on('mouseenter',aLogo);
$('.logo img').on('mouseleave',dLogo);

function aLogo(){
	$(this).animate({'width': "100%"});
}

function dLogo(){
	$(this).animate({'width': "350px"});
}




$('main article:first img').on('mouseenter',aumentarImg);
$('main article:first img').on('mouseleave',disminuirImg);

function aumentarImg (){
	$(this).animate({'width':'100%'});
}

function disminuirImg (){
	$(this).animate({'width':'350px'});
}
*/



/*    // jQuery para usar como CSS

$('.logo img').css({"width":"200px"});



$('main article h2').css({"color":"#db008d"});


$('aside').css({'background-color':'#e1e1e1',
				'text-transform': "uppercase",
				'padding':'10px'
});


$('.navegacion ul li a').on('mouseenter',cambiarColor);

	function cambiarColor(){
		$('.navegacion').css('background-color','red');
	}


*/

/*
$('main article:first img').on('click',function(){
	$(this).attr('src','img/imagen_2.jpg');
});
*/


	
/*
$('main').on({
	click: function(){

		$(this).addClass('activo');
	}, mouseenter:function(){
		$(this).addClass('fondorojo');
	}, mouseleave:function(){
		$(this).addClass('activo');
	}
})

*/




//$('main article:first').show();   //elimina el elemento, con HIDE lo oculta.


/*
var copia = $('main article:last').clone()    //este es para clonar un elemento con jQuery
	$('main').prepend(copia);  //APPEND lo agrega al final, PREPEND los agrega al inicio.
*/

/*
$('div.logo img').on('click',function(){
	$(this).remove();
});



$('main article img:first').on('click',function(){
	$(this).hide();
});
*/

/*
$('div.logo img').on('mouseenter',function(){                 // SOBRE EL LOGO
	console.log("Sobre el logo");
});


$('div.logo img').on('mouseleave',function(){                 //FUERA DEL LOGO  
	console.log("Fuera del logo");
});

*/

/*
$('#menu').on('click', function(){
	$('#navegacion').show();
})
*/
   //////////// ******* AGREGAR O QUITAR CLASES
/*
$('div.logo img').addClass('activo');


$('.navegacion').show();
$('main article:first').addClass('activo');


$('.navegacion ul li a').on('click',function(e){
	$('.navegacion ul li a').removeClass('activo');   //es para que la clase salga del elemento anterior
	e.preventDefault();   //se encarga de que el navegador no haga lo que haria por defauld, previene esa accion
	$(this).addClass('activo');

});   */


/*
$('div.logo img').on('click',function(){         //el ON es como poner CUANDO!!
	console.log("Has hecho click en el logo");
}); */

	});
