// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

const numeri=(a,b){
    if(a===50)||(b===50)||(a+b===50) {
        return true;
    } else return false
        
    }
    console.log(return)
    


// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

const stringe = "modifica stringa stringa modificata";
console.log(stringa.slice(18,36));




// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

const numericompresi=(a,b){
    if (a >= 40 && b <= 60)|| (a >= 70 && b <= 100) {
        return true; 

    }else  return false; 
   

}
console.log(returns.numericompresi)

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

const nomeCitta=(nome){
    if(nome=="New")||(nome=="Los"){
        return false
    }
        else return true

}


// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

const sum=[]



// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

const controllo=(numeri){
    if(numeri===1)||(numeri===3){
        return true
    } else return false
}

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”



// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

const frase="fabbrica Italiana Automobili Torino"{

}
console.log(frase.slice(1,10,19,30))
