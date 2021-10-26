/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/ 

let numberArray = [];
let element = prompt("Inserisci un numero")
sum = [element];

while (sum < 50) {
    
    if (sum < 50) {
        element = prompt("Inserisci un numero");
        numberArray.push(element);
        sum = parseInt(sum) + parseInt(element);
        console.log(sum);
}};