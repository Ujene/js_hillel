// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:
//
// строку
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов нет, то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в зависимости от того условия, по которому не прошла проверка.
//
// Результат вызова функции нужно вывести в консоль — после завершения функции.
// Например:
// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***
// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello
// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки, нужно строку обрезать при помощи метода substr

console.log(padString("", 5, 'j', false))

function padString(str, charsCount, char, rightSide = true) {
    if (str !== null && str !== undefined) {
        if (!isNaN(Number(charsCount)) && charsCount !== null && charsCount !== undefined && String(charsCount).length > 0) {
            if (str.length < Number(charsCount)) {
                if (char !== null && char !== undefined && char.length === 1) {
                    if (rightSide) {
                        return str.concat(buildCharsString(char, charsCount - str.length));
                    }
                    return buildCharsString(char, charsCount - str.length).concat(str);
                }
                return "arg char is undefined or contains more then 1 symbol"
            } else {
                return str.substr(0, str.length - charsCount);
            }
        }
        return "arg charsCount is undefined or NaN"
    }
    return "arg str is undefined"
}

function buildCharsString(char, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result = result.concat(char);
    }
    return result;
}
