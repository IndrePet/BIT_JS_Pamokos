'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

//////////////////////
//PIRMAS//////////////
//su for ciklu atspausdinti skaičius 1 2 3 4 5 DONE!
//////////////////////
console.log('------PIRMAS------------------');

let skaicius = 1;

for(let i = 1; i < 6; i++){
    console.log(i);
}

console.log('------------------------------');
//////////////////////
//ANTRAS//////////////
//////////////////////
//su for ciklu atspausdinti raides A B C D E F DONE!
console.log('-------ANTRAS-----------------');

let abecele = 'ABCDEF';

for(let i=0; i < abecele.length; i++){
    console.log(abecele[i]);
}

console.log('------------------------------');
//////////////////////
//TRECIAS/////////////
//////////////////////
//Padaryti stringą iš skaičių "123456789101112131415" naudojant for ciklą DONE!
console.log('-----TRECIAS------------------');

let prideti = '';

for(let i = 1; i < 16; i++) {
    prideti += i +' ';
}

console.log(prideti);

///arba 

let suma1 = 0; // taip as deklaruoju, kad cia numeris;
let suma2 = ''; //taip as deklaruoju, kad cia stringas;

for(let i = 1; i < 16; i++) {
    suma1 += i;
    suma2 += i;
}

console.log('suma1', suma1, 'suma2', suma2);

console.log('------------------------------');
//////////////////////
//KETVIRTAS///////////
//////////////////////
// su for ciklu atspausdinti skaičius 10 20 30 40 50 DONE!
console.log('---KETVIRTAS------------------');

let skaiciuDesimtys = '';

for(let i = 1; i < 6; i++){
    skaiciuDesimtys += i * 10;
}

console.log(skaiciuDesimtys);

/////arba

for(let i = 10; i <= 50; i = i + 10) {
    console.log(i);
}

////arba

for(let i = 10; i <= 50; i++){
    if(i % 10 == 0) {
        console.log(i);
    }
}

console.log('------------------------------');
//////////////////////
//PENKTAS/////////////
//////////////////////
//Nupaišyti stringą iš 400 "*" DONE!
console.log('------PENKTAS-----------------');

let zvaigzdes = '';

for(let i = 0; i < 400; i++) {
    zvaigzdes += '*';
}

console.log(zvaigzdes);

console.log('------------------------------');
//////////////////////
//SESTAS//////////////
//////////////////////
//Padaryti stringą iš skaičių '151413121110987654321' naudojant ciklą for DONE!
console.log('-------SESTAS-----------------');
let skaiciukai = '';

for(let i = 15; i > 0; i--) {
    skaiciukai += i;
}
console.log(skaiciukai);

//arba
let skaiciukai2 = '';

for(let i = 1; i < 16; i++) {
    skaiciukai2 = i + skaiciukai2;
}
console.log(skaiciukai2);


console.log('------------------------------');
//////////////////////
//SEPTINTAS///////////
//////////////////////
//cikle for 10 kartų mesti kauliuką. Suskaičiuoti kiek 3 iškrito DONE!
console.log('----SEPTINTAS-----------------');

let kauliukas = rand(1, 6);
let iskrite3 = 0;

for(let i = 0; i < 10; i++){
    let kauliukas = rand(1, 6);
    if(kauliukas == 3) {
        iskrite3++;
    }
    console.log(kauliukas);
}
console.log('iskrito trejetu', iskrite3);

console.log('------------------------------');
//////////////////////
//ASTUNTAS////////////
//////////////////////
//cikle for mesti du kauliukus ir suskaičiuoti kiek buvo sumų lygių 7 arba 6 DONE!
console.log('---------ASTUNTAS-------------');

let septyniuSuma = 0;

for(let i = 0; i < 10; i++){
    let kauliukas1 = rand(1, 6);
    let kauliukas2 = rand(1, 6);
    if(kauliukas1 + kauliukas2 == 6 || kauliukas1 + kauliukas2 == 7){
        septyniuSuma += 1;
        console.log('cia');
    }
    console.log('pirmas', kauliukas1, 'antras', kauliukas2);
}
console.log('is viso:', septyniuSuma);

console.log('------------------------------');
//////////////////////
//DEVINTAS////////////
//////////////////////
//cikle 10 kartų sugeneruoti atsitiktinius skaičius nuo 1 iki 100, juos atspausdinti ir ciklui užsibaigus atspausdinti didžizusią skaičių. DONE!
console.log('------DEVINTAS----------------');

let max = 1;

for(let i = 0; i < 10; i++){
    let atsitiktinisSk = rand(1, 100);
    console.log(atsitiktinisSk);
    if(atsitiktinisSk > max){
        max = atsitiktinisSk;
    }
}
console.log('Max:', max);




console.log('------------------------------');
//////////////////////
//DESIMTAS////////////
//////////////////////
//cikle 10 kartų sugeneruoti atsitiktinius skaičius nuo 1 iki 10, juos atspausdinti ir ciklui užsibaigus atspausdinti didžiausią skaičių ir kiek tokių didžiausių skaičių buvo DONE!
console.log('-------DESIMTAS---------------');
let didz = 1;
let didzSum = 0;

for (let i = 0; i < 10; i++){
    let rnd = rand(1, 10);
    console.log(rnd);

    if (rnd == didz){
        didzSum++;
    } else if (rnd >= didz) {
        didzSum = 1;
        didz = rnd;
    }
}
console.log('Didziausias: ', didz, 'ju suma: ', didzSum);


console.log('------------------------------');
//////////////////////
//
//////////////////////
console.log('------------------------------');

let zodis = 'Besikiskiakopusteliaudamiesi';
console.log(zodis);
let iSum = 0;

let pirmaI = -1;
let paskutineI = -1;

//012-3-kiskiakopusteliaudamiesi

for (let i = 0; i < zodis.length; i++){
    if (zodis[i] == 'i') {
        iSum++
    }

    if (zodis[i] == 'i'){
        paskutineI = i;
        if (pirmaI === -1) {
            pirmaI = i;
        }
    }
}

console.log('i raidziu yra:', iSum, 'pirma I:', pirmaI, 'paskutine I:', paskutineI, 'is viso', zodis.length);


console.log('------------------------------');
let maksimalus = 1;
let maksimalusVienodi = 0;

for (let i = 0; i < 10; i++){
    let randominis = rand(1, 10);
    console.log(randominis);

    if (randominis == maksimalus){
        maksimalusVienodi++;
    } else if (randominis > maksimalus) {
        maksimalus = randominis;
        maksimalusVienodi = 1;
    }

}

console.log(maksimalus, '- didziausias, tokiu buvo', maksimalusVienodi);