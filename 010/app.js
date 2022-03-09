'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log('---------1--------');
// Reikia padaryti masyvą iš 10 elementų 
// 9 elementai == '' o viename elemente yra katinukas. 
// Katinuko vieta masyve turi būti random DONE!

// const masyvas1 = [];
// masyvas1.length = 10;
// masyvas1[rand(1,9)] = 'Katinukas';

// console.log(masyvas1);

const masyvas1 = [];
for(let i = 0; i < 10; i++){
    masyvas1.push('');
}

masyvas1[rand(0,9)] = 'Katinukas';
console.log(masyvas1);

console.log('---------2--------');
// katinuko masyve surasti kuriame indekse 
// gyvena katinukas DONE!

for(let i = 0; i < masyvas1.length; i++){
    if (masyvas1[i] == 'Katinukas'){
        console.log('Kis kis buvo', i);
        break;
    }
}

console.log('---------3--------');
// Raikia sukurti masyvą iš 10 elementų. 
// Poriniai elementai 0, 2, 4, 6, 8 yra atsitiktiniai 
// skaičiai nuo 6 iki 26. Kiti likę elementai yra 
// 'Katinukas' DONE!
const masyvas2 = [];

for(let i = 0; i < 10; i++){
    if(i % 2){
        masyvas2.push('Katinukas');
    } else {
        masyvas2.push(rand(6, 26));
    }
}

console.log(masyvas2);

console.log('---------4--------');

//is praeitos dienos
let AB;
let A;
let B;
do {

    AB = []

for(let i = 0; i < 33; i++){
    AB.push(rand(0,1) ? 'A' : 'B')
}

let A = 0;
let B = 0;

for(let i = 0; i < AB.length; i++){
   AB[i] == 'A' ? A++ : B++;
}
} while(B / A < 2);

console.log(AB);

console.log('---------5--------');
// Suskaičiuoti masyvo rand skaičių sumą DONE!

const masyvas3 = [];
let sumyte = 0;
for (let i = 0; i < 5; i++){
    let randomas = rand(6, 26);
    masyvas3.push(randomas);
    masyvas3.push('Katinukas');
    
    
    sumyte += randomas;
}

console.log(masyvas3);
console.log(sumyte);

let sumaRand = 0;
for(let i = 0; i < 5; i++){
    masyvas3.shift();
    sumaRand += masyvas3.shift();
}
console.log()
console.log('---------6--------');

console.log('---------7--------');

console.log('---------8--------');

console.log('---------9--------');

console.log('---------10--------');