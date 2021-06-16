//**************************SNACK1*********************//
// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
const bicicletta = [
    {
        nome: 'giant',
        peso: 5
    },
    {
        nome: 'berma',
        peso: 8
    },
    {
        nome: 'trek',
        peso: 6
    }
];

let biciclettaMin = bicicletta[0];

for (let i = 0; i < bicicletta.length; i++) {
    console.log(bicicletta[i]);
    if (bicicletta[i].peso < biciclettaMin.peso) {
        biciclettaMin = bicicletta[i];
    }

}
const { nome, peso } = biciclettaMin;

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
document.getElementById('container').innerHTML =
    `<ul>
<li>Nome : ${nome}</li>
<li>Peso : ${peso}</li>
</ul>`;

console.log(biciclettaMin);




// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: 'Juve',
        puntiFatti: 0,
        puntiSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        puntiSubiti: 0
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        puntiSubiti: 0
    }
];
//------ARROW FUNCTIONS------//
const randomNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.

for (var i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumbers(0, 5);
    squadre[i].puntiSubiti = randomNumbers(0, 5);
}
console.log(squadre);

let newSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    let { nome, puntiSubiti } = squadre[i];
    puntisubiti = randomNumbers(0, 5);
    newSquadre.push({ nome, puntiSubiti })

}
console.log(newSquadre);





