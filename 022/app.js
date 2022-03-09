'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//puslapis yra objektas, todel

console.log('this kai nesame kitame objekte', this);

//console raso, kad this yra window objektas

console.log('---------1--------');
//Sukuri objektą kuris turi vieną savybę color ir ji lygi
//kokiai norit spalvai DONE!

// const obj1 = {};

// obj1.color = 'aquamarine';

// console.log(obj1);

// console.log('---------2--------');
// //Prie objekto prideti savybę-metodą hello, kuris į console
// //spausdintų žodį "Hello" DONE!
// obj1.hello = () => console.log('hello');

// obj1.hello();

// ///////////////
// /////////////////

// //pilnoj funkcijoj, this nurodo, kad yra objekte

// obj1.labas1 = function () {
//   console.log('labas 1', this);
// };

// //arrow funkcijoj this nurodo bendra window langa

// obj1.labas2 = () => {
//   console.log('labas 2', this);
// };

// obj1.labas1();
// obj1.labas2();

// console.log('---------3--------');
// //Parašyti funkciją, kuri atspausdintų
// //konsolėje color savybę DONE!
// obj1.objColor = function () {
//   console.log(this.color);
// };

// obj1.objColor();

// console.log('---------4--------');
// //Sukurkite dar vieną savybę count ir jai
// //priskirkite kokį nors skaičių. Tada sukurkite
// //metodą kuris count savybę atspausdina paudugintą
// //iš 10 DONE!
// obj1.count = 666;
// obj1.count10 = function () {
//   console.log(this.count * 10);
// };

// obj1.count10();

/////////
//////////////
class myFirstObject {
  //savybes
  constructor(c, d, avinai) {
    this.color = c;
    this.count = d;
    this.avinuSkaicius = avinai;
  }

  //metodai

  objColor() {
    console.log(this.color);
  }
  count10() {
    console.log(this.count * 10);
  }
}

const obj1 = new myFirstObject('green', 69, 88);
obj1.objColor();
obj1.count10();
const obj12 = new myFirstObject('pink', 47, 109);
obj12.objColor();
obj12.count10();

console.log(obj1, obj12);

console.log('---------4--------');

//Sukurti klasę Kibiras1. Konstruktoriuje sukurti
//savybę akmenuKiekis  kuri lygi 0. Parašyti šiai
//klasei metodus, pridedančius akmenis: prideti1Akmeni()
// pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų
//kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną
//kibiro objektą ir pademonstruoti akmenų rinkimą į
//kibirą ir rezultatų išvedimą.

class kibiras1 {
  constructor() {
    this.akmenuKiekis = 0;
  }

  prideti1Akmeni() {
    this.akmenuKiekis++;
  }

  pridetiDaugAkmenu(akmenys) {
    this.akmenuKiekis += akmenys;
  }

  kiekPririnktaAkmenu() {
    console.log('Pririnkta ' + this.akmenuKiekis);
  }
}

const kibirTest = new kibiras1();
kibirTest.prideti1Akmeni();
kibirTest.pridetiDaugAkmenu(15);

kibirTest.kiekPririnktaAkmenu();

const kibirTest2 = new kibiras1();
kibirTest.pridetiDaugAkmenu(200);
kibirTest.kiekPririnktaAkmenu();

//Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi
//savybes popieriniaiPinigai ir metaliniaiPinigai.
//Parašyti metodą ideti(kiekis), kuris prideda pinigus
//į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda
//prie metaliniaiPinigai, jeigu kitaip- prie
//popieriniaiPinigai. Parašykite metodą skaiciuoti(),
//kuris suskaičiuotų ir išvestų į konsolę
//popieriniaiPinigai ir metaliniaiPinigai sumą.
//Sukurti klasės objektą ir pademonstruoti veikimą.
//Nesvarbu kokios popierinės kupiūros ir metalinės monetos
//egzistuoja realiame pasaulyje.

class pinigine {
  constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
  }

  ideti(kiekis) {
    if (kiekis < 0) {
      return;
    }
    if (kiekis < 2) {
      this.metaliniaiPinigai += kiekis;
    } else {
      this.popieriniaiPinigai += kiekis;
    }
  }
  skaiciuoti() {
    console.log(
      'popieriniu pinigu: ' +
        this.popieriniaiPinigai +
        ' metaliniu pinigu: ' +
        this.metaliniaiPinigai
    );
  }
}

const manoPinigine = new pinigine();
manoPinigine.ideti(25);
manoPinigine.ideti(1);
manoPinigine.skaiciuoti();
console.log(manoPinigine.metaliniaiPinigai, manoPinigine.popieriniaiPinigai);

console.log('---------5--------');
//Parašyti klasę, iš kurios kuriant objektą,
//HTMLe atsirastų h2 tagas, o jo viduje būtų stringas,
//kuris užrašomas kuriant objektą DONE!

const body = document.querySelector('body');

class createH2 {
  constructor(txt, c) {
    this.h2 = document.createElement('h2');
    const text = document.createTextNode(txt);
    this.h2.appendChild(text);
    body.appendChild(this.h2);
  }

  color(c) {
    this.h2.style.color = c;
  }
}

const labas = new createH2('russkij korabl');
const idi = new createH2('idi nahui');

labas.color('yellow');
idi.color('blue');
