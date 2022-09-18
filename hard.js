var finalNumber = '';

function add(num1, num2) {
  finalNumber = parseInt(num1) + parseInt(num2)
  return console.log(num1 + userOperator + num2 + " = " + finalNumber);
}

function subtract(num1, num2) {
  finalNumber = parseInt(num1) - parseInt(num2)
  return console.log(num1 + userOperator + num2 + " = " + finalNumber);
}

function multiple(num1, num2) {
  finalNumber = parseInt(num1) * parseInt(num2)
  return console.log(num1 + userOperator + num2 + " = " + finalNumber);
}

function divide(num1, num2) {
  finalNumber = parseInt(num1) / parseInt(num2)
  return console.log(num1 + userOperator + num2 + " = " + finalNumber);
}

