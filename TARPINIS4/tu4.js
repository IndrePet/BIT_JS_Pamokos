'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const africa = [
  'Zebras',
  'Liūtas',
  '',
  'Raganosis',
  '',
  'Raganosis',
  'Begemotas',
];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

console.log('---------1--------');
//Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius <h2>
//tagus ir vieną mygtuką. Paspaudus mygtuką kiekvienam tagui sugeneruotkite
//rand() atskirą skaičių nuo 1 iki 6 ir jį įrašykite į tago vidų naudojant
//innerText() metodą. Paspaudus mygtuką skaičiai turi būti pergeneruojami
//iš naujo. Jeigu sugeneruoti skaičiai yra vienodi, juos nudažyti raudonai.

const h2_1 = document.querySelector('h2');
const h2_2 = document.querySelector('h2 + h2');
const b1 = document.querySelector('.b1');

b1.addEventListener('click', () => {
  h2_1.innerText = rand(0, 6);
  h2_2.innerText = rand(0, 6);

  if (h2_1.innerText == h2_2.innerText) {
    h2_1.style.color = 'red';
    h2_2.style.color = 'red';
  }
});

console.log('---------2--------');
//Tiesiogiai HTML faile rankiniu būdu sukurkite <h3> tagą
//ir vieną mygtuką. Susikurkite tuščią masyvą, skaičiams saugoti.
//Paspaudus mygtuką, sugeneruokite rand() skaičių nuo 1 iki 10.
//Sugeneruotą skaičių pridėkite į masyvą, o tą masyvą atspausdinkite
//konsolėle. <h3> tage skaičiuokite ir su innerText() metodu rašykite
//visų sugeneruotų skaičių sumą.

const h3 = document.querySelector('h3');
const b2 = document.querySelector('.b2');

const numberArray = [];

b2.addEventListener('click', () => {
  numberArray.push(rand(1, 10));
  console.log(numberArray);
  let sum = 0;
  numberArray.forEach((e) => {
    sum += e;
  });
  h3.innerText = sum;
});

console.log('---------3--------');
//Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
//JS pagalba perskaitykite masyvą africa ir naudodami createElement()
//ir kitus reikalingus metodus sukurkite kiekvienam masyvo elementui po <li>
//tagą su elemento stringu viduje ir juos įrašykite į <ul> tago vidų. Elementus
//su tuščiais stringais praleiskite ir jiems <li> elementų nekurkite.

const ul1 = document.querySelector('.ul1');

africa.forEach((e) => {
  const li1 = document.createElement('li');
  const li1Text = document.createTextNode(e);
  if (e != '') {
    li1.appendChild(li1Text);
    ul1.appendChild(li1);
  }
});

console.log('---------4--------');
//Tiesiogiai HTML faile rankiniu būdu sukurkite du tuščius
//input laukelius, vieną <h5> tagą ir du mygtukus: “+” ir “-”.
//Suprogramuokite kalkuliatorių taip, kad įrašius skaičius į abu
//input laukelius ir paspaudus atitinkamą mygtuką su skaičiais būtų
//atlikta atitinkama aritmetinė operacija, o jos rezultatas būtų
//atvaizduotas <h5> tage. Pasirinkite patys sau patogiausius metodus tai atlikti.

const i1 = document.querySelector('input');
const i2 = document.querySelector('input + input');

const h5 = document.querySelector('h5');

const sum = document.querySelector('.sum');
const subtract = document.querySelector('.subtract');

sum.addEventListener('click', () => {
  h5.innerText = Number(i1.value) + Number(i2.value);
});

subtract.addEventListener('click', () => {
  h5.innerText = Number(i1.value) - Number(i2.value);
});

console.log('---------5--------');
//(BOSO lygis) Tiesiogiai HTML faile rankiniu būdu sukurkite <ul> tagą.
//JS pagalba perskaitykite masyvą australia ir kiekvieną masyvo elementą
//įrašykite į strigą su <li> tagais iš abiejų pusių, o visus gautus stringus
//sudėkite į vieną bendrą stringą. Tą stirngą naudodami innerHTML() metodą
//įdėkite į <ul> tago vidų. Generavimo metu “Dingo” background’ą nuspalvinkite mėlynai.

// const ul2 = document.querySelector('.ul2');
// let australiaString = '';

// australia.forEach((e) => {
//   const liAnimal = `<li>${e}</li>`;
//   australiaString += liAnimal;
// });

// ul2.innerHTML = australiaString;

const ul2 = document.querySelector('.ul2');

let html = '';

australia.forEach((e) => {
  if (e != 'Dingo') {
    html = html + '<li>' + e + '</li>';
  } else {
    html = html + '<li style="background:blue;">' + e + '</li>';
  }
});

ul2.innerHTML = html;
