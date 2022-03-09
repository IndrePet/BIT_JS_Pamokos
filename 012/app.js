'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//par1 = v;

///rasom funkcija
//funkcijos deklaracija
//parametru galima nepriskirti. tik jeigu REIKIA
function pasisveikinimas(par1, par2) {
    console.log(par2, 'as', par1);
}

//parametras//argumentas
let v = 'Jonas';

console.log('Startas');

//funkcijos iskvietimas
pasisveikinimas(v, 'lul');
pasisveikinimas('Murka', 'Ciao');

console.log('Finisas');

console.log('---------1--------');
//Parašyti funkciją kuri sudėtų ir atspausdintų du 
//skaičius. Pademonstruoti ją iškviečiant bent porą 
//kartų DONE!

// function sudetis(pirmasSk, antrasSk){
//     console.log(pirmasSk + antrasSk);
// }

// sudetis(5, 19);
// sudetis(3300000, 0.89);


////anonimine funkcija
const sudetis = function (pirmasSk, antrasSk){
    console.log(pirmasSk + antrasSk);
}

sudetis(5, 19);
sudetis(3300000, 0.89);

console.log('---------2--------');

//parašyti funkciją linija, kuri argumentu gauna vieną simbolį ir iš 
//jo nupaišo liniją iš 10 pasikartojančių tų simbolių DONE!

const linija = function(simbolis = '-'){
    let x10 = '';
    for(let i = 0; i<10; i++){
        x10 += simbolis;
    }
    return x10
}

linija('+');
linija('un');
linija('*');
//pasiima defaultine reiksme 
linija();

//noriu pats atsispausdint linija
//funkcija gali po savo ivykdymo grazinti kazkokia reiksme su return

const lin = linija();

console.log(55, linija(), lin);

console.log('---------3--------');