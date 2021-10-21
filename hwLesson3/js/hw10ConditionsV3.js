// 1. Вам даны две переменные x и y, менять их не нужно.
// При помощи тернарного оператора сравните их и если x больше, чем y, то выведите фразу: "x больше, чем y",
// иначе выведите фразу: "x не больше, чем y".
// let x = 10, y = 7;
let x = 10, y = 7;
console.log(x > y ? "x больше, чем y" : "x не больше, чем y");

// 2. Пользователь вводит какое-то число (num).
// Используя конструкцию if..else, напишите код, который делает запрос:
// «Введите число».Если посетитель вводит четное число,
// то выводить «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное
const num = getNumberFromUser();
if ((num % 2) === 0) {
    alert("Введенное число " + num + " четное");
} else {
    alert("Введенное число " + num + " нечетное");
}

// 3. Напишите код, который предлагает пользователю ввести целое число.
// Нужно вывести на экран сколько в этом числе цифр,
// а также положительное оно или отрицательное.
// Например, "Число " + num + " однозначное положительное".
// Достаточно будет определить, является ли число однозначным, двухзначным или трехзначным и более.

alert(buildAnswerString(num));

function buildAnswerString(num){
    return `Число ${num} ${getDigitsCount(num)} ${positivityCheck(num)}`;
}

function removeMinus(num) {
    if (num < 0) {
        return num.toString().length - 1;
    } else {
        return num.toString().length;
    }
}

function getDigitsCount(num) {
    switch (true) {
        case (removeMinus(num) === 1):
            return "однозначное";
        case (removeMinus(num) === 2):
            return "двузначное";
        case (removeMinus(num) === 3):
            return "трехзначное";
        default:
            return "болеетрехзначное"
    }
}

function positivityCheck(num) {
    switch (true) {
        case num > 0:
            return "положительное";
        case num < 0:
            return "отрицательное";
        default:
            return "ноль"
    }
}

function getNumberFromUser() {
    const num = prompt("Введите число, дробное будет округлено");
    if (!isNaN(Number(num)) && num !== null && num !== undefined && num.length > 0) {
        return Math.round(Number(num));
    } else {
        alert("Введенное значение не похоже на число, нажмите ОК и попробуйте еще раз");
        return getNumberFromUser();
    }
}
