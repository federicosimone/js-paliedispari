// utente inserisce una parola
//con una funzione devo: 
//trasformarla in array con array.from
//fare il suo reverse
//ritrasformarlo in stringa 
//verificare che le due stringhe siano uguali (==)
// stampare il risultato

let parolaInserita = prompt("Scrivi una parola") ;
console.log(`la parola inserita è ${parolaInserita}`)

function Palindromo(parolaInserita) { 
    let parolaScomposta = Array.from(parolaInserita) ;
    let arrayInverso = parolaScomposta.reverse ;
    let stringAgain = arrayInverso ;

    if (stringAgain == parolaInserita) {
        alert("WOW! E' un palindromo!");
    } else {
        alert("Non è un palindromo, RIPROVA...") ;
    }
    
    return stringAgain ;
}

console.log(Palindromo(parolaInserita)) ;