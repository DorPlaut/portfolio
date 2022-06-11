const xVar = document.querySelector('.x-var');
const yVar = document.querySelector('.y-var');
const btn = document.querySelector('.btn');
const canvas = document.querySelector('.canvas');
const form = document.querySelector('.form');
const frectal = document.querySelector('.frectal');
const numInput = document.querySelector('.num-input');
const alert = document.querySelector(`.alert`);
let input;
const clrBtn = document.querySelector('.clr-btn');

let firstNum = 0;
let secondNum = 1;
let sequence;
let arr = [];

// functions

// calc fibonacci
function calcFibonacci(X) {
  for (let i = 0; i <= X; i++) {
    sequence = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = sequence;
    arr.push(sequence);
  }
  xVar.textContent = X;
  arr.unshift(1);
  let Y = arr[arr.length - 3];
  yVar.textContent = Y;
}

// clear X,Y and form input
function setBacktoDefault() {
  firstNum = 0;
  secondNum = 1;
  sequence;
  arr = [];
  numInput.value = '';
  xVar.textContent = '';
  yVar.textContent = '';
}
// draw frectal

// events
// canvas
window.addEventListener('load', function () {
  const canvas = document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');
  function draw(x, y, z) {
    ctx.beginPath();
    ctx.fillStyle = '#2b342b';
    ctx.strokeStyle = '#2b342b';
    drawFrectal(x, y, z);
    ctx.stroke();
  }
  btn.addEventListener('click', function () {
    draw(500, 1000, 8000);
  });
  clrBtn.addEventListener('click', function () {
    console.log('hello');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  });

  function drawFrectal(x, y, z) {
    ctx.arc(x, y, z, 0, Math.PI * 3);
    if (z > 2) {
      drawFrectal(x + z * 0.5, y, z * 0.5);
      drawFrectal(x - z * 0.5, y, z * 0.5);
      drawFrectal(x, y - z * input, z * 0.5);
    }
  }
});

window.addEventListener('resize', fitToContainer(canvas));

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

// submit form
form.addEventListener('submit', function (e) {
  input = parseInt(numInput.value);
  setBacktoDefault();
  e.preventDefault();
  if (isNaN(input) == false && input > 1) {
    calcFibonacci(input);
    displayAlert('calculated successfully', 'success');
  }
  if (isNaN(input) == true) {
    xVar.textContent = 'X';
    yVar.textContent = 'Y';
    displayAlert('Input is empty', 'danger');
  }
  if (input <= 0) {
    xVar.textContent = 'X';
    yVar.textContent = 'Y';
    displayAlert('Please enter a namber bigger then 0', 'danger');
  }
  console.log(input);
});

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//  numInput.value === ''

// calcFibonacci(1);
