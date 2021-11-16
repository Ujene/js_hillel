// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const arr1 = ['a', 'b', 'c', 'd'];
console.log(`Task 1: Result string is ${arr1[0]}+${arr1[1]}, ${arr1[2]}+${arr1[3]}`);

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
// Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
const arr2 = [2, 5, 3, 9];
const res2 = (arr2[0] * arr2[1]) + (arr2[2] * arr2[3]);
console.log(`Task 2: Result is ${res2}`);

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(`Task 3: Result is ${arr3[1][0]}`)

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const obj4 = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(`Task 4: result is ${obj4.js[0]}`);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

console.log(`Task 5: Fill array with char 'x', add 1 'x' to each new element result with length 5 is: ${fillArray5(5)}`);

function fillArray5(length){
    let char = 'x';
    let arr = [];
    for (let i = 0; i < length; i++){
        arr.push(char);
        char = char + 'x';
    }
    return arr;
}

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

console.log(`Task 6: Fill array with digits, '1' for first element, '22' for second, etc. Res for 5 elements is: ${fillArray6(5)}`);

function fillArray6(length){
    let arr = [];
    for (let i = 0; i < length; i++){
        let temp = '';
        for(let j = 0; j < (i + 1); j ++){
            temp = temp + (i + 1);
        }
        arr.push(temp);
    }
    return arr;
}


// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
// Первым параметром функция принимает значение, которым заполнять массив,
// а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

console.log(`Task 7: fill array with custom item and custom length. Result is: ${arrayFill7('z', 5)}`);

function arrayFill7(item, length) {
    let resArr = [];
    for (let i = 0; i < length; i++) {
        resArr.push(item);
    }
    return resArr;
}

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arr8 = [0, 0, 0, 0, 10];
console.log(`Task 8: Check how many elements you should add to reach 'value > 10' and answer is: ${howLongToTen(arr8)}`);

function howLongToTen(arr){
    let temp = 0;

    if (arr[0] > 10){
        return 1;
    }

    for (let i = 0; i < arr.length; i++){
        if(temp > 10){
            return i + 1;
        }
        temp = temp + arr[i];
    }

    return temp <= 10 ? "Value 10 can't be reached with this array" : arr.length;
}


// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Task 9: Reversed array is:" + reverseArray(arr9) + ", source array modified also");

function reverseArray(arr) {
    let resArr = arr;
    let temp;
    let operationsCount = resArr.length % 2 === 0 ? resArr.length / 2 : (resArr.length - 1) / 2

    for (let i = 0; i < operationsCount; i++){
        temp = resArr[(resArr.length - 1) - i];
        resArr[(resArr.length - 1) - i] = resArr[i];
        resArr[i] = temp;
        temp = null;
    }

    return resArr;
}


// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

const arr10 = [[1, 2, 3], [4, 5], [6]];

console.log(`Task 10: Sum of elements in 2d array is ${sumOfArrayElements(arr10)}`);

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(`Task 11: Sum of elements in 3d array is ${sumOfArrayElements(arr11)}`);


function sumOfArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum = sum + sumOfArrayElements(arr[i]);
        } else {
            sum = sum + arr[i];
        }
    }
    return sum;
}
