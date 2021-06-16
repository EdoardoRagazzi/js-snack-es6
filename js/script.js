//**************************SNACK1*********************//
// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
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

let pesoMin = bicicletta[0];

for (let i = 0; i < bicicletta.length; i++) {
    console.log(bicicletta[i]);
    if (bicicletta[i].peso < pesoMin.peso) {
        pesoMin = bicicletta[i];
    }

}
const bike { nome, peso }

console.log(pesoMin);










// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti e stampiamo tutto in console.