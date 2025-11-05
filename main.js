//chiedo all'utente se puntare su pari o dispari


//l'utente può scegliere un numero da 1 a 5 
//il computer genera un numero random usando una funzione
//fai la somma dei due numeri
//la somma dei due numeri restituisce un numero pari o dispari?  usando funzione
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

if (scommessaUtente == "pari") {
    scommessaComputer = "dispari" ;
} else {
    scommessaComputer = "pari" ;
}

console.log('La scelta del computer è:',scommessaComputer);

// numero utente 

let numeroUtente = parseInt(prompt('Scegli un numero tra 1 e 5')) ;

if (numeroUtente > 5 ) {
    alert("Il numero non è valido, ho scelto 4 per te")    
    numeroUtente = parseInt(4) ;
}

console.log("L'utente ha scelto il numero" ,numeroUtente  ) ;

// numero computer 


function NumeroRandom(min, max) {
    let risultato = Math.floor(Math.random() * (max - min + 1) + min) ;
    return risultato;
}

const min = parseInt(1) ;
const max = parseInt(5) ;

let NumeroComputer = NumeroRandom(min, max) ;
console.log("Il computer ha scelto ",NumeroComputer) ;



//elaborazione

let somma = numeroUtente + NumeroComputer ;
console.log("La somma dei due numeri è" ,somma) ;

function pariOrDispari(somma) {
    
    let risultato = null ;
    if (somma % 2 == 0) {
        risultato = "pari"
    } else {
        risultato = "dispari"
    }

    return risultato ;
    
}

console.log(pariOrDispari(somma)) ;


//Output

alert(`La somma è ${somma} ed il numero è ${pariOrDispari(somma)}`)
alert(`La puntata iniziale dell'utente era ${scommessaUtente}`)

if (pariOrDispari(somma) == scommessaUtente) {
    alert("Utente ha VINTO!")
} else {
    alert("Computer ha VINTO!")
}