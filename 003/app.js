'use strict';

/////////////
//RECAP//////
/////////////
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
  
//kintamieji

let skaicius = 5;
let stringas = 'Bla bla bla';
let loginis = true;

console.log(typeof skaicius, typeof stringas, typeof loginis);

//veiksmai su kintamaisiais

console.log('SKAICIUS. aritmetika skaicius plius skaicius', skaicius + skaicius);
console.log('STRINGAS. sujungimas/suklijavimas', stringas + ' ' + stringas);
console.log('LOGINIS. loginiai veiksmai', loginis || loginis);

// jei kintamuju tipai skirtingi, JS'as automatiskai pervers i viena kazkuri tipa

/////////// if block'ai

if(0) {
    console.log('viena gatve');
} else {
    console.log('kita gatve');
}

//////////////////////////
//PALYGINIMO OPERATORIAI//
//////////////////////////
console.log('------------------------------')
console.log('3 == 4', 3 == 4);
console.log('3 == 3', 3 == 3);
console.log('\'3\' == 3', '3' == 3);
console.log('\'3\' === 3', '3' === 3);
console.log('------------------------------')
console.log('3 > 4', 3 > 4);
console.log('4 > 3', 4 > 3);
console.log('4 > 4', 4 > 4);
console.log('------------------------------')
console.log('3 < 4', 3 < 4);
console.log('4 < 3', 4 < 3);
console.log('4 < 4', 4 < 4);
console.log('------------------------------')
console.log('3 >= 4', 3 >= 4);
console.log('4 >= 3', 4 >= 3);
console.log('4 >= 4', 4 >= 4);
console.log('------------------------------')
console.log('3 != 4', 3 != 4);
console.log('3 != 3', 3 != 3);

console.log('A != a', 'A' != 'a');
console.log('------------------------------')


if(13 > 5) {
    console.log('Jo, tiesukė')
} else {
    console.log('Nu blyn, ne, žinok...')
}

////////////////////
//PIRMAS UZDAVINYS//
////////////////////
console.log('-------PIRMAS UZDAVINYS-------')

let pazymys = rand(1, 10);
console.log('Tavo egzamino pažymys:', pazymys);

if(pazymys >= 4) {
    console.log('SVEIKINAM. Išlaikyta.');
} else {
    console.log('Deja, deja... Bandyk kitą kartą...');
}

console.log('------------------------------')
////////////////////
//ANTRAS UZDAVINYS//
////////////////////
console.log('-------ANTRAS UZDAVINYS-------')

let autoGreitis = rand(30, 120);

console.log('Leistinas greitis: 90 km/h');
console.log('Užfiksuotas automobilio greitis:', autoGreitis);

if(autoGreitis <= 90) {
    console.log('Automobilis važiuoja leistinu greičiu');
} else {
    let bauda = (autoGreitis - 90) * 5;
    console.log(`Viršijai leistiną greitį, 
    gausi ${bauda} eur baudą!`);
}


console.log('------------------------------')
/////////////////////
//TRECIAS UZDAVINYS//
/////////////////////
console.log('--------TRECIAS UZDAVINYS-----')

let skaiciusVienas = rand(1, 3);
let skaiciusDu = rand(1, 3);

let sandauga = skaiciusVienas * skaiciusDu
let suma = skaiciusVienas + skaiciusDu

console.log(`Mūsų skaičiai yra ${skaiciusVienas} ir ${skaiciusDu}`)

if (sandauga > suma) {
    console.log(`Jų sandauga didesnė nei suma`);
} else if(sandauga < suma) {
    console.log(`Jų suma didesnė nei sandauga`);
} else {
    console.log(`Sandauga lygi sumai`);
}

console.log('------------------------------')
///////////////////////
//KETVIRTA UZDUOTIS////
///////////////////////
console.log('-------KETVIRTA UZDUOTIS------')

let petras = rand(0, 3);
let jonas = rand(0, 3);

if(petras > jonas) {
    console.log(`Petras gavo ${petras}, o Jonas ${jonas}, Petras laimėjo!`);
} else if(jonas > petras) {
    console.log(`Petras gavo ${petras}, o Jonas ${jonas}, Jonas laimėjo!`);
} else {
    console.log(`Petras gavo ${petras}, o Jonas ${jonas}. Lygiosios!`);
}

console.log('------------------------------')
///////////////////////
//PENKTAS UZDAVINYS////
///////////////////////
console.log('-------PENKTA UZDUOTIS--------')

let eksperimentas = rand(1, 4);

console.log(`Ekperimento rezultatas: ${eksperimentas}`);

if(eksperimentas === 1 || eksperimentas === 4) {
    console.log(`Eksperimentas pavyko!`)
} else {
    console.log(`Eksperimentas nepavyko`)
}

console.log('------------------------------')
///////////////////////
//SESTA UZDUOTIS///////
///////////////////////
console.log('-----SESTA UZDUOTIS-----------')

let kauliukasVienas = rand(1, 6);
let kauliukasDu = rand(1, 6);
console.log(`Pirmas kauliukas išridena ${kauliukasVienas}, o antras ${kauliukasDu}`);

let kauliukuSuma = kauliukasDu + kauliukasVienas

if (kauliukuSuma > 5 && kauliukasVienas === kauliukasDu) {
    console.log(`Kauliukai vienodi ir jų suma yra ${kauliukuSuma}, vadinasi laimėjai TU!`);
} else {
    console.log(`Deja, laimi kazino.`);
}

console.log('------------------------------')
/////////////////////
//SEPTINTA UZDUOTIS//
////////////////////
console.log('-------SEPTINTA UZDUOTIS------')

let teatroVietos = rand(1, 200);
console.log(`Tavo vieta yra: ${teatroVietos}`);

if(teatroVietos % 2 === 0 && teatroVietos <= 100) {
    console.log(`Eisi pro apatines dešines duris`);
} else if(teatroVietos % 2 === 0 && teatroVietos > 100){
    console.log(`Eisi pro apatines kaires duris`);
} else if (teatroVietos % 2 > 0 && teatroVietos <= 100) {
    console.log(`Eisi pro viršutines dešines duris`);
} else {
    console.log(`Eisi pro viršutines kaires duris`);
}

console.log('------------------------------')
//////////////////
//
//////////////////
console.log('------------------------------')

if(teatroVietos % 2){
    // neporinis i kaire
    if(teatroVietos <= 100){
        console.log(`Kaire i apacia`);
    }
    else {
        console.log(`Kaire i virsu`);
    }

} else {
    //porinis i desine
    if(teatroVietos <= 100){
        console.log(`Desine i apacia`);
    }
    else {
        console.log(`Desine i virsu`);
    }
}

console.log('------------------------------')

if(teatroVietos % 2 && teatroVietos <= 100){
    console.log(`Kaire apacia`);
} else if (teatroVietos % 2) {
    console.log(`Kaire virsus`);
} else if (!(teatroVietos % 2) && teatroVietos <= 100) {
    console.log(`Desine apacia`);
} else {
    console.log(`Desine virsus`);
}