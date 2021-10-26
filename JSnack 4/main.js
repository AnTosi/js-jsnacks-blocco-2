//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach


const bikes = [
{
    nome: "Brumotti special",
    peso: 8
},
{
    nome: "Cannondale",
    peso: 11
},

{
    nome: "Atala",
    peso: 10
},
]

weight = 100;

bikes.forEach(bike => {
    if (bike.peso<weight) {
        weight = bike.peso;
        console.log(bike.nome);
        document.querySelector("h1").innerHTML = `La bici più leggera è ${bike.nome}`
    }
});