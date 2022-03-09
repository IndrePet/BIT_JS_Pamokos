'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log('---Masyvai basic---');
console.log('---1---');
//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), 
//kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

const pirmasMasyvas = [];

for (let i = 0; i < 30; i++){
    pirmasMasyvas.push(rand(5, 25));
}
console.log(pirmasMasyvas);

console.log('---2---');
// Naudodamiesi 1 uždavinio masyvu:
// 1) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
// 2) Raskite didžiausią masyvo reikšmę ir jos indeksą;
// 3) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// 4) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
// 5) Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
// 6) Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių,
// o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
// 7) Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// 8) Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
let didesniuSuma = 0;
let poriniuSuma = 0;
let didziausiaReiksme = 0;
let maxIndex;
const antrasMasyvas = [];

for (let i = 0; i < pirmasMasyvas.length; i++){
    if (pirmasMasyvas[i] > 10){
        didesniuSuma++;
    }

    if (pirmasMasyvas[i] >= didziausiaReiksme){
        didziausiaReiksme = pirmasMasyvas[i];
        maxIndex = i;
    }


    if (pirmasMasyvas[i] % 2 == 0){
        poriniuSuma += pirmasMasyvas[i];
    } 

    antrasMasyvas.push(pirmasMasyvas[i] - i);
   
}
//1
console.log('Didesniu uz 10 suma:', didesniuSuma);
//2
console.log('Didziausia reiksme:', didziausiaReiksme);
console.log('Didziausios reiksmes index:', maxIndex);
//3
console.log('Poriniu suma: ', poriniuSuma);
//4
console.log(antrasMasyvas);
//5 
for (let i = 0; i < 10; i++){
    pirmasMasyvas.push(rand(5, 25));
}
console.log(pirmasMasyvas);
//6 
const pirmoMPoriniai = [];
const pirmoMNeporiniai = [];

for(let i = 0; i < pirmasMasyvas.length; i++){
    pirmasMasyvas[i] % 2 ? pirmoMNeporiniai.push(pirmasMasyvas[i]) : pirmoMPoriniai.push(pirmasMasyvas[i]);
}
console.log('Poriniai: ', pirmoMPoriniai);
console.log('Neporiniai', pirmoMNeporiniai);
//7
const poriniaiBusNulis = [];

for (let i = 0; i < pirmasMasyvas.length; i++){
    poriniaiBusNulis.push(pirmasMasyvas[i]);
    if (pirmasMasyvas[i] % 2 == 0){
        poriniaiBusNulis[i] = 0;
    }
}
console.log(poriniaiBusNulis);

//8

let maziausiasIndex;

for(let i = 0; i < pirmasMasyvas.length; i++){
    if (pirmasMasyvas[i] > 10){
        maziausiasIndex = pirmasMasyvas[i];
        console.log(maziausiasIndex, 'nr', i);
        break;
    }
}
console.log('---3---');
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const masyvasABCD = [];
let raideA = 0;
let raideB = 0;
let raideC = 0;
let raideD = 0;

for (let i = 0; i < 200; i++){
    let abecele = rand(0, 3);
    if (abecele == 0){
        masyvasABCD.push('A');
        raideA++;
    } else if (abecele == 1){
        masyvasABCD.push('B');
        raideB++;
    } else if (abecele == 2){
        masyvasABCD.push('C');
        raideC++;
    } else {
        masyvasABCD.push('D');
        raideD++;
    }
}

console.log(masyvasABCD);
console.log(`Radziu A: ${raideA}
Radziu B: ${raideB}
Radziu C: ${raideC}
Radziu D: ${raideD}`);
console.log('---4---');
//Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, 
//sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) 
//reikšmių ir kiek unikalių kombinacijų gavote.
const masyvasTrys1 = [];
const masyvasTrys2 = [];
const masyvasTrys3 = [];


