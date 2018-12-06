document.getElementById('jos').addEventListener('click',proba);

function proba(){
    var divDrzac = document.createElement('div');
        divDrzac.classList.add("col-lg-4");
        divDrzac.classList.add("col-md-6");
        divDrzac.classList.add("mb-4");
    
    var divDrugi = document.createElement('div');
        divDrugi.classList.add('card');
        divDrugi.classList.add('h-100');

    var img = document.createElement('img');
        img.classList.add('card-img-top');	
        img.setAttribute('src','http://placehold.it/700x400');
        img.setAttribute('alt','Iphone 6s');
    
    var divTreci = document.createElement('div');
        divTreci.classList.add('card-body');

    var h41 = document.createElement('h4');
        h41.classList.add('card-title');
    var textn1 = document.createTextNode('Naslov');
        h41.appendChild(textn1);

    var h51 = document.createElement('h5');
        var texth51 =document.createTextNode('Cena');
        h51.appendChild(texth51);

    var peovi = document.createElement('p');
        peovi.classList.add('card-text');
        var peoviText = document.createTextNode('Opissss');
        peovi.appendChild(peoviText);

        divTreci.appendChild(h41);
        divTreci.appendChild(h51);
        divTreci.appendChild(peovi);


        divDrugi.appendChild(img);
        divDrugi.appendChild(divTreci);

        divDrzac.appendChild(divDrugi);

        document.getElementById('primac').appendChild(divDrzac);

    }

