//5. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

const arr = [1, 2, 3, 4, 5];
let squareSum = 0;

for (let i = 0; i < arr.length; i++){
    squareSum = squareSum + (arr[i] ** 2);
}

console.log(squareSum);
