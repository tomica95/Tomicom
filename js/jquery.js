$(document).ready(function(){

    slideShow();

    $('#ispis-tekst-autor').hide();
	
	
	$('#prikazi').click(function(event){
	   event.preventDefault();
	   
	  $('#ispis-tekst-autor').toggle();

    });
});

function slideShow(){

    var temporary = $('#slajder .aktivna');
    
    var next = temporary.next().length ? temporary.next() :
    temporary.parent().children(':first');
    
    temporary.removeClass('aktivna');
   
    next.addClass('aktivna');
   
    setTimeout(slideShow, 3000); 

}