for (let i = 0; i < 200; i++){
    let abecele = rand(0, 3);
    if (abecele == 0){
        masyvasTrys1.push('A');
    } else if (abecele == 1){
        masyvasTrys1.push('B');
    } else if (abecele == 2){
        masyvasTrys1.push('C');
    } else {
        masyvasTrys1.push('D');
    }
}
for (let i = 0; i < 200; i++){
    let abecele = rand(0, 3);
    if (abecele == 0){
        masyvasTrys2.push('A');
    } else if (abecele == 1){
        masyvasTrys2.push('B');
    } else if (abecele == 2){
        masyvasTrys2.push('C');
    } else {
        masyvasTrys2.push('D');
    }
}
for (let i = 0; i < 200; i++){
    let abecele = rand(0, 3);
    if (abecele == 0){
        masyvasTrys3.push('A');
    } else if (abecele == 1){
        masyvasTrys3.push('B');
    } else if (abecele == 2){
        masyvasTrys3.push('C');
    } else {
        masyvasTrys3.push('D');
    }
}

const masyvasBendras = [];

for (let i = 0; i < 200; i++){
    masyvasBendras.push(masyvasTrys1[i] + masyvasTrys2[i] + masyvasTrys3[i]);
}
console.log('Masyvas Bendras', masyvasBendras);

let unikaliosReiksmes = 0;



for (let i = 0; i < masyvasBendras.length; i++){
    if (masyvasTrys1[i] != masyvasTrys2[i] && masyvasTrys2[i] != masyvasTrys3[i] && masyvasTrys1[i] != masyvasTrys3[i]){
        unikaliosReiksmes++;
    }
    
}
let unikaliosKombinacijos = false;
const kombinacijos = [];



// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
// unikaliosKombinacijos = masyvasBendras.filter(onlyUnique);


console.log('Unikalios reiksmes:', unikaliosReiksmes);
console.log('Unikalios kombinacijos:', unikaliosKombinacijos);

///////////////////////////////////////////////////////////////////////////////////////
//ANTRAS LAPAS/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
console.log('---Kitas lapas--');
console.log('---1---');
//Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o 
//reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);

const pinigine = [];

for(let i = 0; i < rand(10, 30); i++){
    pinigine.push(rand(0, 10));
}
console.log('Piniginėje yra:', pinigine);

console.log('---2---');

let piniguSuma = 0;

for(let i = 0; i < pinigine.length; i++){
    piniguSuma += pinigine[i];
}

console.log('Pinigu suma:', piniguSuma);

console.log('---3---');

let popieriniaiPinigai = 0;

for (let i = 0; i < pinigine.length; i++){
    if (pinigine[i] > 2){
        popieriniaiPinigai += pinigine[i];
    }
}

console.log('Popieriniu pinigu suma:', popieriniaiPinigai);

console.log('---4---');

// for (let i = 0; i < pinigine.length; i++){
//     if (pinigine[i] <= 2){
//         pinigine[i] = 0;
//     }
// }
// console.log('Isleisti metaliniai', pinigine);

console.log('---5---');

let didziausiasPinigas = 0;
let didziausiuSuma = 0;

for (let i = 0; i < pinigine.length; i++){
    if(pinigine[i] > didziausiasPinigas){
        didziausiasPinigas = pinigine[i];
        didziausiuSuma = 1;
    } else if (pinigine[i] == didziausiasPinigas){
        didziausiuSuma++;
    }
}
console.log('Didziausias pinigas: ', didziausiasPinigas, 'kiek ju buvo:', didziausiuSuma);

console.log('---6---');

for(let i = 0; i < pinigine.length; i++){
    if(pinigine[i] == 0){
        pinigine[i] = i;
    }
}

console.log(pinigine);

console.log('---7---');

const didesnePinigine = [];

for(let i = 0; i < pinigine.length; i++){
    didesnePinigine.push(pinigine[i]);
}

for (let i = 0; didesnePinigine.length < 30; i++){
    didesnePinigine.push(rand(0, 10));
}

console.log(didesnePinigine);

console.log('---8---');

const monetuPinigine = [];
const banknotuPinigine = [];

for (let i = 0; i < pinigine.length; i++){
    if (pinigine[i] <= 2){
        monetuPinigine.push(pinigine[i]);
    } else {
        banknotuPinigine.push(pinigine[i]);
    }
}

console.log('monetos:', monetuPinigine, ', banknotai: ', banknotuPinigine);

console.log('---9---');

const naujaPinigine = [monetuPinigine, banknotuPinigine];

console.log(naujaPinigine);

console.log('---10---');

const korteles = ['KIKA', 'Euro Vaistine', 'Drogas', 'Aciu', 'Lietuvos gelezinkeliai', 'Mano RIMI'];
naujaPinigine.push(korteles);

console.log('---11---');
