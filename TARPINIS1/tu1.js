function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

///////////////////
//Pirma uzduotis///
///////////////////
console.log('-----PIRMA--------------------');

let firstDice = rand(1, 6);
let secondDice = rand(1, 6);

if(firstDice + secondDice > 8){
    console.log(`First dice: ${firstDice}, second dice: ${secondDice}, sum: ${firstDice + secondDice}.
    YOU WON!`);
} else {
    console.log(`First dice: ${firstDice}, second dice: ${secondDice}, sum: ${firstDice + secondDice}.
    Sorry... Try again...`);
}

console.log('------------------------------');
///////////////////
//Antra uzduotis///
///////////////////
console.log('-----ANTRA--------------------');

let pilkis = rand(3, 6);
let murklys = rand(3, 6);

if(pilkis == murklys) {
    console.log(`Pilkis sveria ${pilkis} kg, o Murklys ${murklys} kg.
    Katinukų svoriai vienodi!`);
} else {
    if(pilkis > murklys) {
        console.log(`Pilkis sveria ${pilkis} kg, o Murklys ${murklys} kg.
    Pilkis sveria daugiau!`);
    } else {
        console.log(`Pilkis sveria ${pilkis} kg, o Murklys ${murklys} kg.
    Murklys sveria daugiau!`);
    }
}

console.log('------------------------------');
////////////////////
//Trecia uzduotis///
////////////////////
console.log('-------TRECIA-----------------');

let katinukai = rand(0, 30);
let karves = rand(0, 30);

if(katinukai > 15 || karves > 15) {
    console.log(`Atėjo ${katinukai} katinukų ir ${karves} karvių.
    NETELPA.`);
} else {
    console.log(`Atėjo ${katinukai} katinukų ir ${karves} karvių.
    TELPA. Plaukiam.`);
}

console.log('------------------------------');
//////////////////////
//Ketvirta uzduotis///
//////////////////////
console.log('-------KETVIRTA---------------');

let kaPirkti = rand(1, 6);

if(kaPirkti === 1 || kaPirkti === 5){
    console.log(`Antanas išrideno ${kaPirkti}, vadinasi pirks TELEVIZORIŲ`);
} else if (kaPirkti === 3 || kaPirkti === 4) {
    console.log(`Antanas išrideno ${kaPirkti}, vadinasi pirks SKALBIMO MAŠINĄ`);
} else {
    console.log(`Antanas išrideno ${kaPirkti}, vadinasi pirks ŠALDYTUVĄ`);
}

console.log('------------------------------');
////////////////////
//Penkta uzduotis///
////////////////////
console.log('-------PENKTA-----------------');
// sugeneruokite tris rand skaicius nuo 1 iki 7 ir atspausdinti nuo maziausio iki didziausio.
let pirmasSkaicius = rand(1, 7);
let antrasSkaicius = rand(1, 7);
let treciasSkaicius = rand(1, 7);

////NESPEJAU :(
if (pirmasSkaicius <= antrasSkaicius && pirmasSkaicius <= treciasSkaicius){
    //pirmas pirmas
    if (antrasSkaicius <= treciasSkaicius){
        console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);
    } else {
        console.log(pirmasSkaicius, treciasSkaicius, antrasSkaicius)
    }
} else if(antrasSkaicius <= pirmasSkaicius && antrasSkaicius <= treciasSkaicius){
    //antras pirmas
    if (pirmasSkaicius <= treciasSkaicius){
        console.log(antrasSkaicius, pirmasSkaicius, treciasSkaicius);
    } else {
        console.log(antrasSkaicius, treciasSkaicius, pirmasSkaicius);
    }
} else {
    //trecias pirmas
    if(pirmasSkaicius <= antrasSkaicius){
        console.log(treciasSkaicius, pirmasSkaicius, antrasSkaicius);
    } else {
        console.log(treciasSkaicius, antrasSkaicius, pirmasSkaicius);
    }
}



console.log('--------------SPRENDIMAS----------------');


// console.log(pirmasSkaicius, antrasSkaicius, treciasSkaicius);

// if(pirmasSkaicius <= antrasSkaicius && pirmasSkaicius <= treciasSkaicius){
//     if(antrasSkaicius <= treciasSkaicius){
//         console.log(antrasSkaicius, pirmasSkaicius, treciasSkaicius);
//     } else {
        
//     }
// } else if(antrasSkaicius <= pirmasSkaicius && antrasSkaicius <= treciasSkaicius){

// } else