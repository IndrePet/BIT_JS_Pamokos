'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//crud -create read update delete

const animal = 'Bebras';

// localStorage.setItem('forestAnimal', animal);
//tokiu budu idedame i saugykla

const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

console.log('---------1--------');
//Padaryti mygtuką, kurį paspaudus, į h6 tagą yra
// įdedamas random animalas iš masyvo australia DONE!

const h6 = document.querySelector('h6');
const b1 = document.querySelector('.b1');

//Reikia taip padaryti, kad parefrešinus puslapį,
//rodytų paskutinį pasirinktą animalą. DONE!
if (localStorage.getItem('australiaAnimal') !== null) {
  h6.innerText = localStorage.getItem('australiaAnimal');
} else {
  h6.innerText = 'Nop nop nop';
}

b1.addEventListener('click', () => {
  const randAnimal = australia[rand(0, australia.length - 1)];
  h6.innerText = randAnimal;
  localStorage.setItem('australiaAnimal', randAnimal);
});

console.log('---------2--------');
//Įrašyti į LS australia masyvą, tada masyvą nuskaityti ir
//atspausdinti konsolėję DONE!

localStorage.setItem('australiaArray', australia);
// console.log(localStorage.getItem('test', australiaArray));
localStorage.setItem('australiaArray2', JSON.stringify(australia));

console.log('test', JSON.parse(localStorage.getItem('australiaArray2')));

const australia2 = { la: 'lala', bla: { ku: 'kuku', bu: 87 } };
localStorage.setItem('try', JSON.stringify(australia2));
console.log(JSON.parse(localStorage.getItem('try')));
