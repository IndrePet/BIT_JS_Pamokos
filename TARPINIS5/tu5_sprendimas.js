const balls = [];

class ColorBall {
  constructor(color, number) {
    this.color = color;
    this.number = number;
    balls.push(this);
  }
}

const number = document.querySelector('[name=number]');
const color = document.querySelector('[name=color]');
const add = document.querySelector('.b1');
const remove = document.querySelector('.b2');
const div = document.querySelector('.ballField');

const paint = () => {
  let html = '';
  balls.forEach((element) => {
    html += `<div class='oneBall' style='background:${element.color}'>${element.number}</div>`;
  });
  div.innerHTML = html;
};

add.addEventListener('click', () => {
  new ColorBall(color.value, number.value);
  paint();
});

remove.addEventListener('click', () => {
  balls.shift();
  paint();
});
