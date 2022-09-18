var num1 = prompt("Enter a number");
var userOperator = prompt("Enter an operator(+, -, *, /)");
var num2 = prompt("Enter another number");

switch(userOperator) {
  case '+':
    add(num1, num2)
    break;
  case '-':
    subtract(num1, num2)
    break;
  case '*':
    multiple(num1, num2)
    break;
  case '/':
    divide(num1, num2)
    break;
  default:
    console.log("Please complete prompt correctly")
}




