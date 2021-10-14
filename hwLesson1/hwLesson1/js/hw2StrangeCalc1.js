alert("Пробуем посчитать что-то, вывод будет в консоль");
let op1 = Number(prompt("Введите первое число"));
let op2 = Number(prompt("Введите второе число"));

console.log(add(op1, op2));
console.log(subtract(op1, op2));
console.log(multiply(op1, op2));
console.log(divide(op1, op2));

function divide(op1, op2) {
  if (op2 !== 0) {
    let res = op1 / op2;
    alert(`Результат деления: ${op1} / ${op2} = ${res}`)
  } else {
    let res = op1 / op2;
    alert(`Второе число 0, результат непредсказуем и вот он: ${res}`)
  }
}
function add(op1, op2) {
  let res = op1 + op2;
  alert(`Результат сложения: ${op1} + ${op2} = ${res}`);
}
function multiply(op1, op2) {
  let res = op1 * op2;
  alert(`Результат умножения: ${op1} * ${op2} = ${res}`)
}
function subtract(op1, op2) {
  let res = op1 - op2;
  alert(`Результат вычитания: ${op1} - ${op2} = ${res}`)
}
