// Ваша функция должна повторять базовый функционал метода flat, но с некоторыми доработками.
//
//     1. Функция принимает только 1 аргумент - массив,
//     2. Функция возвращает только одномерный массив
//
// Если пользователь передает больше 1-го аргумента, выкидывать ошибку в консоль
// throw new Error('Function accepts only 1 argument, too much arguments provided');
// Если в функцию передали многомерный массив то она должна вернуть новый одномерный массив
// Если в функцию передали одномерный массив, то она должна вернуть новый массив являющийся полной копией переданного
// P.S использование метода flat запрещено
// P.P.S если найдете пробел или не точность в описании задаче, отпишите мне в телегу и поправим

function myFlat(array) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            result = result.concat(myFlat(array[i]));
        } else {
            result = result.concat(array[i]);
        }
    }
    return result;
}
