function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const i1 = document.querySelector('.i1');
const b1 = document.querySelector('.b1');
// i1.addEventListener('input', () => {
//   console.log(i1.value);
// });

b1.addEventListener('click', () => {
  console.log(i1.value);
});

console.log('---------1--------');
//Padaryti input laukelį ir mygtuką jam. Paspaudus
//nmygtuką, informaciją iš inputo pridėti į masyvą.
//Masyvą atspausdinti DONE!

const i2 = document.querySelector('.i2');
const b2 = document.querySelector('.b2');

const b2EventsArray = [];

b2.addEventListener('click', () => {
  b2EventsArray.push(i2.value);
  console.log(b2EventsArray);
});

console.log('---------2--------');
//Padaryti 2 input laukelius ir mygtuką jiems.
//Paspaudus mygtuką, informaciją iš abiejų inputų
//pridėti į masyvą. O tą masyvą įdėti į didelį bendrą
//masyvą Masyvą (didelį) atspausdinti DONE!

const i3_1 = document.querySelector('.i3_1');
const b3 = document.querySelector('.b3');
const i3_2 = document.querySelector('.i3_2');

const b3EventsArray = [];

b3.addEventListener('click', () => {
  b3EventsArray.push([i3_1.value, i3_2.value]);
  console.log(b3EventsArray);
});

console.log('---------3--------');
//Reikia sukurti select su trim žvėrim pasirinkimui
//ir mygtuką. Paspaudus mygtuką, žvėris iš selekto
//įsirašo į masyvą DONE!

const b4 = document.querySelector('.b4');
const s1 = document.querySelector('#pet');

const pets = [];
b4.addEventListener('click', () => {
  pets.push(s1.value);
  console.log(pets);
});

console.log('---------4--------');
//
const b5 = document.querySelector('.b5');
const a5 = [];

const i5 = document.querySelectorAll('[name=n5]');

b5.addEventListener('click', () => {
  i5.forEach((radio) => {
    if (radio.checked) {
      a5.push(radio.value);
      console.log(a5);
    }
  });
});

console.log('---------5--------');
//Nupaišyti tris radio buttonus ir mygtuką.
//Paspaudus mygtuka, sukurti masyvą iš trijų elementų.
//Į tą sukurtą masyvą įrašyti tris reikšmes.
//Jeigu buttonas pažymėtas rašyti jo reikšmę,
//jeigu nepažymėtas rašyti "X"stringą. Tą sukurtą
//masyvą įdėti į didelį vieną bendrą ir tą bendrą
//atspausdinti DONE!

const b6 = document.querySelector('.b6');
const a6 = [];

const i6 = document.querySelectorAll('[name=n6]');

b6.addEventListener('click', () => {
  const a6Little = [];
  i6.forEach((button) => {
    if (button.checked) {
      a6Little.push(button.value);
    } else {
      a6Little.push('X');
    }
  });
  a6.push(a6Little);
  console.log(a6);
});

console.log('---------6--------');
//Nupaišyti tris čekboksus ir mygtuką.
//Paspaudus mygtuką visų pažymėtų čekboksų values surašyti
//į masyvą ir tą masyvą įrašyti į vieną didelį bendrą masyvą
// DONE!

const b7 = document.querySelector('.b7');
const i7 = document.querySelectorAll('[name=n7]');

a7 = [];

b7.addEventListener('click', () => {
  const a7Little = [];
  i7.forEach((check) => {
    if (check.checked) {
      a7Little.push(check.value);
    }
  });
  a7.push(a7Little);
  console.log(a7);
});

console.log('---------7--------');
//Sugeneruoti masyvą iš trijų atsitiktinių elementų
//nuo 10 iki 20. Pagal tą masyvą nupiešti tris apskritimus,
//kurių viduryje užrašytas tas sugeneruotas skaičius DONE!

const randArray = [];
for (let i = 0; i < 3; i++) {
  randArray.push(rand(10, 20));
}
// const p = document.createElement('p');
// const div8 = document.querySelectorAll('.div8');

// div8.forEach((e, i) => {
//   const p = document.createElement('p');
//   const sk = document.createTextNode(randArray[i]);
//   p.appendChild(sk);
//   e.appendChild(p);
// });

const field = document.querySelector('#circles');
randArray.forEach((circle) => {
  const p = document.createElement('div');
  const text = document.createTextNode(circle);
  p.appendChild(text);
  //issisaugome dokumenta
  p.dataset.ballCount = circle;
  field.appendChild(p);
  p.addEventListener('click', () => {
    let count = p.dataset.ballCount;
    count--;
    p.dataset.ballCount = count;
    p.innerText = '|' + count + '|';
  });
});

console.log('---------8--------');
