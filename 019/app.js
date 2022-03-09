function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const title = document.querySelector('h1');

// title.innerHTML = '<span>Šuniukas Tesukė</span>'; /// labai labai lėta komanda

//1. sukuriam elementa
const span = document.createElement('span');

// 2. sukuriam teksta
const text = document.createTextNode('Tesuke');

// 3. teksta dedam i elementa
span.appendChild(text);

// 4. elementa dedam i tag'a
title.appendChild(span);

console.log('---------1--------');
//Paspaudus mygtuką į section pridėti p elementą
//su random skaičiuimi nuo 1 iki 5 viduje DONE!
const b1 = document.querySelector('button');
const s1 = document.querySelector('section');

b1.addEventListener('click', () => {
  const number1 = rand(1, 5);
  const randNumP = document.createElement('p');
  const randNum = document.createTextNode(number1);
  randNumP.appendChild(randNum);
  s1.appendChild(randNumP);
});

console.log('---------2--------');
//Paspaudus ant mygtuko hello, hello klasės dive
//sukurti span elementą, jame įrašyti žodį "hello"
//ir numerį klelintas jis yra, pradedant nuo 1 DONE!
const helloDiv = document.querySelector('.hello');
const helloBtn = document.querySelector('[type=button]');

let eventNumber = 0;
helloBtn.addEventListener('click', () => {
  const spanElement = document.createElement('span');
  const helloText = document.createTextNode(++eventNumber + ' hello ');
  spanElement.appendChild(helloText);
  helloDiv.appendChild(spanElement);
});

console.log('---------3--------');
//Cats dive sukurti sarašą pagal katinukų masyvą.
//Katinukus dedant į atskirus divus DONE!

const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

const catsDiv = document.querySelector('.cats');

cats.forEach((e) => {
  const newCatDiv = document.createElement('div');
  const catName = document.createTextNode(e);
  newCatDiv.appendChild(catName);
  catsDiv.appendChild(newCatDiv);
});

console.log('---------4--------');
//Cars dive sukurti sarašą pagal auto masyvą.
//Auto gamintojus dedant į atskirus divus DONE!

const cars = [
  { maker: 'Volvo', color: 'blue' },
  { maker: 'MB', color: 'yellow' },
  { maker: 'Opel', color: 'pink' },
  { maker: 'Volvo', color: 'orange' },
  { maker: 'Audi', color: 'blue' },
  { maker: 'Ferrari', color: 'red' },
  { maker: 'MB', color: 'gray' },
  { maker: 'Scania', color: 'yellow' },
  { maker: 'Kamaz', color: 'orange' },
  { maker: 'Saab', color: 'brown' },
];

const carsDiv = document.querySelector('.cars');
cars.forEach((e) => {
  const newCarsDiv = document.createElement('div');
  const carMaker = document.createTextNode(e.maker);
  newCarsDiv.style.color = e.color;
  newCarsDiv.appendChild(carMaker);

  carsDiv.appendChild(newCarsDiv);
});

//tą patį padaryti su masyvu cars2 DONE!
const cars2 = [
  ['Volvo', 'blue', 55],
  ['MB', 'yellow', 0],
  ['Opel', 'pink', 11],
  ['Volvo', 'orange', 78],
  ['Audi', 'blue', 0],
  ['Ferrari', 'red', 99],
  ['MB', 'gray', 20],
  ['Scania', 'yellow', 78],
  ['Kamaz', 'orange', 98],
  ['Saab', 'brown', 0],
];

const cars2Div = document.querySelector('.cars2');
cars2.forEach((e) => {
  //cars2 sąraše neturi rodyti auto, kurių kiekis yra 0
  if (e[2] != 0) {
    const newCars2Div = document.createElement('div');
    const car2Maker = document.createTextNode(e[0]);
    newCars2Div.style.color = e[1];
    newCars2Div.appendChild(car2Maker);
    cars2Div.appendChild(newCars2Div);
  }
});
