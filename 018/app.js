function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

///pridedam mygtukui eventa

const button1 = document.querySelector('.b1');

button1.addEventListener('click', () => {
  console.log('I got clicked bruh');
});

button1.addEventListener('mouseenter', () => {
  console.log('Get yo dirty hands off of me brah');
});

button1.addEventListener('mouseleave', () => {
  console.log('Finally, ew');
});

console.log('---------1--------');
//Padaryti, kad paspaudus ant mygtuko
//Do Red visas puslapio fonas nusidažytų raudonai DONE!

const button2 = document.querySelector('.b2');

const body = document.querySelector('body');

button2.addEventListener('click', () => {
  if (body.style.background === 'inherit') {
    body.style.background = 'rgb(161, 56, 74)';
  } else {
    body.style.background = 'inherit';
  }
});

console.log('---------2--------');
//Paspaudu Do Rand į h1 įrašyti random nuo 5 iki 55 DONE!

const button3 = document.querySelector('.b3');
button3.addEventListener('click', () => {
  document.querySelector('h1').innerText = `${rand(5, 55)}`;
});

console.log('---------3--------');

const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

parent.addEventListener('click', () => {
  console.log('fatheren');
});
body.addEventListener('click', () => {
  console.log('paspaudei ir body, gi propaguoji');
});
child.addEventListener('click', (e) => {
  e.stopPropagation(); //šitaip stabdosi
  console.log(e.target); //taip pasirenkamas elementas
  //iš kurio tas įvykis išėjo
  e.target.style.background = 'aquamarine';
  console.log('kinder');
});

document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  e.target.style.color = 'aquamarine';
});

const raudons = document.querySelector('.red-square');

raudons.addEventListener('click', (e) => {
  //evente yra targetas. targetas duoda elementa
  console.log(e.target);

  //clickas perduodamas tevui, todel reikia stabdyti(bubble)
  e.stopPropagation();

  //defaulto stabdymas
  //clickinant pvz
  e.preventDefault();
});

///////////////////////////////
//Paspaudus ant kovotojo, jis turi pakeisti spalvą DONE!
//paspaudus ant kovotojo consolėje išspausdintų jo vardą DONE!
const allFighters = document.querySelectorAll('li');

const fighterArray = [];
const fighterIndex = [];
const bigFighterArray = [];

const objectArray = [];

allFighters.forEach((oneFighter, index) => {
  oneFighter.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(e.target.innerText);
    e.target.style.color = 'red';
    //Paspaudus ant kovotojo, jo vardą reikia įrašyti į masyvą,
    //o masyvą atspausdinti DONE!
    fighterArray.push(e.target.innerText);
    console.log(fighterArray);
    //Paspaudus ant kovotojo, jo eilės numerį
    //(indeksą) įrašyti į masyvą, o masyvą atspausdinti DONE!
    fighterIndex.push(index);
    console.log(fighterIndex);

    //Paspaudus ant kovotojo, jo vardą ir eilės numerį
    //(indeksą) įrašyti į mažą masyvą, ir tą įdėti į bendrą
    // kovotojų masyvą ir atspausdinti DONE!
    // const _1Fighter = [];
    // _1Fighter.push(e.target.innerText);
    // _1Fighter.push(index);
    bigFighterArray.push([e.target.innerText, index]);
    console.table(bigFighterArray);

    //Paspaudus ant kovotojo, sukurkite naują objektą,
    //jo vardą ir eilės numerį (indeksą) įrašyti į objekto
    //savybes name ir row ir tą objektą įdėti į bendrą
    //kovotojų masyvą ir atspausdinti DONE!

    objectArray.push({ name: e.target.innerText, row: index });
    console.log(objectArray);
  });
});
