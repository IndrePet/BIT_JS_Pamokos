function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

////////////////////////////////
//CONDITIONAL TERNARY OPERATOR//
////////////////////////////////
console.log('------------TERNARY-----------');

let kokiaSpalva;

console.log(typeof kokiaSpalva);

if(true) {
    kokiaSpalva = 'Raudona';
} else {
    kokiaSpalva = 'Geltona';
}

console.log(kokiaSpalva);

//ternary

let katinoVardas;

console.log(katinoVardas);

katinoVardas = (rand(0, 1)) ? 'Rudis' : 'Pilkis';

console.log(katinoVardas);


// 1 - A, 2 - B, 3 - C

let letter;
let number = 3;

console.log(letter);

letter = number === 1 ? 'A' : number === 2 ? 'B' : 'C';

console.log(letter);




console.log('------------------------------');

let didMaz = 5;

console.log(didMaz);

if(0) {
    didMaz++;
} else {
    didMaz--;
}

console.log(didMaz);

true ? didMaz++ : didMaz--; //ternary if

console.log(didMaz);


console.log('------------------------------');

////////////////////
//PIRMAS UZDAVINYS//
////////////////////
console.log('-------PIRMAS-----------------');

console.log('A' < 'a');

console.log('------------------------------');
////////////////////
//ANTRAS UZDAVINYS//
////////////////////
console.log('------------------------------');

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';
// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log(`as: ${as}, tu: ${tu}`);

// if (as === 'popierius' && tu === 'akmuo'){
//     console.log('Tu laimejai');
//     if (as === 'akmuo' && tu === 'akmuo'){
//         console.log('Lygiosios');
//     } else {
//         console.log('why');
//     }
// } else if (as === 'popierius' && tu == 'popierius') {

// }

if(as === 'popierius') {
    if(tu === 'popierius'){
        console.log('Lygiosios');
    } else if(tu === 'akmuo') {
        console.log('As laimejau');
    } else {
        console.log('Tu laimejai');
    }
} else if(as === 'akmuo') {
    if(tu === 'popierius'){
        console.log('Tu laimejai');
    } else if(tu === 'akmuo') {
        console.log('Lygiosios');
    } else {
        console.log('As laimejau');
    }
} else {
    if(tu === 'popierius'){
        console.log('As laimejau');
    } else if(tu === 'akmuo') {
        console.log('Tu laimejai');
    } else {
        console.log('Lygiosios');
    }
}


console.log('------------------------------');

if(as == tu) {
    console.log('Lygiosios2');
} 
else {
    if(as == 'popierius'){
        console.log(tu == 'zirklės' ? 'TU' : 'AS');
    } else if(as == 'akmuo') {
        console.log(tu == 'zirklės' ? 'AS' : 'TU');
    } else {
        console.log(tu == 'akmuo' ? 'TU' : 'AS');
    }
}

console.log('------------------------------');
//////////////////
//TESTUKAS//////// failo vardas tu1.js
//////////////////
console.log('-----TESTUKAS-----------------');



console.log('------------------------------');