// Запросить у пользователя число, если число является простым то выводим в консоль true иначе false

while (true) {
    const num = prompt("Введите число и посмотрите в консоли простое ли оно. true - простое, false - сложное");
    if (!isNaN(Number(num)) && num !== null && num.length > 0) {
        console.log(`${num} - ${isNumberSimple(num)}`);
    } else {
        alert("В поле ввода попала какая-то ошибка, попробуйте обновить страницу и сможете снова играться");
        break;
    }
}

function isNumberSimple(num) {
    if (num === 0) {
        return "вы ввели ноль, а это не тру. Я незнаю простое это число или нет"
    } else {
        for (let i = 2; i < num; i++) {
            if ((num % i) === 0) {
                return false;
            }
        }
        return true;
    }
}
