const number = document.querySelectorAll(".calc__btn");
const screen = document.querySelector(".calc__screen");
const operator = document.querySelectorAll(".calc__operator");
const decimal = document.querySelector(".calc__decimal");
const clear = document.querySelector(".calc__clear");
const equal = document.querySelector(".calc__equal");

let equation = "";
console.log(equation);

const display = function (value) {
  screen.textContent = value;
};

number.forEach((num) => {
  num.addEventListener("click", function () {
    equation += num.value;
    display(equation);
    console.log(equation);
  });
});

operator.forEach((oper) => {
  oper.addEventListener("click", function () {
    equation += oper.value;
    display(equation);
    console.log(equation);
  });
});

const calculate = function (equation) {
  const operators = equation.match(/[+\-*/]/g);
  console.log("operators", operators);
  const operands = equation.split(/(?<=[+\-*/])/).map(parseFloat);

  console.log(`operands`, operands);

  let result = operands[0];
  console.log("operands[0]", operands);
  console.log("result", result);
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "+") {
      result += operands[i + 1];
    } else if (operators[i] === "-") {
      result -= operands[i + 1];
    } else if (operators[i] === "*") {
      result *= operands[i + 1];
    } else if (operators[i] === "/") {
      result /= operands[i + 1];
    }
  }

  if (equation.includes(".")) {
    return result.toFixed(2);
  } else {
    return result;
  }
};

equal.addEventListener("click", function () {
  const result = calculate(equation);
  display(result);
  equation = "";
});

clear.addEventListener("click", function () {
  equation = "";
  display("");
});
