function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

console.log('---1---');
let kauliukas1 = rand(1, 6);
let kauliukas2 = rand(1, 6);

if (kauliukas1 + kauliukas2 > 8){
    console.log(kauliukas1+kauliukas2, 'laimejote');
} else {
    console.log(kauliukas1+kauliukas2, 'pralaimejote');
}

console.log('---2---');
let pilkis = rand(3, 6);
let murklys = rand(3, 6);

if(pilkis < murklys){
    console.log('Pilkis lengvesnis, jis sveria', pilkis, 'o murklys', murklys);
} else if (murklys < pilkis){
    console.log('Murklys lengvesnis, jis sveria', murklys, 'o pilkis', pilkis);
} else {
    console.log('murklys sveria', murklys, 'pilkis sveria', pilkis, 'jie sveria vienodai');
}
console.log('---3---');
let katinukai = rand(0, 30);
let karvytes = rand(0, 30);

if(katinukai < 15 && karvytes < 15){
    console.log(katinukai, karvytes, 'tilpo');
} else {
    console.log(katinukai, karvytes, 'netelpa');
}

console.log('---4---');
let kiauliukas = rand(1, 6);

switch (kiauliukas){
    case 1:
        case 5:
            console.log('Televizorius, nes', kiauliukas);
            break;
    case 3:
        case 4:
            console.log('Skalbenke, nes', kiauliukas);
            break;
    case 2:
        case 6:
            console.log('Saldytuvas, nes', kiauliukas);
}

console.log('---5---');
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
