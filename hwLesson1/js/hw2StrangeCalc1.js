alert("Пробуем посчитать что-то, вывод будет в консоль");
const op1 = Number(prompt("Введите первое число"));
const op2 = Number(prompt("Введите второе число"));

console.log(add(op1, op2));
console.log(subtract(op1, op2));
console.log(multiply(op1, op2));
console.log(divide(op1, op2));

function divide(op1, op2) {
  const res = op1 / op2;
  if (op2 !== 0) {
    return (`Результат деления: ${op1} / ${op2} = ${res}`)
  } else {
    let res = op1 / op2;
    return (`Делимое ${op1}, делитель 0, результат непредсказуем. получилось: ${res}`)
  }
}
function add(op1, op2) {
  const res = op1 + op2;
  return(`Результат сложения: ${op1} + ${op2} = ${res}`);
}
function multiply(op1, op2) {
  const res = op1 * op2;
  return(`Результат умножения: ${op1} * ${op2} = ${res}`)
}
function subtract(op1, op2) {
  const res = op1 - op2;
  return(`Результат вычитания: ${op1} - ${op2} = ${res}`)
}
