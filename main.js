//chiedo all'utente se puntare su pari o dispari


//l'utente può scegliere un numero da 1 a 5 
//il computer genera un numero random usando una funzione
//fai la somma dei due numeri
//la somma dei due numeri restituisce un numero pari o dispari? 
//dichiarare vincitore 


//input
//scelta utente 
let scommessaUtente = prompt('Pari o dispari?');
console.log(`L'utente ha scelto ${scommessaUtente}`);

 if (scommessaUtente != "pari" && scommessaUtente != "dispari") {
    alert("Errore! Scegli pari o dispari") ; 
    scommessaUtente = "pari" ;
    console.log("Nuova scelta automatica: ", scommessaUtente) ;
 }
//scelta computer

let scommessaComputer = null 

if (scommessaUtente = "pari") {
    scommessaComputer = "dispari" ;
} else if (scommessaUtente = "dispari") {
    scommessaComputer = "pari" ;
}

console.log('La scelta del computer è:',scommessaComputer);
//elaborazione
//Output