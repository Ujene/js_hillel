alert("Пробуем посчитать что-то");
checkOperationType(prompt("Для выбора операции введите 'add' - сложение, " +
  "'sub' - вычитание, 'mult' - умножение, 'div - деление"));


function checkOperationType(operationType) {
  if (operationType === 'add' || operationType === 'sub' || operationType === 'mult' || operationType === 'div') {
    let op1 = checkOperandType(prompt("Введите первое число"));
    let op2 = checkOperandType(prompt("Введите второе число"));
    switch (operationType) {
      case "add":
        add(op1, op2);
        break;
      case "div":
        divide(op1, op2);
        break;
      case "mult":
        multiply(op1, op2);
        break;
      case "sub":
        subtract(op1, op2);
        break;
      default:
        alert("Что-то пошло не так, обратитесь к системному администратору");
        break;
    }
  } else {
    checkOperationType(prompt("Не понимаю, что вы хотите сделать, для выбора операции введите 'add' - сложение," +
      " 'sub' - вычитание, 'mult' - умножение, 'div - деление"));
  }
}

function checkOperandType(variable) {
  if (!isNaN(Number(variable))) {
    return Number(variable);
  } else checkOperandType(prompt("Похоже вы ввели не число, попробуйте еще раз"));
}

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
