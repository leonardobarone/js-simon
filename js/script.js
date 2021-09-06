// Un alert() espone 5 numeri generati casualmente.
var arrayDiNumeriRandom = [];
for (var i = 0; i < 5; i++) {
    var numeroRandom = Math.floor(Math.random() * 5 + 1);
    arrayDiNumeriRandom.push(numeroRandom);
}
console.log(`I 5 numeri generati casualmente sono: ${arrayDiNumeriRandom.join(' - ')}`);
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var arrayNumeriInseritiDaUtente = [];
setTimeout(
    function(){
        numeroInseritoDaUtente = parseInt(prompt("Inserisci i numeri che hai visto precendemente"));
        for(var i = 0; i < 5; i++) {
            arrayNumeriInseritiDaUtente.push(numeroInseritoDaUtente);
        }
    },
    3 * 1000
);
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
for (var i = 0; i < 5; i++) {
   console.log(arrayNumeriInseritiDaUtente[i])
}