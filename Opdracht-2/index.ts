// copy all code above without types

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const printResult = (a, b, operator, result) => {
  console.log(`${a} ${operator} ${b} = ${result}`);
}

const calculate = (a, b, operator) => {
  switch (operator) {
    case "+":
      printResult(a, b, operator, add(a, b));
      return add(a, b);
    case "-":
      printResult(a, b, operator, subtract(a, b));
      return subtract(a, b);
    case "*":
      printResult(a, b, operator, multiply(a, b));
      return multiply(a, b);
    case "/":
      printResult(a, b, operator, divide(a, b));
      return divide(a, b);
    default:
      console.log("Invalid operator");
      return NaN;
  }
}

calculate(2, 3, "+"); // 2 + 3 = 5
calculate(2, 3, "-"); // 2 - 3 = -1
calculate(2, 3, "*"); // 2 * 3 = 6
calculate(2, 3, "/"); // 2 / 3 = 0.6666666666666666
calculate(2, 3, "x"); // Invalid operator
