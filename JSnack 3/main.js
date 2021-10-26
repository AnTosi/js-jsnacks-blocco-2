/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* a somma degli elementi è minore di 50.
*/ 

let numberArray = [];
sum = 0;
let element = prompt("Inserisci un numero")

while (sum < 50) {
    sum += element;
    element = prompt("Inserisci un numero")
    numberArray.push(element)
};