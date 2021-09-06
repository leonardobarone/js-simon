// Un alert() espone 5 numeri generati casualmente.
var arrayDiNumeriRandom = [];
for (var i = 0; i < 5; i++) {
    var numeroRandom = Math.floor(Math.random() * 5 + 1);
    arrayDiNumeriRandom.push(numeroRandom);
}
alert(`I 5 numeri generati casualmente sono: ${arrayDiNumeriRandom.join(' - ')}`);
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var arrayNumeriInseritiDaUtente = [];
setTimeout(
    function(){

        var i = 0;
        
        while(i < 5) {
            
            numeroInseritoDaUtente = parseInt(prompt("Inserisci i numeri che hai visto precendemente"));
            
            if (!isNaN(numeroInseritoDaUtente) && numeroInseritoDaUtente <= 5 && numeroInseritoDaUtente >= 1) {
                
                arrayNumeriInseritiDaUtente.push(numeroInseritoDaUtente); 
                
                i++
            } else {
                alert("attenzione non è un numero compreso tra 1 e 5");
            }
            

        }


        // for(var i = 0; i < 5; i++) {

            
        //     numeroInseritoDaUtente = parseInt(prompt("Inserisci i numeri che hai visto precendemente"));
        //     arrayNumeriInseritiDaUtente.push(numeroInseritoDaUtente);   

        // }
    },
    3 * 1000
    );
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    var arrayNumeriIndovinati = [];
setTimeout (
    function(){
        
        for (var i = 0; i < 5; i++) {
            if(arrayNumeriInseritiDaUtente[i] == arrayDiNumeriRandom[i]) {
                arrayNumeriIndovinati.push(arrayDiNumeriRandom[i]);                
            }
         }

         if (arrayNumeriIndovinati.length == 5) {
             document.getElementById("risultato").innerHTML += "hai vinto";
             document.getElementById("risultato").classList.add("verde");
         } else {
            document.getElementById("risultato").innerHTML += ("hai perso indovinandone: " + arrayNumeriIndovinati.length);
            document.getElementById("risultato").classList.add("rosso");
         }
         
    },
    4 * 1000
);
