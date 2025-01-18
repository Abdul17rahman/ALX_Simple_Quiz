const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

document.getElementById("add").addEventListener("click", function () {
  const x = parseFloat(num1.value) || 0;
  const y = parseFloat(num2.value) || 0;

  const result = add(x, y);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("subtract").addEventListener("click", function () {
  const x = parseFloat(num1.value) || 0;
  const y = parseFloat(num2.value) || 0;

  const result = subtract(x, y);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("multiply").addEventListener("click", function () {
  const x = parseFloat(num1.value) || 0;
  const y = parseFloat(num2.value) || 0;

  const result = multiply(x, y);
  document.getElementById("calculation-result").textContent = result;
});

document.getElementById("divide").addEventListener("click", function () {
  const x = parseFloat(num1.value) || 0;
  const y = parseFloat(num2.value) || 0;

  const result = divide(x, y);
  document.getElementById("calculation-result").textContent = result;
});
