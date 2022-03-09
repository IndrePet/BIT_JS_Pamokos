'use strict';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
};

console.log(document.querySelector('h1'));

console.log('---------1--------');
//Paselektinti 'Ate'. DONE!
console.log(document.querySelector('div:first-child'));

console.log('---------2--------');
// Paselektinti šunį DONE!
console.log(document.querySelector('.auau'));


console.log(document.querySelector('div[name]'));
console.log(document.querySelector('[name=mumu]'));
console.log(document.querySelector('[type=rabit]'));
console.log(document.querySelector('[type=rabit]+div'));

const cat = document.querySelector('h1');

cat.style.color = 'pink';

document.querySelector('.auau').style.color = 'brown';
document.querySelector('.auau').style.fontSize = '40px';
// Karvei, padaryti žalią backgroundą, uždėti 100px paddingą, apibrėžti juodą rėmą 3px storio DONE!


const cow = document.querySelector('[name=mumu]');
cow.style.background = 'green';
cow.style.padding = '100px';
cow.style.border = '13px dotted black';
cow.style.display = 'grid';
cow.style.placeContent = 'center';


// setInterval(() => {
//     console.log('m8')
// }, 1000);

//karvės backgroundą kas 1 sekundę 
//kaitalioti iš green į pink DONE!

setInterval(() => {
    if (cow.style.background == 'green'){
        cow.style.background = 'pink';
    } else {
        cow.style.background = 'green';
    }
}, 1000);

const ball = document.querySelector('.ball');



setInterval(() => {
    if (ball.style.left == '0px'){
        ball.style.left = '450px';
    } else {
        ball.style.left = '0px';
    }
}, 1000);

cow.innerText = 'Begemotas';
let ballCounter = 1;
setInterval(() => {
    ball.innerText = ++ballCounter;
    ball.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
}, 1000);

