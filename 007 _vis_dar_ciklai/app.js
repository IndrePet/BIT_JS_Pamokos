'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//////////////////////
//PIRMA///////////////
//////////////////////
//for ciklas 12 kartų, jo viduje matamas kauliukas ran 1 - 6 gautus random 
//skaičius spausdinkit ir paskaičiuokit ir atspausdinkit tų skaičių sumą. DONE!
console.log('-------PIRMAS-----------------');

let suma1 = 0;

for (let i = 0; i < 12; i++){
    let kauliukas1  = rand(1, 6);
    console.log(kauliukas1);
    suma1 += kauliukas1;
}
console.log('Jų suma:', suma1);

console.log('------------------------------');
//////////////////////
//ANTRAS//////////////
//////////////////////
//for ciklas 12 kartų, jo viduje matamas kauliukas ran 1 - 6 gautus random skaičius spausdinkit ir 
//paskaičiuokit ir atspausdinkit tų skaičių sumą. Jeigu suma nepasibaigus ciklui 
//viršina 35 (t.y. suma > 35), ciklo sukti daugiau nebereikia. DONE!
console.log('---------ANTRAS---------------');

let suma2 = 0;

for (let i = 0; i < 12; i++){
    let kauliukas2  = rand(1, 6);
    console.log(kauliukas2, i);
    suma2 += kauliukas2;
    if (suma2 > 35){
        break;
    }
}
console.log('Jų suma:', suma2);

for (let i = 0; i < 2; i++){

let reikiaNutraukti = true;

if (reikiaNutraukti == true) {
    break;
}
console.log('sukasi');
}

//Jeigu negalima viršyti 35, tai 
suma2 = 0;

for (let i = 0; i < 12; i++){
    let kauliukas2  = rand(1, 6);
    console.log(kauliukas2, i);
    if (suma2 + kauliukas2 > 35){ ///// čia esmė, kad reikia perkelti 35;
        break;
    }
    suma2 += kauliukas2;
   
}
console.log('Jų suma:', suma2);

console.log('------------------------------');
//////////////////////
//TRECIAS/////////////
//////////////////////
//tame pačiame uždavinyje paskaičiuoti 
//keliais ratais viršytas planas DONE!
console.log('------TRECIAS-----------------');

let suma3 = 0;
let ratuSuma = 0;

for (let i = 0; i < 17; i++){
    let kauliukas3  = rand(1, 6);
    console.log(kauliukas3 + ' ratas: ' + i);
    
    if (suma3 + kauliukas3 > 35){
        break;
    }
    suma3 += kauliukas3;
    ratuSuma++
}
console.log('Jų suma:', suma3, 'plana virsijome', 17 - ratuSuma);

console.log('------------------------------');
//////////////////////
//KETVIRTAS///////////
//////////////////////
//Sukti ciklą 12 kartų. mesti kauliuką,
// Spausdinti visas reikšmes ir skaičiuoti jų sumą išskyrus 3. DONE!
console.log('---------KETVIRTAS------------');

let suma4 = 0;
let ratuSuma4 = 0;
let ratuSumaSuViskuo = 0;

for (let i = 0; i < 12; i++){
    let kauliukas4  = rand(1, 6);
    ratuSumaSuViskuo++;
    if (kauliukas4 === 3){
        continue;
    }
    console.log(kauliukas4 + ' ratas: ' + i);
    suma4 += kauliukas4;
    ratuSuma4++
}
console.log('Jų suma:', suma4, ', ratu suma', ratuSuma4, 'ratu suma su viskuo', ratuSumaSuViskuo);

console.log('------------------------------');
//////////////////////
//PENKTAS/////////////
//////////////////////
//Nupaišyti liniją iš 10 + DONE!
console.log('------------------------------');

let pliusuStringas = '';

for (let i = 0; i < 10; i++) {
    pliusuStringas += '+';
}

console.log(pliusuStringas);

console.log('------------------------------');
//////////////////////
//CIKLAS CIKLE////////
//////////////////////
//
console.log('------------------------------');

for (let i = 0; i < 3; i++) {
    console.log('EINA DIDELIS RATAS Nr.', i + 1);
    for (let k = 0; k < 3; k++) {
        console.log('eina mažas ratas Nr.', k + 1);
    }
}

console.log('------------------------------');
//////////////////////
//SESTAS//////////////
//////////////////////
//Nupaišyti kvadratą iš 10 X 10 + DONE!
console.log('-----SESTAS-------------------');



for (let i = 0; i < 10; i++) {
    let pliusuKvadratas = '';
    for (let k = 0; k < 10; k++){
        pliusuKvadratas += '+';
    }
    console.log(pliusuKvadratas);
}


console.log('------------------------------');
//////////////////////
//SEPTINTAS///////////
//////////////////////
//Reikia surašyti visus paros 24val laikus kas 15 minučių DONE!
console.log('-------SEPTINTAS---------------');
console.log('----------formatuojam dviguba---------')
let a = 0;

console.log(a.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}));

console.log('----------formatuojam dviguba---------')

for (let i = 0; i < 24; i++) {
    let valanda = '';
    valanda += i;
    for (let k = 0; k < 5; k++){
        let minutes = '';
        minutes += k*15;
        console.log(('0' + valanda).slice(-2) + ':' + ('0' + minutes).slice(-2))
        if (minutes >= 45) {
            break;
        }
    }
}


console.log('------------------------------');
//////////////////////
//
//////////////////////
//
console.log('------------------------------');
for (let val = 0; val < 24; val++) {

    for (let min = 0; min < 60; min = min + 15) {

        let formatMin = min <= 9 ? '0' + min : min;
        let formatVal = val <= 9 ? '0' + val : val;

        console.log(formatVal + ':' + formatMin);
    }
}

console.log('------------------------------');
//////////////////////
//
//////////////////////
//
console.log('------------------------------');

let str3 = "racecar";
let str4 = "Java";
let str5 = 'sedekuzukedes'

function palindrome(word) {
    console.log('Is my word palindrome?')
    let test = '';
    for(let i = 0; i < word.length; i++){
      test = word[i] + test
    }
     if (test == word) {
      console.log('Yes');
    } else {
      console.log('Nor');
    }
  }
 
  palindrome(str3);
  palindrome(str4);
  palindrome(str5);

console.log('------------------------------');