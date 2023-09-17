// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function numeri(n1, n2) { 
    return n1 === 50 || n2 === 50 || n1 + n2 === 50
}
   
    
console.log(numeri(20,0));
console.log(numeri(30, 50));
console.log(numeri(50, 40));

    


// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function remove(a,b){
    const chars = a.split(',');
    chars.splice(b.length)
    return chars.join('');
}
console.log(remove("ciao",1,3))




// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function numericompresi(n1,n2) {
    const numero = n1 >= 40 && n1 <= 60|| n1 >= 70 && n2 <= 100 ;
        return numero(n1)&& numero(n2)

     
}
console.log(numericompresi(50,60))
console.log(numericompre(80, 150))

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.


    function controllaCitta  (nomeCitta)  {
        return nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")
    }
console.log(controllaCitta("New york"))
console.log(controllaCitta("Los America"))
console.log(controllaCitta("Firenze"))

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

function calcolaSomma(array){
    let sum = 0
    for(let i=0; i<array.length; i++);
    const element = array[i]
    sum += element
}

console.log(calcolaSomma([1,2,3,4]));

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`*/

function check(array){
    const check1 = array.includes(1);
    const check2 = array.includes(3);
    return check1 && check2 && check

}

console.log(check([1,2,5,4]));
console.log(check([3,6,9,12]));

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function foud(gradi){
    switch (true){
        case gradi <90:
            return"angolo acuto";
            case gradi === 90:
                return "retto";
                case gradi=== 180:
                    return "piatto";
                    case 90 <gradi && gradi >180:
                        return"ottuso";
    }
    
}

console.log(found(80))
console.log(found(90))
console.log(found(180))
console.log(found(100))
console.log(found(200))

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function acronimo(name){
    let arrayParole = name.split(" ")
    let temp = ""
    for (let i = 0; i < arrayParole.length; i++) {
        const parola = arrayParole[i]
        temp += parola.charAt(0)
    }
    return temp.toUpperCase()
}

