'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log('---------1--------');
//Prie masyvo bitGirls pradžios (ne galo!) pridėkite Nausėdą 
//(po pridėjimo bitGirls turės 6 elementus).
bitGirls.unshift('Nausėda');
console.log(bitGirls);

console.log('---------2--------');
//Sukurkite naują masyvą bitCats iš masyvo cats taip kad naujasis masyvas turėtų 
//elementus iš mažų, dviejų narių, masyvų: pirmas narys katinuko vardas, antras - 
//katinuko svoris - atsitiktinės tekstinės reikšmės - “storas” arba“normalus”.

const bitCats = [];

for (let i = 0; i < cats.length; i++){
    const oneCat = [];
    oneCat.push(cats[i]);
    oneCat.push(rand(0, 1) ? 'Storas' : 'Normalus');
    bitCats.push(oneCat);
}

console.table(bitCats);

console.log('---------3--------');
//bitCats masyve suskaičiuokite kie yra storų ir normalių katinukų.

let fatCatSum = 0;
let averageCatSum = 0;

// for (let i = 0; i < bitCats.length; i++){
//     if(bitCats[i][1] == 'Storas'){
//         fatCatSum++;
//     } else {
//         averageCatSum++;
//     }
// }

bitCats.forEach((item) => {
    if(item[1] == 'Storas') {
        fatCatSum++;
    } else {
        averageCatSum++;
    }
})

console.log('Storų:', fatCatSum, 'Normalių:', averageCatSum);

console.log('---------4--------');
//Išrūšiuokite gautą bitsCats masyvą pagal antrą katinuko vardo raidę, 
//abėcėlės tvarka (ne pagal visą vardą, o tik pagal antrą raidę) Tokiu būdu katinukas
// vardu Rainius pagal antrą “a” raidę turėtų atsidurti viršuje.

bitCats.sort((a, b) => {
    if(a[0][1] > b[0][1]){
        return 1;
    }
    if (a[0][1] < b[0][1]){
        return -1;
    }
    return 0;
})

console.table(bitCats);

console.log('---------5--------');
//(BOSO lygis) Iš masyvų bitGirls ir bitCats padarykite masyvą happyCats, 
//kurio elementai būtų masyvai iš mergaitės vardo ir katinuko vardo. Nausėdai katinuko 
//neduokit (nes neužteks) ir Nausėdai vietoj katinuko priskirkite stringą “Barsukas”.

const happyCats = [];

for (let i = 0; i < bitGirls.length; i++){
    const onePair = [];
    onePair.push(bitGirls[i]);
    onePair.push(bitGirls[i] == 'Nausėda' ? 'Barsukas' : cats[i-1]);
    happyCats.push(onePair);
}

console.table(happyCats);