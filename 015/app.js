'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//OBJEKTAI

const house = {};

house.people = ['Nausėda', 'Bebras', 'Antanas'];
house.chimney = [1, 2];
house.address = 'Guobu g. 13';

console.log(house);
console.log(house.chimney);

console.log('---------1--------');
//Sukurti objektą catOwner, kuriame būtų dvi savybės cat -
//random katinukas iš masyvo ir girl - random iš girl
//masyvo DONE!
const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const catOwner = {};

catOwner.girlName = bitGirls[rand(0, bitGirls.length - 1)];
catOwner.catName = cats[rand(0, cats.length - 1)];

console.log(catOwner);

console.log('---------2--------');
//Papildyti ta objektą savybe pills, o savybė pills
//turi dar dvi savybes blue ir red, kurios randomu yra
//true arba false DONE!

catOwner.pills = {
  red: !rand(0, 1),
  blue: !rand(0, 1),
};

console.log(catOwner);

console.log('---------3--------');
//padaryt masyvą petClinic, kurio
//nariai būtų catOwner skirtingi objektai DONE!

const petClinic = [];

// for (let i = 0; i < 22; i++) {
//   petClinic.push([
//     (catOwner.girlName = bitGirls[rand(0, bitGirls.length - 1)]),
//     (catOwner.catName = cats[rand(0, cats.length - 1)]),
//     (catOwner.pills = {
//       red: !rand(0, 1),
//       blue: !rand(0, 1),
//     }),
//   ]);
// }

//Destytojo variantas

for (let i = 0; i < 22; i++) {
  petClinic[i] = {};
  petClinic[i].girlName = bitGirls[rand(0, bitGirls.length - 1)];
  petClinic[i].catName = cats[rand(0, cats.length - 1)];
  petClinic[i].pills = {
    red: !rand(0, 1),
    blue: !rand(0, 1),
  };
}

console.log(petClinic);

console.log('---------3--------');
//reikia masyvą surūšiuoti pagal mergaites varda(abecele) DONE!

petClinic.sort((a, b) => {
  if (a.girlName > b.girlName) {
    return 1;
  }
  if (a.girlName < b.girlName) {
    return -1;
  }
  return 0;
});

console.log(petClinic);

console.log('---------4--------');
//Kiek katinukų yra gavę mėlyną piliulę? DONE!

let bluePillSum = 0;

petClinic.forEach((item) => {
  if (item.pills.blue == true) {
    bluePillSum++;
  }
});

console.log(bluePillSum);

console.log('---------5--------');
//reikia sukurti objektą dog, kuris
//turėtų dvi savybes name ir tail (true or false) DONE!

const dogs = {};

dogs.name = 'Tesa';

dogs.tail = true;

// Šuniui sukurkite metodą voice, kurią iškvietus šuo į konsolę palotų DONE!
dogs.voice = () => 'au au';
console.log(dogs.voice());
