'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//////////////////////
//CIKLAI//////////////
//////////////////////
console.log('------------------------------');

let start = 5;

// i - nuo žodžio iterate;

for(let i = 0; i < start; i++){
    console.log('Rate Nr.', i);
}

console.log('Pabaiga');

console.log('------------------------------');
//////////////////////
//PIRMA UZDUOTIS//////
//////////////////////
console.log('--------PIRMA-----------------');


for(let i = 0; i < 22; i++){
    console.log('Hello');
}

console.log('------------------------------');
//////////////////////
//ANTRA///////////////
//////////////////////
console.log('---------ANTRA----------------');


for(let i = 0; i < 22; i++){
    let  skaicius = rand(1, 5);
    console.log(i, 'Skaicius', skaicius);
}

console.log('------------------------------');
//////////////////////
//TRECIA//////////////
//////////////////////
console.log('---------TRECIA---------------');

for(let i = 0; i < 14; i++){
    console.log('Hello AFRIKONS');
}

console.log('------------------------------');
//////////////////////
//KETVIRTA////////////
//////////////////////
console.log('------KETVIRTA----------------');

for(let i = 1; i < 15; i++){
    console.log('%cHello afrika', 'color: red;', i);
}


console.log('------------------------------');
//////////////////////
//PENKTA//////////////
//////////////////////
console.log('-------PENKTA-----------------');

let cat = "Murklys";
let stringoIlgis = cat.length;

console.log(cat[0], cat[2], stringoIlgis);

let cat2 = "Batuotas katinas";
console.log(cat2[rand(0, cat2.length - 1)]);

console.log('------------------------------');
//////////////////////
//SESTA///////////////
//////////////////////
console.log('------------------------------');

for(let i = 0; i < cat2.length; i++){
    console.log(cat2[i]);
}


let aSuma = 0;
for(let i = 0; i < cat2.length; i++){
    
    if(cat2[i] == 'a'){
        aSuma++
    }
}

console.log('A raidžių:', aSuma);

console.log('------------------------------');
//////////////////////
//
//////////////////////
console.log('------------------------------');
let vietuSuma = 0;
for(let i = 0; i < cat2.length; i++){
    
    if(cat2[i] == 't'){
        console.log('t', i);
    }
}

console.log('------------------------------');
//////////////////////
//
//////////////////////
console.log('------------------------------');
for(let i = 0; i < cat2.length; i++){
    
    if(cat2[i] == 't'){
        vietuSuma++;
    }
}
console.log(vietuSuma);

console.log('------------------------------');

/////Surasti pirmą ir paskutinę "a" raidės vietą DONE!
let pirmaVieta = -1;
let paskutineVieta = -1;

for(let i = 0; i < cat2.length; i++){
    
    if(cat2[i] == 'a'){
        paskutineVieta = i;
        if(pirmaVieta === -1){
            pirmaVieta = i;
        }
    }
}
console.log(pirmaVieta, paskutineVieta);

//// KITA VERSIJA
let pirmaA = -1;
let paskutineA = -1;
let pirmasABuvo = false; //pirmos a buvimo flag

for(let i = 0; i < cat2.length; i++){
    if(cat2[i] == 'a') {
        paskutineA = i;
        if(pirmasABuvo == false) {
            pirmasABuvo = true;
            pirmaA = i;
        }
    }
}

console.log(pirmaA, paskutineA);
console.log('------------------------------');

let didz = 0;

let didzSum = 1;


for (let i=0; i<10; i++) {
    let rnd = rand(1, 10);
    console.log (rnd);
    if (rnd == didz) {
        didzSum++;
    } else if (rnd > didz) {
        didzSum = 1;
        didz = rnd;

}

}



console.log ('Didziausias skiaicus: ', didz, ' Vienodu yra: ', didzSum);

console.log('------PATI--------');
let pavyzdys = 'Bananas';
let pirmoji = false;
let paskutinioji;

for (let i = 0; i < pavyzdys.length; i++){

    if (pavyzdys[i] == 'a'){
        if (pirmoji == true){
            paskutinioji = i;
        } else {
            pirmoji = i;
        }
    }
}

console.log(pirmoji, paskutinioji);