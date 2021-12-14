// Для решения всех этих задач используйте методы массивов https://learn.javascript.ru/array-methods
// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arr1 = [1, 2, 3];
const additionalArr = [4, 5, 6];
const result1 = arr1.concat(additionalArr);
console.log(`Task 1: united array is ${result1}`);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arr2 = [1, 2, 3];
arr2.reverse();
console.log(`Task 2: Reversed array is ${arr2}`);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(`Task 3: Array after add some elements is:  ${arr3}`);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(`Task 4: Array after add some elements is: ${arr4}`);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

const arr5 = ['js', 'css', 'jq'];
console.log(`Task 5: First element of array is ${arr5[0]}`);


// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const arr6 = ['js', 'css', 'jq'];
console.log(`Task 6: First element of array is ${arr6[arr6.length - 1]}`);

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

const arr7 = [1, 2, 3, 4, 5];
const result7 = arr7.slice(0, 3);
console.log(`Task 7: Result array is ${result7}`);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

const arr8 = [1, 2, 3, 4, 5];
const result8 = arr8.slice(-2);
console.log(`Task 8: Result array is ${result8}`);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

const arr9 = [1, 2, 3, 4, 5];
arr9.splice(1, 2);
console.log(`Task 9: Result array is ${arr9}`);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

const arr10 = [1, 2, 3, 4, 5];
const result10 = arr10.splice(1, 3);
console.log(`Task 10: Result array is ${result10}`);

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, "a", "b", "c");
console.log(`Task 11: Result array is ${arr11}`);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr12 = [1, 2, 3, 4, 5];
arr12.splice(5, 0, 'e');
arr12.splice(4, 0, 'c');
arr12.splice(1, 0, 'a','b');
console.log(`Task 12: Result array is ${arr12}`);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(`Task 13: Sorted array is ${arr13}`);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

const arr14 = [5, 6, 7, 8, 9];
const sumOfElems = arr14.reduce((sum, current) => (sum + current), 0);
console.log(`Task 14: Sum in array is ${sumOfElems}`);


// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

const arr15 = [5, 6, 7, 8, 9];
arr15.map((value, index, array) => array[index] = (Math.sqrt(value)));
console.log(`Task 15: Squaring of array completed: ${arr15}`);

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.

const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const res16 = arr16.filter((value) => value < 0);
arr16.splice(0, arr16.length);
for (let i = 0; i < res16.length; i++){
    arr16[i] = res16[i];
}
console.log(`Task 16: Result array is ${arr16}`);

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.

const arr17 = [1,-3, 5, 6,-7, 8, 9,-11];
const res17 = arr17.filter((value) => (value % 2) === 0);
arr17.splice(0, arr17.length);
arr17.push(res17);
console.log(`Task 17: Result array is ${arr17}`);

// 18. Дан массив со строками ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']. Оставьте в нем только те строки, длина которых больше 5-ти символов.

const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const res18 = arr18.filter((value) => value.length > 5);
arr18.splice(0, arr18.length);
arr18.push(res18);
console.log(`Task 17: Result array is ${arr18}`);

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const res19 = arr19.filter((value) => Array.isArray(value));
arr19.splice(0, arr19.length);
arr19.push(res19);
console.log(`Task 19: Result array is ${arr19} < That are arrays converted to string type`);

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.

const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const countOfNegative = arr20.filter((value) => value < 0 ).length;
console.log(`Task 20: Count of negative values is ${countOfNegative}`);
