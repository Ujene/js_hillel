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

alert(`Число ${num} ${getDigitsCount(num)} ${positivityCheck(num)}`);

// 4. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
// Пользователь вводит поочерёдно через prompt числа.
// Используя конструкцию if..else, напишите код, который должен определять,
// какое из введенных чисел является наибольшим.

alert("Еще один фокус впереди, введите 3 числа и получи в ответ самое большое")

const num1 = getNumberFromUser();
const num2 = getNumberFromUser();
const num3 = getNumberFromUser();

alert(`Возвращаю наибольшее ${getBigger(getBigger(num1, num2), num3)}. Остальные оставлю у себя`);

//5. У треугольника сумма любых двух сторон должна быть больше третьей.
// Иначе две стороны просто <лягут> на третью и треугольника не получится.
// Пользователь вводит поочерёдно через prompt длины трех сторон.
// Используя конструкцию if..else, напишите код, который должен определять,
// может ли существовать треугольник при таких длинах.
// Т. е. нужно сравнить суммы двух любых строн с оставшейся третьей стороной.
// Чтобы треугольник существовал, сумма всегда должна быть больше отдельной стороны.

alert("Еще один раз попрошу, ввести 3 числа и я тебе скажу получится " +
    "построить треугольник с такими сторонами или нет, нажми OK как будешь готов.")

const triSide1 = getNumberFromUser();
const triSide2 = getNumberFromUser();
const triSide3 = getNumberFromUser();
const successMessage = `Треугольник со сторонами ${triSide1}, ${triSide2} и ${triSide1} получится`;
const unsuccessMessage = `Треугольник со сторонами ${triSide1}, ${triSide2} и ${triSide1} неполучится`;

if ((triSide1 + triSide2) > triSide3) {
    alert(successMessage);
} else {
    alert(unsuccessMessage);
}

alert((triSide1 + triSide2) > triSide3 ? successMessage : unsuccessMessage);


function getBigger(num1, num2) {
    if (num1 >= num2) {
        return num1
    } else {
        return num2
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

function removeMinus(num) {
    if (num < 0) {
        return num.toString().length - 1;
    } else {
        return num.toString().length;
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
