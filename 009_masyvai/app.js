'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


//MASYVAI

const namas = ['Petras', 'Birutė', 'Bebras'];

console.log(typeof namas);

console.log(namas);
console.log(namas[2]);
console.log(namas[0]);

namas[0] = 'Barsukas';

namas[9] = 'Žirafa';
namas[6] = 'true';
namas[3] = 'Ūdra';
namas[7] = [1, 2, 3];
console.log(namas);

//spausdinti visus aukštus eilės

for(let i = 0; i < namas.length; i++){
    console.log(namas[i]);
}
//pristatymas ant viršaus  
namas.push('Krokodilas', 'Zuikis');

//pristatymas is apacios
namas.unshift('Sklepo gyventojas');
console.log(namas);
//////////////////////
//PIRMA UZDUOTIS//////
//////////////////////
//Atspausdinti katinukų vardus po vieną vardą. DONE!
console.log('---PIRMA UZDUOTIS-------------');
const cats = ['Pilkis', 'Murka', 'Keris', 'Ūkas'];

for (let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}


console.log('------------------------------');
//////////////////////
//ANTRA UZDUOTIS//////
//////////////////////
//Atspausdinti katinukų vardų pirmas raides 
//po vieną raidę eilutėje. DONE!
console.log('-----ANTRA UZDUOTIS-----------');

for (let i = 0; i < cats.length; i++){
    console.log(cats[i][0]);
}

console.log('------------------------------');
//////////////////////
//TRECIA UZDUOTIS/////
//////////////////////
//
console.log('-------TRECIA UZDUOTIS--------');

const digits = [5, 8, 9, 45, 13, 78, 9, 10, 23];
let digitsSum = 0;
for (let i = 0; i < digits.length; i++){
    digitsSum += digits[i];
}
console.log(digitsSum);


console.log('------------------------------');
//////////////////////
//KETVIRTA UZDUOTIS///
//////////////////////
//Padarykite 20 elementų masyvą, kur 
//elementai būtų atsitiktiniai kauliukai (rand 1 - 6) DONE!
console.log('--------KETVIRTA UZDUOTIS-----');

const element20 = [];
for (let i = 0; i < 20; i++){
    element20.push(rand(1, 6));
}
console.log(element20);

console.log('------------------------------');
//////////////////////
//PENKTA UZDUOTIS/////
//////////////////////
//Reikia sukurti masyvą iš 33 elementų, kurio 
//elementai būtų stringai 'A' arba 'B' sudėlioti atsitiktine
// tvarka DONE!
console.log('-------PENKTA UZDUOTIS--------');

let aB = [];
let pushas = rand(1, 2);

for (let i = 0; i < 33; i++){
    let pushas = rand(1, 2); //arba rand(1, 2) ? 'A' : 'B';
    if (pushas === 1){
        aB.push('A');
    } else {
        aB.push('B');
    }

}

console.log(aB);

console.log('------------------------------');
//////////////////////
//SESTA UZDUOTIS//////
//////////////////////
//Masyve su AB raidėm visas A raides, 
//kurios eina po B raidės, pakeisti į C raidę DONE!
console.log('-------SESTA UZDUOTIS--------');

// for(let i = 0; i < aB.length; i++){ 
//     if (aB[i] === 'A' && aB[i-1] === 'B'){
//         aB[i] = 'C';
//     }
// }
// console.log(aB);


for (let i = 1; i < aB.length; i++)
    {if (aB[i] == 'A' && aB[i - 1] == 'B'){
        aB[i] = 'C';
    }}

console.table(aB);

console.log('------------------------------');
//////////////////////
//SEPTINTA UZDUOTIS///
//////////////////////
//Masyvo pagal A ir B kūrimas, bet gautame masyve turi 
//būti B raidžių bent dvigubai daugiau nei A DONE!
console.log('-------SEPTINTA UZDUOTIS--------');


console.log('------------------------------');
//////////////////////
//ASTUNTA UZDUOTIS////
//////////////////////
//Masyvo su C rade pagrindu sukūrkite tris naujus masyvus.
// Į vieną 
//surašykite visas A raides, į kitą B ir į dar kitą C DONE!
console.log('-------ASTUNTA UZDUOTIS--------');
let arrayA = [];
let arrayB = [];
let arrayC = [];

for (let i = 0; i < aB.length; i++){
    if (aB[i] == 'A'){
        arrayA.push('A');
    } else if (aB[i] == 'B'){
        arrayB.push('B');
    } else {
        arrayC.push('C');
    }
}

console.log(arrayA);
console.log(arrayB);
console.log(arrayC);

console.log('------------------------------');
//////////////////////
//DEVINTA UZDUOTIS///
//////////////////////
//Sukurti masyvą iš 5 elementų, kurie yra A raidės, 
//tada atskiru for ciklu prie jo viršaus pridėti 5 B 
//raides ir kitu atskiru for ciklu prie apačios pridėti 
//5 C raides DONE!
console.log('-------DEVINTA UZDUOTIS--------');

const naujasArejus = ['A', 'A', 'A', 'A', 'A'];
for(let i = 0; i < 5; i++){
    naujasArejus.push('B');
}
for(let i = 0; i < 5; i++){
    naujasArejus.unshift('C');
}

console.log(naujasArejus);



console.log('------------------------------');
//////////////////////
//DESIMTA UZDUOTIS////
//////////////////////
//Gautame masyve nutrinti tris viršutinius 
//ir tris apatinius elementus DONE!
console.log('-------DESIMTA UZDUOTIS--------');

for(let i = 0; i < 3; i++){
    naujasArejus.shift();
    naujasArejus.pop();
}
console.log(naujasArejus);

console.log('------------------------------');
/////////////////////////
//VIENUOLIKTA UZDUOTIS///
/////////////////////////
//
console.log('---VIENUOLIKTA UZDUOTIS--------');

const dvigubasB = [];

let suma;

for (let i = 0; i < 33; i++){

    do {

        const ab = rand(0, 1) ? 'A' : 'B';

        suma += ab;

        dvigubasB.push(ab);

    } while (suma <= 17);    

}

console.log(dvigubasB);

console.log('------------------------------');