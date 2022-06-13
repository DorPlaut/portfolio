// #### Global variables ####
const xVar = document.querySelector('.x-var');
const yVar = document.querySelector('.y-var');
const btn = document.querySelector('.btn');
const canvas = document.querySelector('.canvas');
const form = document.querySelector('.form');
const frectal = document.querySelector('.frectal');
const numInput = document.querySelector('.num-input');
const alert = document.querySelector(`.alert`);
const clrBtn = document.querySelector('.clr-btn');
const loadContainer = document.querySelector('.load-container');
const loadImg = document.querySelector('#load-img');

let input;
let firstNum = 0;
let secondNum = 1;
let sequence;
let arr = [];
let last;
let secondToLast;

//#### functions ####
// ## calc fibonacci (using for loop) ##
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
  Y = Y.toLocaleString('fullwide', { useGrouping: false });
  yVar.textContent = Y;
}

// ## calc fibonacci (using recursion)
function calcFibonacciRec(X) {
  xVar.textContent = X;
  X++;
  arr.push(firstNum);
  arr.push(secondNum);
  pushRec(X);

  function pushRec(X) {
    let value = arr.length;
    last = arr.length - 1;
    secondToLast = arr.length - 2;
    let nextNum = arr[last] + arr[secondToLast];
    arr.push(nextNum);
    if (arr.length < X) {
      pushRec(X);
    } else {
      yVar.textContent = arr[value].toLocaleString('fullwide', {
        useGrouping: false,
      });
    }
  }
}

// ## clear X,Y and form input ##
function setBacktoDefault() {
  firstNum = 0;
  secondNum = 1;
  sequence;
  arr = [];
  numInput.value = '';
  xVar.textContent = '';
  yVar.textContent = '';
}
// ## crate canvas ##
function crateCanvas() {
  const canvas = document.querySelector('.canvas');
  const ctx = canvas.getContext('2d');
  function draw(x, y, z) {
    ctx.beginPath();
    ctx.fillStyle = '#2b342b';
    ctx.strokeStyle = '#2b342b';
    drawFrectal(x, y, z);
    ctx.stroke();
  }
  draw(500, 1000, 8000);
  clrBtn.addEventListener('click', function () {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    xVar.textContent = 'X';
    yVar.textContent = 'Y';
    displayAlert('background has cleared', 'success');
  });

  function drawFrectal(x, y, z) {
    ctx.arc(x, y, z, 0, Math.PI * 3);
    if (z > 2) {
      drawFrectal(x + z * 0.5, y, z * 0.5);
      drawFrectal(x - z * 0.5, y, z * 0.5);
      drawFrectal(x, y - z * input, z * 0.5);
    }
  }
}
// ## size canvas ##
function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
// ## submit form ##
function submitForm(e) {}
//## display alert ##
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

// #### events ####
// ## loadscreen ##
window.addEventListener('load', function () {
  loadContainer.style.visibility = 'hidden';
  loadImg.style.visibility = 'hidden';
});
// ## canvas ##
// window.addEventListener('load', crateCanvas());
window.addEventListener('resize', fitToContainer(canvas));
// ## submit form ##
form.addEventListener('submit', function (e) {
  input = parseInt(numInput.value);
  setBacktoDefault();
  e.preventDefault();
  if (isNaN(input) == false && input > 0 && input <= 50) {
    calcFibonacciRec(input);
    displayAlert('calculated successfully', 'success');
    crateCanvas();
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
  if (input > 50) {
    xVar.textContent = 'X';
    yVar.textContent = 'Y';
    displayAlert('Please enter a namber smaller then 50', 'danger');
  }
});

// ##-- uncomment to test for loop function --##  //
// calcFibonacci(10);
// ##-- uncomment to test for recursion function --##  //
// calcFibonacciRec(10);
