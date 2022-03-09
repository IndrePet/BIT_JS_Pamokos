function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

// console.log('Labas');
// console.log('Krabas');

// let vaiko1Saldainiai;
// let vaiko2Saldainiai;

// let saldainiuSuma;

// vaiko1Saldainiai = 5; // pirmas vaikas turi 5 saldainius
// vaiko2Saldainiai = 6; // antras vaikas turi 6 saldainius

// vaiko1Saldainiai = rand(1, 10); // pirmas vaikas turi nuo 1 iki 10 random saldainiu
// vaiko2Saldainiai = rand(1, 10); // antras vaikas turi nuo 1 iki 10 random saldainiu

// saldainiuSuma = vaiko1Saldainiai + vaiko2Saldainiai;

// console.log("Vaikas1", vaiko1Saldainiai);
// console.log("Vaikas2", vaiko2Saldainiai);
// console.log("Saldainiu suma", saldainiuSuma);

// let zuvuSuma
// let udros1zuvys;
// let udros2zuvys;


// let likeZuvys;

// zuvuSuma = rand(50, 100);
// udros1zuvys = rand(5, 25);
// udros2zuvys = rand(10, 30);


// likeZuvys = zuvuSuma - udros1zuvys - udros2zuvys;

// console.log('Iš viso žuvų:', zuvuSuma);
// console.log('Pirma ūdra suvalgė:', udros1zuvys);
// console.log('Antra ūdra suvalgė:', udros2zuvys);
// console.log('Liko žuvų:', likeZuvys);

let skaicius;
skaicius = 5;
//didina vienetu
skaicius++;
skaicius++;
//mazina vienetu
skaicius--;
skaicius--;

console.log(skaicius);

let x;
x = skaicius-- - --skaicius;
console.log(x);

// skaicius = skaicius + 8;
skaicius += 8;
console.log('Skaičius += 8: ', skaicius)