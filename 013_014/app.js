'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
//arrow funkcija
const mas = (c) => {
    const m = [];
    for (let i=0; i < c; i++){
        m.push(rand(0, 7));
    }
    return m;
}

console.log(mas(2));




console.log('---------1--------');
//parašyti funkciją, kuri grąžintų 
//atsitiktines raides A, B, C, D arba Z DONE!

const raidesFun = () => {

    let raide = rand(0, 4);
    switch(raide){
        case 0:
            return 'A';
        case 1:
            return 'B';
        case 2: 
            return 'C';
        case 3:
            return 'D';
        case 4:
            return 'Z';
    }
}

console.log(raidesFun())

//jeigu arrow function viskas telpa i viena eilute, galima praleisti
//block'o skliaustelius ir viskas bus grazinama be zodzio
//return
const abcdz = () => 'abcdz'[rand(0, 4)];

console.log(abcdz());

console.log('---------2--------');
//Parašyti funkcija kuri sugeneruotų liniją iš 
//atsitiktinių skirtingu simbolių a b c d z, o linijos ilgis 
//į tą funkciją paduodama argumento reikšmė DONE!

const linija = (ilgis) => {
    let stringas = '';
    for (let i = 0; i < ilgis; i++){
        stringas += abcdz();
    }
    return stringas;
}

console.log(linija(10));
console.log('---------3--------');
//parašyti funkciją, kuri grąžintų 
//atsitiktines raides A - Z DONE!

const alphabet = () => 'abcdefghijklmnopqrstuvwxyz'[rand(0, 25)];

console.log(alphabet());

const aPlus = () => 'ąčęėįšųū'[rand(0, 7)];

console.log(aPlus());

console.log('---------4--------');
//reikia funkcijos, kurios pirmas parametras stringo ilgis, 
//antras parametras funkcija tiekianti tam tikro tipo 
//random simbolius DONE!


//callback'as
const fancyLine = (length, type) => {
    let symbString = '';
    for (let i = 0; i < length; i++){
        symbString += type();
    }
    return symbString;
}

console.log(fancyLine(5, aPlus));
console.log('---------5--------');
//Reikia parašyti 4 funkcijas, kurios turėtų du 
//parametrus - skaičius ir kiekviena funkcija 
//atliktų aritmetinį veiksmą /*-+ DONE!

const sum = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const division = (num1, num2) => num1 / num2;
const multiplication = (num1, num2) => num1 * num2;

console.log('Suma 5 ir 2', sum(5, 2));
console.log('Atimtis 5 ir 2', subtract(5, 2));
console.log('Dalyba 5 ir 2', division(5, 2));
console.log('Daugyba 5 ir 2', multiplication(5, 2));

console.log('---------6--------');
//Reikia parašyti funkciją su trim parametrais. 
//Pirmi du skaičiai, trečias funkcija kuri atlieką 
//veiksmą. Rezultatą grąžinti DONE!

//Iškviesti kalkuliatorių, kad suskaičiuotų dalyba 
//su liekana (%) funkciją sukuriant tiesiai argumento 
//vietoje DONE!

const calculator = (num1, num2, type) => type(num1, num2);

console.log(calculator(4, 2, (num1, num2) => num1 % num2));

console.log('---------7--------');

//setInterval

// const print = () => {
//     console.log(aPlus());
// }

// setInterval(() => {
//     console.log(alphabet())
// }, 2500);

console.log('---------8--------');

const girls = ['Lina', 'Birutė', 'Justė', 'Brigita', 'Deimantė']; 
//Atspausdinti mergaičių vardus DONE!

for(let i = 0; i < girls.length; i++){
    console.log(girls[i]);
}
console.log('---su forEach---');

girls.forEach(element => console.log(element));

console.log('---------9--------');

//padaryti masyvą iš 10 elementų kurių reikšmės 
//rand 0 - 11 DONE!

