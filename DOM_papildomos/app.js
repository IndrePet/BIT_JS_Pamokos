function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const title = document.querySelector('h1');

title.style.color = 'green';
title.classList.add('small');
title.classList.remove('main');

const titleH2 = document.querySelector('h1 + h2');

titleH2.classList.replace('main', 'first');

const h2Span = document.querySelector('h2 > span');

h2Span.style.fontSize = '10px';
h2Span.style.color = 'grey';
