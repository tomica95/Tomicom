$(document).ready(function(){

    //funkcija za slajder
    slideShow();

    //Show-hide teksta o autoru
    $('#ispis-tekst-autor').hide();

	$('#prikazi').click(function(event){
	   event.preventDefault();
	   
	  $('#ispis-tekst-autor').toggle();

    });

    //funkcija za divove
    
    


});

function slideShow(){

    var temporary = $('#slajder .aktivna');
    
    var next = temporary.next().length ? temporary.next() :
    temporary.parent().children(':first');
    
    temporary.removeClass('aktivna');
   
    next.addClass('aktivna');
   
    setTimeout(slideShow, 3000); 

}