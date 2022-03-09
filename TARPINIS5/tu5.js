'use strict';

const elements = {
  numberInput: document.querySelector('[name=number]'),
  colorInput: document.querySelector('[name=color]'),
  createBtn: document.querySelector('button'),
  deleteBtn: document.querySelector('button+button'),
  ballField: document.querySelector('.ballField'),
};

class ColorBall {
  static balls = [];
  constructor(num, clr) {
    this.number = num;
    this.color = clr;
    ColorBall.balls.push([this.number, this.color]);
  }
}

elements.createBtn.addEventListener('click', () => {
  const newBall = new ColorBall(
    elements.numberInput.value,
    elements.colorInput.value
  );

  const oneBall = document.createElement('div');
  oneBall.classList.add('oneBall');
  oneBall.style.background = newBall.color;

  elements.ballField.appendChild(oneBall);
  console.log(ColorBall.balls);
});

elements.deleteBtn.addEventListener('click', () => {
  ColorBall.balls.shift();
  console.log(ColorBall.balls);
});
