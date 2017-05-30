var target = 0;

var cargarPagina = function(){
    //elementos
    var $botones = $(".control");
    var $anterior = $(".previous");
    var $siguiente = $(".next");
    //eventos
    $botones.click(cambiarImagen);
    $anterior.click(anteriorImagen);
    $siguiente.click(siguienteImagen);
};

$(document).ready(cargarPagina);
    
    var cambiarImagen = function(){ //opcion 2(functionStatement)-function cambiarImagen(){}
        target = parseInt($(this).data("target")); //se pone el parentesis a this porque viene de JS y se manada a JQ
        mostrarImagen(target);
    };

    var mostrarImagen = function(){
        var $lastSlide = $("div.active");
        var $slide = $("div[data-slide='" + target + "']");
        $lastSlide.removeClass("active");//va sin punto porqu eya solo te estas refiriendo al nombre de la clase
        $slide.addClass("active");
    };
    
    var anteriorImagen = function(e){
        e.preventDefault();
        target = target -1;
        target = (target < 0) ? 3 : target;
        mostrarImagen(target);
    };

    var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostrarImagen(target);
    };






    