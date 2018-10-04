/*$('ol > li').css('color', 'red')

$("li#first + li")  //   # es para los id 


$("p:first").css('color','green')



$('h2:eq(1)').css('color','blue')  // :eq(index)  selecciona el elemento en un numero de indice especifico.

$("ul li:not('#fruta')").css('color','yellow')*/


$("#boton").on('click', function(){
	alert("Hicieron click!")
});


var $p = $('p');
$p.on('click',function(event){
	var date = new Date(event.timeStamp);
	$p.text("Haz click en: " + date)

});