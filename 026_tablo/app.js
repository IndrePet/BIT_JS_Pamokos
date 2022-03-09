//Masyvas iš 15 elementų, kuriame visi elementai yra tušti stringai

const div = document.querySelector('.tablo');
const input = document.querySelector('#text');
const button = document.querySelector('#enter-text');
const clr = document.querySelector('#clr');
const range = document.querySelector('#range');
let color = 'limegreen';
let fontSize = '2rem';

const tablo = [];
let text = `Labas krabas `;

for (let i = 0; i < 15; i++) {
  tablo.push('-');
}

const write = () => {
  let html = '';
  tablo.forEach((element) => {
    html += `<div class='letter' style='color:${color}; font-size:${fontSize}'}>${element}</div>`;
  });
  div.innerHTML = html;
};

//Parašyti kodą, kuris kas 1s į console išspausdintų *

let letter = 0;
setInterval(() => {
  tablo.push(text[letter]);
  letter = letter + 1 == text.length ? 0 : letter + 1;
  tablo.shift();
  write();
}, 500);

button.addEventListener('click', () => {
  letter = 0;
  text = input.value;
  color = clr.value;
  fontSize = `${range.value}rem`;
});
