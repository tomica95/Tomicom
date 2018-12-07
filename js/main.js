//Listeneri
document.getElementById('ime').addEventListener('keyup',provIme);

document.getElementById('prezime').addEventListener('keyup',provPrezime);

document.getElementById('mail').addEventListener('keyup',provEmail);

window.addEventListener('load',puniDdl);

window.addEventListener('load',puniChb);

window.addEventListener('load',puniRb);

document.getElementById('provera').addEventListener('click',provera);

document.getElementById('ddl').addEventListener('change',proveraDdl);

window.addEventListener('load',function(){

	document.getElementById('Da').addEventListener('click',textArea);


});

window.addEventListener('load', function(){
		
	var sviChb = document.getElementsByName('chb');

	for(var i=0; i<sviChb.length; i++){

	sviChb[i].addEventListener('click',proveraChb);
		}
	});


window.addEventListener('load',function(){


	var sviRb = document.getElementsByName('rb');

	for(var i=0; i<sviRb.length; i++){

		sviRb[i].addEventListener('click',proveraRb);

	}


});





function provera(){
	var greske = [];
	provIme();
	provPrezime();
	provEmail();
	proveraDdl();
	proveraChb();
	proveraRb();
	

}

function provIme(){
	
	var ispisIme = document.getElementById('ime-greska');
	
	var ime = document.getElementById('ime');
	
	var regIme = /^[A-Z][a-z]{2,}$/;
	
	if(!regIme.test(ime.value)){
		
		ime.style.border="1px solid red";
		ispisIme.innerHTML = "Vase ime mora poceti velikim slovom i imati barem 3 slova";
		ispisIme.style.color="red";
		
		
	}
	else
	{
		ime.style.border="1px solid blue";
		ispisIme.innerHTML ="Uspesno ste uneli vase ime";
		ispisIme.style.color="blue";
		
		
	}
	
}

function provPrezime(){
	
	var ispisPrezime = document.getElementById("prezime-greska");
	
	var prezime = document.getElementById('prezime');
	var regPrezime = /^[A-Z][a-z]{2,}$/;
	
	if(!regPrezime.test(prezime.value)){
		
		prezime.style.border="1px solid red";
		ispisPrezime.innerHTML = "Vase prezime mora poceti velikim slovom i imati barem 3 slova";
		ispisPrezime.style.color="red";
		
	}
	else
	{
		prezime.style.border="1px solid blue";
		ispisPrezime.innerHTML ="Uspesno ste uneli Vase prezime";
		ispisPrezime.style.color="blue";
		
	}
	
}

function provEmail(){
	
	var email = document.getElementById('mail');
	
	var mailGreska = document.getElementById('mail-greska');
	
	var regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(!regEmail.test(email.value)){
		
		email.style.border="1px solid red";
		mailGreska.innerHTML = "Vas email nije u dobrom formatu";
		mailGreska.style.color="red";
		
	}
	else
	{
		email.style.border="1px solid blue";
		mailGreska.innerHTML ="Uspesno ste uneli Vas email";
		mailGreska.style.color="blue";
		
	}
	
	
}

function puniDdl(){
	
	var lista = "<option value='0'>Izaberite...</option>";
	
	var marke = ['iPhone','Samsung','Huawei','Lenovo','Motorola','Nokia','Xiaomi'];
	
	for(var i=0; i<marke.length; i++){
		
		lista+="<option value='"+marke[i]+"'>"+marke[i]+"</otpion>";
	}
	
	document.getElementById('ddl').innerHTML=lista;
	
	
}

function puniChb(){
	
	var primac="";
	
	var kvarovi = ['Problem sa displejem','Polomljen Touch-screen','Problem sa konektorom punjenja','Problem sa mikrofonom ili zvucnikom','Drugo...'];
	
	for(var i=0; i<kvarovi.length; i++){
		
		primac+="<input type='checkbox' name='chb' value='"+kvarovi[i]+"'>"+kvarovi[i]+"</br>";
	}
	
	document.getElementById('chbovi').innerHTML=primac;
	
}

	var primac="";
	function puniRb(){
	
	var niz = ['Da','Ne'];

	
	for(var i=0; i<niz.length; i++){
		
		primac+="<input type='radio' name='rb' id='"+niz[i]+"' value='"+niz[i]+"'>"+niz[i]+"</rb>";
	}
	document.getElementById('radiji').innerHTML=primac;


	
	}

	function proveraDdl(){

		var ddl = document.getElementById('ddl');

		var greskaDdl = document.getElementById('greska-ddl');

		var selektovan = ddl.selectedIndex;

		if(selektovan !=0){

			var vrednost = ddl.options[ddl.selectedIndex].value;
			greskaDdl.innerHTML="Marka je uspesno uneta";
			greskaDdl.style.color="blue";
			
		
		}
		else
		{

		greskaDdl.innerHTML="Morate uneti marku vaseg telefona";	
		greskaDdl.style.color="red";
		;

		}

	}
	
	function proveraChb(){

		var sviChb= document.getElementsByName('chb');

		var greska = document.getElementById('opis-greska');

		var cekiran = "";

		for(var i=0; i<sviChb.length; i++){
			if(sviChb[i].checked){

				cekiran+=sviChb[i];
			}

		}
		if(cekiran==""){

			greska.innerHTML="Morate oznaciti barem jedan kvar ";
			greska.style.color="red";
			

		}
		else
		{
			greska.innerHTML="Uspesno ste oznacili kvar";
			greska.style.color="blue";
			
		}


	}

	function proveraRb(){

		var sviRb = document.getElementsByName('rb');

		var greska = document.getElementById('radiji-greska');

		var primac="";

		for(var i=0; i<sviRb.length; i++){
			if(sviRb[i].checked){

				primac=sviRb[i];
				greska.innerHTML="Uspesno ste cekirali";
				greska.style.color="blue";

			}

		}
		if(primac==""){

			greska.innerHTML="Morate cekirati opciju preuzimanja";
			greska.style.color="red";
			

		}
		else{

			greska.innerHTML="Uspesno ste cekirali opciju preuzimanja";
			greska.style.color="blue";
		
		}

	}

	function textArea(){

		var polje = document.getElementById('text-area');

		var ubaci = document.createElement('input');

		ubaci.setAttribute('type','text');

		var tekst = document.createTextNode('Morate uneti vasu adresu:');


		polje.appendChild(tekst);
		polje.appendChild(ubaci);

		document.getElementById('Da').removeEventListener('click',textArea);


	}


	

		


