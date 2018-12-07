document.getElementById('jos').addEventListener('click',poziva);


function poziva(){


    prviDiv();
    drugiDiv();
    treciDiv();
    document.getElementById('jos').style.display="none";


}

function prviDiv(){
    var divDrzac = document.createElement('div');
        divDrzac.classList.add("col-lg-4");
        divDrzac.classList.add("col-md-6");
        divDrzac.classList.add("mb-4");
    
    var divDrugi = document.createElement('div');
        divDrugi.classList.add('card');
        divDrugi.classList.add('h-100');

    var img = document.createElement('img');
        img.classList.add('card-img-top');	
        img.setAttribute('src','img/used/iPhone7.jpg');
        img.setAttribute('alt','Iphone 7');
    
    var divTreci = document.createElement('div');
        divTreci.classList.add('card-body');

    var h41 = document.createElement('h4');
        h41.classList.add('card-title');
    var textn1 = document.createTextNode('iPhone 7');
        h41.appendChild(textn1);

    var h51 = document.createElement('h5');
        var texth51 =document.createTextNode('270eur');
        h51.appendChild(texth51);

    var peovi = document.createElement('p');
        peovi.classList.add('card-text');
        var peoviText = document.createTextNode('iPhone 7 u malo losijem stanju, stanje 7/10, funkcionalno potpuno ispravan, zakljucan na mts mrezu');
        peovi.appendChild(peoviText);

        divTreci.appendChild(h41);
        divTreci.appendChild(h51);
        divTreci.appendChild(peovi);


        divDrugi.appendChild(img);
        divDrugi.appendChild(divTreci);

        divDrzac.appendChild(divDrugi);

        document.getElementById('primac').appendChild(divDrzac);




        

    }

    function drugiDiv(){
        var divDrzac = document.createElement('div');
            divDrzac.classList.add("col-lg-4");
            divDrzac.classList.add("col-md-6");
            divDrzac.classList.add("mb-4");
        
        var divDrugi = document.createElement('div');
            divDrugi.classList.add('card');
            divDrugi.classList.add('h-100');
    
        var img = document.createElement('img');
            img.classList.add('card-img-top');	
            img.setAttribute('src','img/used/s8.jpg');
            img.setAttribute('alt','Samsung s8 saphire blue');
        
        var divTreci = document.createElement('div');
            divTreci.classList.add('card-body');
    
        var h41 = document.createElement('h4');
            h41.classList.add('card-title');
        var textn1 = document.createTextNode('Samsung s8');
            h41.appendChild(textn1);
    
        var h51 = document.createElement('h5');
            var texth51 =document.createTextNode('350eur');
            h51.appendChild(texth51);
    
        var peovi = document.createElement('p');
            peovi.classList.add('card-text');
            var peoviText = document.createTextNode('Samsung s8 kao nov, star 6 meseci, full oprema, sim free');
            peovi.appendChild(peoviText);
    
            divTreci.appendChild(h41);
            divTreci.appendChild(h51);
            divTreci.appendChild(peovi);
    
    
            divDrugi.appendChild(img);
            divDrugi.appendChild(divTreci);
    
            divDrzac.appendChild(divDrugi);
    
            document.getElementById('primac').appendChild(divDrzac);
    
    
    
    
            
    
        }

        function treciDiv(){
            var divDrzac = document.createElement('div');
                divDrzac.classList.add("col-lg-4");
                divDrzac.classList.add("col-md-6");
                divDrzac.classList.add("mb-4");
            
            var divDrugi = document.createElement('div');
                divDrugi.classList.add('card');
                divDrugi.classList.add('h-100');
        
            var img = document.createElement('img');
                img.classList.add('card-img-top');	
                img.setAttribute('src','img/used/se.jpg');
                img.setAttribute('alt','Iphone SE');
            
            var divTreci = document.createElement('div');
                divTreci.classList.add('card-body');
        
            var h41 = document.createElement('h4');
                h41.classList.add('card-title');
            var textn1 = document.createTextNode('iPhone SE');
                h41.appendChild(textn1);
        
            var h51 = document.createElement('h5');
                var texth51 =document.createTextNode('160eur');
                h51.appendChild(texth51);
        
            var peovi = document.createElement('p');
                peovi.classList.add('card-text');
                var peoviText = document.createTextNode('iPhone SE, zakljucan na Vip mrezu, star 2 godine, full pakovanje, svi racuni');
                peovi.appendChild(peoviText);
        
                divTreci.appendChild(h41);
                divTreci.appendChild(h51);
                divTreci.appendChild(peovi);
        
        
                divDrugi.appendChild(img);
                divDrugi.appendChild(divTreci);
        
                divDrzac.appendChild(divDrugi);
        
                document.getElementById('primac').appendChild(divDrzac);
        
        
        
        
                
        
            }

