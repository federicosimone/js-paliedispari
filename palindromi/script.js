// utente inserisce una parola
//con una funzione devo: 
//trasformarla in array con array.from
//fare il suo reverse
//ritrasformarlo in stringa 
//verificare che le due stringhe siano uguali (==)
// stampare il risultato

let parolaInserita = prompt("Scrivi una parola") ;
console.log(`la parola inserita è ${parolaInserita}`)
let risultato = Palindromo(parolaInserita) ;

function Palindromo(stringa) { 
    let parolaScomposta = stringa.split("") ;
    //console.log(parolaInserita)
    let arrayInverso = parolaScomposta.reverse() ;
    //console.log(arrayInverso)
    let stringAgain = arrayInverso.join("") ;
    //console.log(stringAgain)

    if (parolaInserita == stringAgain) {
        alert("WOW! E' un palindromo!");
    } else {
        alert("Non è un palindromo, RIPROVA...") ;
    }
    
    return stringAgain ;
}

console.log(risultato) ;