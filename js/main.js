//Listeneri
document.getElementById('ime').addEventListener('keyup',provIme);

document.getElementById('prezime').addEventListener('keyup',provPrezime);

document.getElementById('mail').addEventListener('keyup',provEmail);

window.addEventListener('load',puniDdl);

window.addEventListener('load',puniChb);

window.addEventListener('load',puniRb);



function provIme(){
	
	var ispisIme = document.getElementById('ime-greska');
	
	var ime = document.getElementById('ime');
	
	var regIme = /^[A-Z][a-z]{2,}$/;
	
	if(!regIme.test(ime.value)){
		
		ime.style.border="1px solid red";
		console.log("Nije dobro");
		ispisIme.innerHTML = "Vase ime mora poceti velikim slovom i imati barem 3 slova";
		
	}
	else
	{
		ime.style.border="1px solid blue";
		console.log("Dobro je");
		ispisIme.innerHTML ="";
		
	}
	
}

function provPrezime(){
	
	var ispisPrezime = document.getElementById("prezime-greska");
	
	var prezime = document.getElementById('prezime');
	var regPrezime = /^[A-Z][a-z]{2,}$/;
	
	if(!regPrezime.test(prezime.value)){
		
		prezime.style.border="1px solid red";
		console.log("Nije dobro");
		ispisPrezime.innerHTML = "Vase prezime mora poceti velikim slovom i imati barem 3 slova";
	}
	else
	{
		prezime.style.border="1px solid blue";
		console.log("Dobro je");
		ispisPrezime.innerHTML ="";
	}
	
}

function provEmail(){
	
	var email = document.getElementById('mail');
	
	var mailGreska = document.getElementById('mail-greska');
	
	var regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if(!regEmail.test(email.value)){
		
		email.style.border="1px solid red";
		console.log("Nije dobro");
		mailGreska.innerHTML = "Vas email nije u dobrom formatu";
	}
	else
	{
		email.style.border="1px solid blue";
		console.log("Dobro je");
		mailGreska.innerHTML ="";
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
		
		primac+="<input type='radio' name='rb' value='"+niz[i]+"'>"+niz[i]+"</rb>";
	}
	document.getElementById('radiji').innerHTML=primac;
	
	}



