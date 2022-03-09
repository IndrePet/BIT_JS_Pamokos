'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
//////////////////////
//SWITCHAS////////////
//////////////////////
//
console.log('---------SWITCHAS-------------');

let siuntinys = 'M';

if(siuntinys == 'S'){
    console.log('galima dėti į S');
} 

if(siuntinys == 'S' || siuntinys == 'M'){
    console.log('galima dėti į M');
}

if(siuntinys == 'S' || siuntinys == 'M' || siuntinys == 'L'){
    console.log('galima dėti į L');
}
console.log('------------su switch------------------');
switch(siuntinys) {
    case 'S':
        console.log('galima dėti į S');
        break;
    case 'M':
        console.log('galima dėti į M');
        break;
    case 'L':
        console.log('galima dėti į L');
        break;
    default:
        console.log('galima dėti į XL');
}

console.log('------------------------------');
//////////////////////
//PIRMA UZDUOTIS//////
//////////////////////
//Antanas nusipirko naują butą ir pinigų 
//jam liko nedaug. Dabar jis niekaip negali 
//apsispręsti ką pirmiausiai pirkti: televizorių, 
//skalbimo mašiną ar šaldytuvą. Todėl nusprendžia 
//ridenti kauliuką (atsitiktinis skaičius nuo 1 iki 6)
// ir jeigu iškris 1 arba 5 pirkti televizorių, jeigu 3 
//arba 4 pirkti skalbimo mašiną ir jeigu 2 arba 6 - 
//šaldytuvą. Padėkite Antanui apsispręsti. 
//Ridenkite kauliuką ir parašykite atsakymą kokį daiktą 
//jam pirkti.
console.log('---PIRMA UZDUOTIS-------------');

let pirkinys = rand(1,6);
console.log('iskrito', pirkinys);

switch(pirkinys){
    case 1:
        case 5:
            console.log('Pirkti televizorių');
            break;
    case 2:
        case 6:
            console.log('Pirkti šaldytuvą');
            break;
    case 3:
        case 4:
            console.log('Pirkti skalbimo mašiną');
            break;
}


console.log('------------------------------');
//////////////////////
//WHILE///////////////
//////////////////////
//
console.log('-----su for-------------------');

for (let i = 0; i < 3; i++) {
    console.log('Valio', i);
}
console.log('-----su while-----------------');

let i = 8;
while(i < 3) {
    console.log('Valio', i);
    i++;
}

console.log('-----su do while--------------');

let k = 8;
do {
    console.log('Valio', k);
    k++;
    
} while(k < 3);
////////////////////////////
//ATVEJIS KAI REIKIA WHILE//
////////////////////////////
//reikia mest monetą kol iškris herbas
console.log('------------------------------');

//while naudojama kai iš anksto nėra žinoma kiek ciklų bus

let kartai = 0;
let iskrito;
do {
    iskrito = rand(0, 1); //0 herbas, 1 skaicius
    kartai++
    console.log(iskrito)

} while (iskrito == 1);

console.log('KARTAI', kartai);

console.log('------------------------------');
console.log('------------------------------');
//////////////////////
//ANTRA UZDUOTIS//////
//////////////////////
//sukti while ciklą ir mėtyti kauliuką. 
//Baigti mėtymą kai kauliukų suma bus didesnė nei 21. 
//Atspausdinti metamus kauliukus, kauliukų sumą ir kiek 
//kartų reikėjo mesti kauliuką DONE!
console.log('-----ANTRA UZDUOTIS-----------');

let metimoKartai = 0;
let kiauliukuSuma = 0;

do {
    let kiauliukas = rand(1,6);
    console.log('iskrito', kiauliukas);
    kiauliukuSuma += kiauliukas;
    metimoKartai++;
} while(kiauliukuSuma <= 21);

console.log('Kiauliuku suma:', kiauliukuSuma, 'metem kartu:', metimoKartai);

console.log('------------------------------');
//////////////////////
//TRECIA UZDUOTIS/////
//////////////////////
//Mesti kauliuką, kol iškris 1 arba 4, 
//kaulikus spausdinti DONE!
console.log('-------TRECIA UZDUOTIS--------');
let kauliuks;

do {
    kauliuks = rand(1, 6);
    console.log('iskrito', kauliuks)
} while (kauliuks != 1 && kauliuks != 4); 
//teiginiais lengviau galvoti negu neiginiais, 
//todėl while sąlygoje
//reikia sugalvoti ir ra6yti teigini, t. y.
//rašyti  (kauliuks == 1 || kauliuks ==4),
//tada while reikia invert'int, tada bus gerai
/*
== -> !=
!= -> ==

< -> >=
> -> <=

<= -> >
>= -> <

|| -> &&
&& -> ||

*/

console.log('------------------------------');
//////////////////////
//KETVIRTA UZDUOTIS///
//////////////////////
//Mesti kauliuką, spausdinti jo reikšmę, 
//sustoti kai 3 kartą iškrenta 6 DONE!
console.log('--------KETVIRTA UZDUOTIS-----');

let kaulas;
let trysSesi = 0;
do{
    kaulas = rand(1, 6);
    console.log('Iškrito:', kaulas);
    if (kaulas == 6){
        console.log('iškrito šeši')
        trysSesi++;
        
    }

} while (trysSesi != 3);

console.log('------------------------------');
//////////////////////
//PENKTA UZDUOTIS/////
//////////////////////
//Mesti kauliuką, spausdinti jo reikšmę, sustoti kai 3 kartą iš EILĖS iškrenta 6 DONE!
console.log('-------PENKTA UZDUOTIS--------');

// let kaulys;
// let kauliuSuma = 0;

// do {
//     kaulys = rand(1,6);
//     console.log('Iškrito:', kaulys);
//     if (kaulys == 6) {
//         kauliuSuma++;
//     } else {
//         kauliuSuma = 0;
//     }
// } while (kauliuSuma != 3);

console.log('------------------------------');
//////////////////////
//SESTA UZDUOTIS//////
//////////////////////
//Sugeneruoti ir atspausdinti 10 
//atsitiktinių skaičių nuo 100 iki 300, 
//bet skaičiai turi būti tik lyginiai(poriniai) DONE!
console.log('---------SESTA UZDUOTIS-------');
// let kiaule;
// let kiauliuRatai = 0;
// for (let o = 0; o < 10; o++){
//     do {
//         kiaule = rand(100, 300);
//         if((kiaule % 2) == 0){
//         console.log('Skaicius:', kiaule);
//         kiauliuRatai++;
//         }
//     } while (kiauliuRatai <= 1);
     
// } CIA BUVO MANO

for (let m = 0; m < 10; m++){

    let porinisRandomas;
    do {
        porinisRandomas = rand(100, 300);
    } while (porinisRandomas % 2);
    console.log(porinisRandomas)
    
}

// porinis (sk % 2 == 0) ===> false
// neporinis (sk % 2 == 1) ===> true


console.log('------------------------------');