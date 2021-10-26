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

bikes.forEach(element => {
    if (element.peso<weight) {
        weight = element.peso;
        console.log(element.nome);
    }
});