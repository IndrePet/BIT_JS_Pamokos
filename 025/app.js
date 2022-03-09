'use strict';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const clr = document.querySelector('#color');
const clrBtn = document.querySelector('#clrBtn');

clrBtn.addEventListener('click', () => {
  console.log(clr.value);
});

console.log('---------1--------');

//Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius
// kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
//O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių
//keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

//(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių
//skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį
//metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės
//savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai
//modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Troleibusas {
  static visiKeleiviai = 0;

  static bendrasKeleiviuSkaicius(sk) {
    this.visiKeleiviai += sk;
  }

  constructor() {
    this.keleiviuSkaicius = 0;
  }

  ilipa(sk) {
    this.keleiviuSkaicius += sk;
    this.constructor.bendrasKeleiviuSkaicius(sk);
  }

  islipa(sk) {
    if (sk > this.keleiviuSkaicius) {
      this.constructor.bendrasKeleiviuSkaicius(-this.keleiviuSkaicius);
      this.keleiviuSkaicius = 0;
    } else {
      this.keleiviuSkaicius -= sk;
      this.constructor.bendrasKeleiviuSkaicius(-sk);
    }
    // this.keleiviuSkaicius = Math.max(0, this.keleiviuSkaicius - sk);
    // Troleibusas.bendrasKeleiviuSkaicius(-sk);
  }

  vaziuoja() {
    console.log(this.keleiviuSkaicius);
  }

  keleiviuSkaiciusVisuoseTroleibusuose() {
    console.log('viso vaziavusiu: ' + this.constructor.visiKeleiviai);
  }
}

const kelione = new Troleibusas();
kelione.ilipa(5);
kelione.islipa(2);

const kelione2 = new Troleibusas();
kelione2.ilipa(10);
kelione2.islipa(5);

kelione.keleiviuSkaiciusVisuoseTroleibusuose();

//////////////////////
//STATIC
////////////////////

class Zuikis {
  ///static dalykai rasosi virsuj

  static visoMorku = 0; //statine savybe
  static visoKopustu = 0;

  static skaiciuotiVisusKopustus(sk) {
    //statinis metodas
    this.visoKopustu += sk; //cia (statines aplinkoj panadotas) this rodo i klase
  }

  constructor() {
    this.morkos = 0;
    this.kopustai = 0;
  }

  imkMorka(sk) {
    Zuikis.visoMorku += sk;
    this.morkos += sk;
  }

  imkKopusta(sk) {
    Zuikis.skaiciuotiVisusKopustus(sk);
    this.kopustai += sk; //cia this rodo i objekta
  }
}

console.log(Zuikis.visoMorku);

const zuikis1 = new Zuikis();
const zuikis2 = new Zuikis();

console.log(zuikis1, zuikis2); ///static nepapuola pas zuikius

zuikis1.imkMorka(5);
zuikis2.imkMorka(12);

console.log(zuikis1.morkos, zuikis2.morkos);

console.log(Zuikis.visoMorku);

console.log('---------2--------');

//Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu.
// Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis
//netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa,
//nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio.
//Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę,
//o mažesnę į dar mažesnę.

class Stikline {
  constructor(turis) {
    this.turis = turis;
    this.kiekis = 0;
  }

  ipilti(kiekis) {
    this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    return this;
    // if (kiekis > this.turis) {
    //   this.kiekis = this.turis;
    // } else {
    //   this.kiekis = kiekis;
    // }
  }

  ispilti() {
    let ispilta = this.kiekis;
    this.kiekis = 0;
    return ispilta;
  }

  stiklinejeYra() {
    console.log('stiklineje yra: ' + this.kiekis);
  }
}

const stiklineMax = new Stikline(200);
const stiklineMid = new Stikline(150);
const stiklineMin = new Stikline(100);

stiklineMax.ipilti(200);
stiklineMid.ipilti(stiklineMax.ispilti());
stiklineMin.ipilti(stiklineMid.ispilti());

stiklineMax.stiklinejeYra();
stiklineMid.stiklinejeYra();
stiklineMin.stiklinejeYra();

console.log('---------3--------');

//Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė
//500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos
//konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija)
//priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti,
//t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas)
// metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).

class Grybas {
  static visiGrybai = [];

  constructor() {
    this.valgomas = rand(0, 1) ? true : false;
    this.sukirmijes = rand(0, 1) ? true : false;
    this.svoris = rand(5, 45);
    this.constructor.visiGrybai.push(this);

    // this.constructor === Grybas
  }
}

class Krepsys {
  constructor() {
    this.dydis = 500;
    this.prikrauta = 0;
  }

  deti(grybas) {
    if (grybas.valgomas && !grybas.sukirmijes) {
      this.prikrauta += grybas.svoris;
    }
    return this.dydis > this.prikrauta;
  }
}

const krepsiuks = new Krepsys();

while (krepsiuks.deti(new Grybas())) {}

console.log(Grybas.visiGrybai);
console.log(krepsiuks.prikrauta);