//kai reikia padaryti NAUJA masyva - naudojam 'for',
//o kai kazka padaryti su jau turimu masyvu - 'forEach'

const randArr = [];

for (let i = 0; i < 10; i++){
    randArr.push(rand(0, 11));
}

console.log(randArr);

console.log('---------10--------');

// Suskaičiuokite to masyvo reikšmių sumą DONE!
let randArrSum = 0;

randArr.forEach(element => randArrSum += element);
console.log('Suma', randArrSum);

console.log('---------11--------');
//Rasti masyve mažiausią reikšmę DONE!
let min = 11;

// randArr.forEach(element => {
//     if(element <= min){
//     min = element;
//     }
// })

// console.log(min);
console.log('---------12--------');
//pirmas vieta bus elementas
//antra vieta visada bus elemento vieta
//trecia vieta visada bus visas masyvas

let minPlace = 0;
randArr.forEach((element, i) => {
    if(element < min){
    min = element;
    minPlace = i;
    }
})

console.log(min, minPlace);
console.log('---------13--------');
// masyve surasti kelintoj vietoj yra 5 DONE!

let _5Place = -1;

// randArr.forEach((element, i) => {
//     if(element === 5){
//     _5Place = i;
//     }
// })

randArr.forEach((element, place) => _5Place = element == 5 ? _5Place = place : _5Place = _5Place)

console.log(_5Place);

console.log('---------14--------');
//sort
//gali turėti callback'ą gali ir neturėti, nes yra defaultas
randArr.sort();
console.table(randArr);

//sortinu nuo mažiausio iki didžiausio

//callbackas turi du parametrus -
// .sort()
//nuo maziausio iki didziausio:
randArr.sort((a, b) => b-a);
console.log(randArr);

//nuo didziausio iki maziausio:
randArr.sort((a, b) => a-b);
console.log(randArr);

//rusiuojam stringus nuo A - Z;
girls.sort((a, b) => {
    if(a > b) {
        return 1;
    }
    if (a < b){
        return -1;
    }
    return 0;
})
console.table(girls);

//rusiuojam stringus nuo Z - A;
girls.sort((a, b) => {
    if(a > b) {
        return -1;
    }
    if (a < b){
        return 1;
    }
    return 0;
})
console.table(girls);

////////////////////
//uzduotis//////////
////////////////////

//Naujas masyvas pagal masyvą gilrls kuriame būtų 
//elementai masyvai [vardas, svoris(rand 45, 95), 
//moka šokti(rand true, false); DONE!

const mergaiciuSarasas = [];


for (let i = 0; i < girls.length; i++){
    const vienaMergaite = [];
    vienaMergaite.push(girls[i]);
    vienaMergaite.push(rand(45, 95));
    vienaMergaite.push(rand(0, 1) ? 'Soka' : 'Nesoka');
    mergaiciuSarasas.push(vienaMergaite);
}

console.table(mergaiciuSarasas);

console.log('---------15--------');

//išrūšiuoti pagal mergaičių svorį. Pradžioje dedant 
//apkūniausias mergaites. DONE!

mergaiciuSarasas.sort((a, b) => b[1]-a[1]);
console.table(mergaiciuSarasas);

console.log('---------16--------');

//išrūšiuoti pagal mergaičių vardus. Pradžioje dedant
//z vardus.

mergaiciuSarasas.sort((a, b) =>{
    if(a > b) {
        return -1;
    }
    if (a < b){
        return 1;
    }
    return 0;
});
console.table(mergaiciuSarasas);

console.log('---------17--------');

//Išrūšiuoti. Pirma eina šokančios išrikiuotos 
//pagal svorį nuo mažiausio svorio, tada eina 
//nešokančios nuo mažiausio svorio DONE!

mergaiciuSarasas.sort((a, b) =>{
    if(a[2] > b[2]) {
        return -1;
    }
    if (a[2] < b[2]){
        return 1;
    }
    return 0;
});
console.table(mergaiciuSarasas);