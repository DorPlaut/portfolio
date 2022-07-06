// !!! Global variables !!!
const navBtn = document.querySelectorAll('.navBtn');

// !!! Global Functions !!!
// set forms to default
function setBacktoDefault(form) {
  form.value = '';
}

function successAlert(target) {
  target.classList.add('alert');
  target.classList.remove('alert-danger');
  target.classList.add('alert-success');
}
function dangerAlert(target) {
  target.classList.add('alert');
  target.classList.remove('alert-success');
  target.classList.add('alert-danger');
}

// !!! Palindrome Checker !!!
// variables
const palInputValue = document.querySelector('#Palindrome-input');
const palBtn = document.querySelector('#Palindrome-btn');
const palForm = document.querySelector('#Palindrome-form');
const palResult = document.querySelector('#Palindrome-selution');
let isitPal;

palForm.addEventListener('submit', function (e) {
  e.preventDefault();
  isitPal = palInputValue.value;
  palindrome(isitPal);
  setBacktoDefault(palInputValue);
});

function palindrome(str) {
  // remove non alphanumeric characters and transfer to lower case
  let regex = /[a-z]*[A-Z]*[0-9]*/gi;
  let filterdStr = str.match(regex).join('').toLowerCase();
  // get devider
  let devider;
  if (filterdStr.length % 2 === 0) {
    devider = 0;
  } else {
    devider = 1;
  }
  // get half of the string
  let halfLength = filterdStr.length / 2;
  let firstHalf = filterdStr.slice(0, halfLength);
  let secondHalf = filterdStr
    .slice(halfLength + devider)
    .split('')
    .reverse()
    .join('');
  // append result
  console.log(str);
  if (firstHalf == secondHalf && str.length > 1) {
    palResult.textContent = 'It is a Palindrome!';
    successAlert(palResult);
  } else if (str.length <= 1) {
    palResult.textContent = 'Enter at least 2 characters';
    dangerAlert(palResult);
  } else {
    palResult.textContent = 'It is NOT a Palindrome!';
    dangerAlert(palResult);
  }
}
// !!! end of Palindrome Checker !!!
// !!! Roman Numeral Converter !!!

const romanInputValue = document.querySelector('#Roman-input');
const romanBtn = document.querySelector('#Roman-btn');
const romanForm = document.querySelector('#Roman-form');
const romanResult = document.querySelector('#Roman-selution');

romanForm.addEventListener('submit', function (e) {
  e.preventDefault();
  num = romanInputValue.value;
  convertToRoman(num);
  setBacktoDefault(romanInputValue);
});

function convertToRoman(num) {
  // roman numrals arrays
  const romanUnder10 = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
  ];
  const romanUnder100 = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
  ];
  const romanUnder1000 = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
  ];
  const romanUnder10000 = ['', 'M', 'MM', 'MMM'];
  // roman numrals digits
  let arr = num.toString().split('');
  let roman10;
  let roman100;
  let roman1000;
  let roman10000;
  let result;
  // num = 1-9
  if (num < 10 && num > 0) {
    roman10 = romanUnder10[num];
    result = roman10;
    romanResult.textContent = result;
    successAlert(romanResult);
  }
  // num = 10 - 99
  else if (num >= 10 && num < 100) {
    roman10 = romanUnder10[arr[1]];
    roman100 = romanUnder100[arr[0]];
    result = roman100 + roman10;
    romanResult.textContent = result;
    successAlert(romanResult);
  }
  // num = 100 - 999
  else if (num >= 100 && num < 1000) {
    roman10 = romanUnder10[arr[2]];
    roman100 = romanUnder100[arr[1]];
    roman1000 = romanUnder1000[arr[0]];
    result = roman1000 + roman100 + roman10;
    romanResult.textContent = result;
    successAlert(romanResult);
  }
  // num = 1000 - 3999
  else if (num >= 1000 && num < 4000) {
    roman10 = romanUnder10[arr[3]];
    roman100 = romanUnder100[arr[2]];
    roman1000 = romanUnder1000[arr[1]];
    roman10000 = romanUnder10000[arr[0]];
    result = roman10000 + roman1000 + roman100 + roman10;
    romanResult.textContent = result;
    successAlert(romanResult);
  } else {
    romanResult.textContent = 'Number value must be between 1 - 3999';
    dangerAlert(romanResult);
  }
}
// !!! end of Roman Numeral Converter !!!
// !!! Caesars Cipher !!!
const caesarsInputValue = document.querySelector('#Caesars-input');
const caesarsBtn = document.querySelector('#Caesars-btn');
const caesarsForm = document.querySelector('#Caesars-form');
const caesarsResult = document.querySelector('#Caesars-selution');

caesarsForm.addEventListener('submit', function (e) {
  e.preventDefault();
  str = caesarsInputValue.value.toUpperCase();
  rot13(str);
  setBacktoDefault(caesarsInputValue);
});

function rot13(str) {
  let charCode = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) + 12 < 90 && str[i]) {
      charCode.push(String.fromCharCode(str.charCodeAt(i) + 13));
    } else if (str[i] == '.') {
      charCode.push('.');
    } else if (str[i] == '?') {
      charCode.push('?');
    } else if (str[i] == '!') {
      charCode.push('!');
    } else if (str[i] != '.') {
      charCode.push(String.fromCharCode(str.charCodeAt(i) - 13));
    }
  }
  let result = charCode.toString().replace(/\/g, ' ').replace(/\,/g, '');

  if (/[0-9]/g.test(str) == false && str.length != 0) {
    caesarsResult.textContent = result;
    successAlert(caesarsResult);
  } else if (str.length == 0) {
    caesarsResult.textContent = 'input is empty';
    dangerAlert(caesarsResult);
  } else {
    caesarsResult.textContent = 'Enter letters only';
    dangerAlert(caesarsResult);
  }
}

// !!! end of Caesars Cipher !!!
// !!! Fibonacci Calculator !!!

const fibonacciInputValue = document.querySelector('#fibonacci-input');
const fibonacciBtn = document.querySelector('#fibonacci-btn');
const fibonacciForm = document.querySelector('#fibonacci-form');
const fibonacciResult = document.querySelector('#fibonacci-selution');
let firstNum = 0;
let secondNum = 1;
let sequence;
let arr = [];
let result;

fibonacciForm.addEventListener('submit', function (e) {
  e.preventDefault();
  num = fibonacciInputValue.value;
  setBacktoDefault(fibonacciInputValue);
  if (num > 0 && num <= 50) {
    calcFibonacciRec(num);
  } else {
    fibonacciResult.textContent = 'value must be between 1 - 50';
    dangerAlert(fibonacciResult);
  }
});

// ## calc fibonacci (using recursion)
function calcFibonacciRec(num) {
  arr = [];
  fibonacciInputValue.textContent = num;
  num++;
  arr.push(firstNum);
  arr.push(secondNum);
  pushRec(num);

  function pushRec(num) {
    let value = arr.length;
    last = arr.length - 1;
    secondToLast = arr.length - 2;
    let nextNum = arr[last] + arr[secondToLast];
    arr.push(nextNum);
    if (arr.length < num) {
      pushRec(num);
    } else {
      result = arr[value];
      fibonacciResult.textContent = result;
      successAlert(fibonacciResult);
    }
  }
}

// !!! end of Fibonacci Calculator !!!
