(function(){
	"use strict";


	
	var regalo = document.getElementById("regalo");

	document.addEventListener('DOMContentLoaded', function(){


/*var map = L.map('mapa').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();*/
		
	// Campos Datos usuario

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var email = document.getElementById("email");



	// Campos Pases

	var pase_dia= document.getElementById("pase_dia");
	var pase_completo = document.getElementById("pase_completo");
	var pase_dosdia = document.getElementById("pase_dosdia");


	//botones

	var calcular = document.getElementById("calcular");
	var error = document.getElementById("error");
	var btnRegistro = document.getElementById("btnRegistro");
	var lista_productos = document.getElementById("lista-productos");
	var suma = document.getElementById("suma-total");

		//extras

	var camisas = document.getElementById("camisa_evento");
	var etiquetas = document.getElementById("etiquetas");	


	calcular.addEventListener("click", calcularMontos);		

	pase_dia.addEventListener("blur", mostrarDias);
	pase_dosdia.addEventListener("blur", mostrarDias);
	pase_completo.addEventListener("blur", mostrarDias);

	nombre.addEventListener("blur", validarCampos);
	apellido.addEventListener("blur", validarCampos);
	email.addEventListener("blur", validarCampos);


	function validarCampos () {
		if(nombre.value == ""){
			error.style.display= "block";
			error.innerHTML = "Este campo es obligatorio";
			nombre.style.border = "1px solid red";

		}
		if (apellido.value==""){
			error.style.display="block";
			error.innerHTML= "Sin tu apellido no va!";
			apellido.style.border= "3px double green";
		}
	};







	function calcularMontos(event){
		event.preventDefault();
		if(regalo.value=== ""){
			alert("Debes seleccionar un regalo");
			regalo.focus();
		}else{
			var boletosDia = pase_dia.value,
				boleto2Dias = pase_dosdia.value,
				boletoCompleto = pase_completo.value,
				cantidadCamisas = camisas.value,
				cantidadEtiquetas = etiquetas.value;

			var totalPagar = (boletosDia * 30) + (boleto2Dias*45) + (boletoCompleto*50) + ((cantidadCamisas * 10)*.93) + (cantidadEtiquetas * 2 );

			var listadoProductos = [];

			if(boletosDia>0){
				listadoProductos.push(boletosDia + " Pases por dia");
			}
			if(boleto2Dias>0){
				listadoProductos.push(boleto2Dias + " Pases por 2 dias");
			}
			if(boletoCompleto>0){
				listadoProductos.push(boletoCompleto + " Pases dias completo");
			}
			if(cantidadCamisas>0){
				listadoProductos.push(cantidadCamisas + " Cantidad de Camisas");
			}
			if(cantidadEtiquetas>0){
				listadoProductos.push(cantidadEtiquetas + " Cantidad de Etiquetas");
			}
			
			
			lista_productos.style.display = "block";
			lista_productos.innerHTML = '';   //es para que se ponga solo una vez aca adentro y no repita al cambiar el numero.
			for(var i = 0;i < listadoProductos.length; i++){
				lista_productos.innerHTML += listadoProductos[i] + "<br/>";
			}

			suma.innerHTML= "$" + totalPagar.toFixed(2);

		}
		
	}

	function mostrarDias(){
		var boletosDia = pase_dia.value,
			boleto2Dias = pase_dosdia.value,
			boletoCompleto = pase_completo.value;

		var diasElegidos = [];

		if (boletosDia>0){
			diasElegidos.push('viernes');
		}
		if (boleto2Dias>0){
			diasElegidos.push('viernes', 'sabado');
		}
		if(boletoCompleto>0){
			diasElegidos.push('viernes', 'sabado', 'domingo');
		}
		for(var i = 0; i < diasElegidos.length; i++){  //el i< diasElegidos.length es para que recorra todo el array
			document.getElementById(diasElegidos[i]).style.display='block';
		}

				
	}







	//DOM CONTENT LOADED
})	
})();




/*******************    jQuery   ***********/

$(function(){



	// Lettering   es la libreria para jugar con el texto

		$('.nombre-sitio').lettering();


		//Menu fijo
		var windowHeight = $(window).height();
		var barraAltura = $('.barra').innerHeight();
		console.log(barraAltura);
		$(window).scroll(function(){
			var scroll = $(window).scrollTop();
			if (scroll>windowHeight) {
				$('.barra').addClass('fixed');
				$('body').css({'margin-top': barraAltura+'px'});
			}else{
				$('.barra').removeClass('fixed');
				$('boby').css({'margin-top': '0px'});
			}

		});


		//Menu Responsive

		$('.menu-movil').on('click', function(){
			$('.navegacion-principal').slideToggle();  //mezcla de slideDown y slideUp, cuando este en una vuelva a la otra
			
		});

	       //Programa de Conferencias
	$('.programa-evento .info-curso:first').show();
	$('.menu-programa a:first').addClass("activo");

	$('.menu-programa a').on('click',function(){

		$('.menu-programa a').removeClass('activo');
		$(this).addClass('activo');
		$(".ocultar").hide();
		var enlace = $(this).attr('href');
		$(enlace).fadeIn(1000);   //fadeIn da un buen efecto
		return false;
	});


		// Animaciones para los numeros 

		$('.resumen-evento li:nth-child(1) p').animateNumber({number:6},1200);       //nth-child ES PARA SELECCIONAR LA UBICACION QUE LE PONES ENTRE (), EN ESTE CASO 1.
		$('.resumen-evento li:nth-child(2) p').animateNumber({number:15},1200); 
		$('.resumen-evento li:nth-child(3) p').animateNumber({number:3},1400); 			//animateNumber es porque asi se llama el pluggin
		$('.resumen-evento li:nth-child(4) p').animateNumber({number:9},1500); 


		//Cuenta Regresiva, 

		$('.cuenta-regresiva').countdown('2018/09/20 00:00:00', function(event){        //el event es por parte del pluggin (countDown)
			$('#dias').html(event.strftime('%D'));
			$('#horas').html(event.strftime('%H'));                       //la D es de dias Horas... Esta en la libreria de  COUNTDOWN
			$('#minutos').html(event.strftime('%M'));  
			$('#segundos').html(event.strftime('%S'));

		});



});