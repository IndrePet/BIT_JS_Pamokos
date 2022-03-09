// RECAP. NUMBERS

let pirmas;
let antras;

let suma;
let dideleSuma;

pirmas = 10;
antras = 20;

pirmas++;

suma = pirmas + antras;

dideleSuma = pirmas + antras + 100;

console.log(suma, dideleSuma);

// NAUJA TEMA. STRINGS

let raideA = 'A';
let raideB = 'B';
let trecias = 'ZZ';

// su strings negalima atlikti aritmetiniu veiksmu,
// nebent suklijuot

console.log(typeof trecias); // taip pasitikrinam kokio tipo kintamaji turim
console.log(typeof pirmas);

let operacija; //vienintele imanoma operacija su string

operacija = raideA + raideB;

console.log(operacija);
/////////////////////
// PIRMAS UZDAVINYS//
////////////////////

let cat1 = '=';
let cat2 = '_';
let cat3 = '^';

// su nauju kintamuoju
let fullCat = cat1 + cat3 + cat2 + cat3 + cat1;

console.log(fullCat);

// be naujo kintamojo
console.log(cat1 + cat3 + cat2 + cat3 + cat1);

let cat4 = '(';
let cat5 = ')';
let cat6 = '"';
let cat8 = '/';
let cat9 = '\\';

let virsus = cat8 + cat9 + cat2 + cat2 + cat8 + cat9;
let vidurys = cat4 + cat1 + cat3 + cat2 + cat3 + cat1 + cat5;
let apacia = cat4 + cat6 + cat5 + " " + cat4 + cat6 + cat5;

console.log(virsus);
console.log(vidurys);
console.log(apacia);

// operacijos tarp skirtingu tipu kintamuju

let kintamasis1 = '5';
let kintamasis2 = 5;

// tam, kad atliktu sita veiksma, JS automatiskai antra kintamaji pavercia stringu
console.log(kintamasis1 + kintamasis2);

//////////////////
// 0 1 2 3////////
//////////////////

let namas = 'ABC';

console.log(namas[1], namas[0], namas[2]);


//////////////////
//ANTRA UZDUOTIS//
//////////////////

let catParts = '^_='

console.log(catParts[2] + catParts[0] + catParts[1] + catParts[0] + catParts[2]);

////////////////////////////////////
//BOOLEAN arba LOGINIAI KINTAMIEJI//
////////////////////////////////////

let T = true; // verčiant į numerį bus 1
let F = false; // verčiant į numerį bus 0

console.log(typeof T);
console.log(1 + T);
console.log(1 + F);

// loginiai kintamieji turi operacijas:
// OR ||
// AND &&
// NOT !

//OR logika:
console.log('T || T', T || T);
console.log('T || F', T || F);
console.log('F || T', F || T);
console.log('F || F', F || F);

//AND logika:
console.log('T && T', T && T);
console.log('T && F', T && F);
console.log('F && T', F && T);
console.log('F && F', F && F);

//NOT logika:
console.log('!T', !T);
console.log('!N', !F);

console.log('!asilas', !'asilas'); //asilą pavertė į TRUE ir tada jį paneigė
console.log('', !!''); //vienintelis false stringas yra tuščias stringas
console.log('0', !!'0');

console.log(0, !!0); //vienintelis skaičius, kuris yra false
console.log(505040, !!505040);

// visas kodas yra global scope, o šalutiniai keliai - block'ai.

//////////////////
//IF SĄLYGOS//////
//////////////////

let kodas;
//
//
//kliūtis apipavidalinama if'ais, block'as - garbanotuose skliaustuose

if(0) { //skliausteliuose gali būti tik true arba false
    //block1
    kodas = 'per BLOCK 1';
}
else {
    //block2
    kodas = 'per BLOCK 2';
}

console.log(kodas);


///////////////////
//TRECIA UZDUOTIS//
///////////////////

function randomDiena(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

if(randomDiena(0, 1) === 0) {
    console.log("Buvo košmariška diena");
} else {
    console.log("Buvo gera diena");
}
  

/////////////////////
//KETVIRTA UZDUOTIS//
/////////////////////

function randSkaicius(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let skaicius = randSkaicius(5, 15);

console.log("Kažkoks skaičius nuo 5 iki 15: " + skaicius);

let didintMazint = randSkaicius(0,1);

if (didintMazint) {
    skaicius++;
} else {
    skaicius--;
}

console.log("Dabar random padidintas arba pamažintas: " + skaicius);

///////////////////////
//KINTAMOJO MATOMUMAS//
///////////////////////

let pagrindiniame = 'Labas';
let salutiniame;

if(1) {
    salutiniame = 'Afrika';
    console.log(pagrindiniame + ' ' + salutiniame);
} else {
    salutiniame = 'Amerika';
    console.log(pagrindiniame + ' ' + salutiniame);
}

console.log(pagrindiniame + ' ' + salutiniame); // nesimatys, nes nėra sukurtas global scope'e

//////////////////
//TRYS LINIJOS////
//////////////////

if (0) {
    console.log('green');
} else if(0) {
    console.log('blue');
} else {
    console.log('red');
}