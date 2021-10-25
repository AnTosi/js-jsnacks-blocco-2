let weight = [];
const bike = [
    { 
    "nome":"cannondale",
    "peso": 10
},
{
    "nome": "atala",
    "peso": 12 
},

{
    "nome": "brumotti special",
    "peso": 5
}


]


for (let i = 0; i < bike.length; i++) {

    let peso = (bike[i].peso);
    // console.log(parseInt(bike[i].peso));
    weight.push(peso);
    // console.log(weight);
    let minWeight = Math.min(...weight);
    if (minWeight == peso) {
        document.querySelector("h1").innerHTML = `La Bicicletta più leggera è ${(bike[i].nome)}`;
    }
}


let minWeight = Math.min(...weight);


console.log(Math.min(...weight));
// console.log(Math.min(parseInt(...peso)));

// document.querySelector("h1").innerHTML = Math.min(...weight);