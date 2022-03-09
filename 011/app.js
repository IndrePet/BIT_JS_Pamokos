'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log('---------1--------');
// Surašyti masyvo mergaičių vaedus stulpeliu DONE!
const BitGirls = ['Brigita', 'Juste', 'Deimante']; 

for(let i = 0; i < BitGirls.length; i++){
    for(let k = 0; k < BitGirls[i].length; k++){
        console.log(BitGirls[i][k]);
    }   
    console.log('------')
}


console.log('---------2--------');

//Išspausdinti gyventojų sąrašą DONE!

const bigHouse = [
    ['Tomas', 'Sigute'],
    ['Bebras', 'Bronius'],
    ['Aiste', 'X'],
];

for(let i = 0; i < bigHouse.length; i++){
    for(let k = 0; k < bigHouse[i].length; k++){
        console.log(bigHouse[i][k]);
    }
}

console.log('---------3--------');

//sukurti masyvą iš trijų elementų, kurie būtų masyvai iš 3 elementų, 
//kurių reikšmės yra A raidės DONE!

const aNamelis = [];

for(let i = 0; i < 3; i++){
    aNamelis.push([]);
    for(let k = 0; k < 3; k++){
        aNamelis[i].push('A');
    }
    
}

console.log(aNamelis);

console.log('---------4--------');

//Sukurti random masyvą 3 X 3 į jo elementus 
//įrašant X arba O DONE!

const ticTacToe = [];

for(let i = 0; i < 3; i++){
    ticTacToe.push([]);
    for(let k = 0; k < 3; k++){
        ticTacToe[i].push(rand(0, 1) ? 'X' : 'O');
    }
}

console.log(ticTacToe);

console.log('---------5--------');

//Reik pasakyt ar kažkas laimėjo OX žaidimą, 
//bet tik pagal istrižaines DONE!

if (ticTacToe[1][1] == ticTacToe[0][0] && ticTacToe[1][1] == ticTacToe[2][2] ||
    ticTacToe[1][1] == ticTacToe[2][0] && ticTacToe[1][1] == ticTacToe[0][2]
    ){
        console.log('Laimejo', ticTacToe[1][1]);

} else {
    console.log('Niekas nelaimejo');
}

console.log('---------6--------');

//Masyve su visom A raidėm random 
//vietoje apgyvendinti Nausėda DONE!

aNamelis[rand(0, 2)][rand(0, 2)] = 'Nausėda';
console.table(aNamelis);

console.log('---------7--------');

//Paimkite A ir Nausėdos masyvus ir suraskite kur gyvena Nausėda DONE!

for (let i = 0; i < aNamelis.length; i++){
    for (let k = 0; k < aNamelis[i].length; k++){
        if(aNamelis[i][k] == 'Nausėda'){
            console.log('Nauseda gyvena', i, 'aukste,', k, 'bute');
        }
    }
}

console.log('---------8--------');

//Pagal duotą katiniukų masyvą reikia sukurti naują masyvą, kurio 
//elementas būtų masyvas iš dviejų reikšmių. Pirma vardas antra katiniuko svoris rand(3, 7) DONE!

const cats = ['Murka', 'Rainis', 'Pilkis', 'Kniauklys', 'Miauksius', 'Kakorius']; 

const vardasSvoris = [];

for (let i = 0; i < cats.length; i++){
    vardasSvoris.push([cats[i], rand(3, 7)]);
}
    console.table(vardasSvoris);

console.log('---------9--------');
//Suskaičiuoti visų katinukų svorį DONE!

let svoriuSuma = 0;

for (let i = 0; i < vardasSvoris.length; i++){
    svoriuSuma += vardasSvoris[i][1];
}
console.log('Svoriu suma', svoriuSuma);
console.log('---------9--------');
//Surasti storiausią katinuką ir atspausdinti jo vardą DONE!

let storiausias = 3;
let storiausioVardas = [];

for (let i = 0; i < vardasSvoris.length; i++){
    if(vardasSvoris[i][1] == storiausias){
        storiausioVardas.push(vardasSvoris[i][0]);
    } else if (vardasSvoris[i][1] > storiausias){
        storiausias = vardasSvoris[i][1];
        storiausioVardas = [];
        storiausioVardas.push(vardasSvoris[i][0]);
    }
}

console.log('Storiausi sveria:', storiausias, 'jie yra:', storiausioVardas);