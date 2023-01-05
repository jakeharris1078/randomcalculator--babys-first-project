let generatedNum1;
let generatedNum2;
let operatorValue;

function replace1() {
  let newNum1 = Math.floor(Math.random() * 1000);
  document.getElementById('digits1').innerHTML = newNum1;
  generatedNum1 = newNum1;
  console.log(generatedNum1);
}

function replace2() {
  let newNum2 = Math.floor(Math.random() * 1000);
  document.getElementById('digits2').innerHTML = newNum2;
  generatedNum2 = newNum2;
}

function replaceOperatorPlus() {
  document.getElementById('operator').innerHTML = '+';
  operatorValue = '+';
}

function replaceOperatorMinus() {
  document.getElementById('operator').innerHTML = '-';
  operatorValue = '-';
}

function replaceOperatorTimes() {
  document.getElementById('operator').innerHTML = '*';
  operatorValue = '*';
}

function replaceOperatorDivide() {
  document.getElementById('operator').innerHTML = '/';
  operatorValue = '/';
}

function mathEquation() {
  let result = makeItMath(generatedNum1, generatedNum2, operatorValue);
  result = result.toFixed(2);
  document.getElementById('resultNum').innerHTML = result;
}

//function to take the inputs and convert it to math
function makeItMath(generatedNum1, generatedNum2, operatorValue) {
  let result;
  if (operatorValue === '+') {
    result = generatedNum1 + generatedNum2;
  } else if (operatorValue === '-') {
    result = generatedNum1 - generatedNum2;
  } else if (operatorValue === '*') {
    result = generatedNum1 * generatedNum2;
  } else if (operatorValue === '/') {
    result = generatedNum1 / generatedNum2;
  }
  return result;
}
