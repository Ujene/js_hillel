// Запросить у пользователя 2 числа (число, степень) после чего вывести ему результат во всплывающем окне
// Основная функция mainFunction
// 1. Пишем функцию, которая принимает в качестве параметра callback.
// 2. В теле функции вам нужно написать код, который будет запрашивать у юзера 2 числа — эти числа должны храниться в разных переменных.
// 3. Также в теле функции нужно вызвать callback, который вы передаете в качестве аргумента.
// 4. При вызове callback в него нужно передать аргументами те 2 числа, которые вы запрашивали у пользователя ранее.
//
// Callback функция exponentiation,  эта функция будет передаваться в mainFunction в качестве аргумента
// 1. Функция должна принимать 2 параметра: те числа, которые мы ей передаем в основной функции в пункте 4 «Основной функции».
// 2. В теле функции нам нужно возвести число в степень и записать результат этой операции в переменную.
// 3. Также в теле функции нужно написать код, который будет выводить пользователю результат во всплывающем окне.


function main(cbFunc){
    const arg1 = getNumberFromUser();
    const arg2 = getNumberFromUser();

    cbFunc(arg1, arg2)
}

function exponentiation(arg1, arg2){
    const result = BigInt(arg1) ** BigInt(arg2);
    alert(result);
}

function division(arg1, arg2){
    const result = arg1 / arg2;
    alert(result);
}

function multiply(arg1, arg2){
    const result = arg1 * arg2;
    alert(result);
}

function modulo(arg1, arg2){
    const result = arg1 % arg2;
    alert(result);
}


main(exponentiation);
main(division);
main(multiply);
main(modulo);

function getNumberFromUser() {
    const num = prompt("Введите число, дробное будет округлено");
    if (!isNaN(Number(num)) && num !== null && num !== undefined && num.length > 0) {
        return Math.round(Number(num));
    } else {
        alert("Введенное значение не похоже на число, нажмите ОК и попробуйте еще раз");
        return getNumberFromUser();
    }
}
