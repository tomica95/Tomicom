$(document).ready(function(){

    //funkcija za slajder
    slideShow();

    //Show-hide teksta o autoru
    $('#ispis-tekst-autor').hide();

	$('#prikazi').click(function(event){
	   event.preventDefault();
	   
	  $('#ispis-tekst-autor').toggle();

    });

    //funkcija za nav meni
    $('a.nav-link').hover(function(){
        
    
        $(this).animate({ 
            fontSize: '+=10px',
            height: '+=5px'
        }, 75);
        
    
    }, function(){
       
    
        $(this).animate({  
        fontSize: '-=10px',
        height: '-=5px'
        
    }, 75);
    
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



