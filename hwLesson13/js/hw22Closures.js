// Створіть функцію counter, яка буде створювати лічильник і мати один
// необов'язковий параметер типу number. Виклик функції має вертати об'єкт (лічильник)
// з тьома методами: increase, decrease, value.
// Виклик метода
// 1 value має повертати поточне значення лічильника,
// 2 increse - збільшувати його на 1,
// 3 decrease - зменшувати.
// Виклик функції counter має створювати незалежний лічильник
// - це значить, що виклик методів одного лічильника ніяк не має впливати на будь-який інший лічильник.

//

function getCounter(number){
    return {
        number: typeof number === 'number' && !Number.isNaN(number) ? number : 0,
        value: function () {return this.number},
        increase: function () {this.number++},
        decrease: function () {this.number--}
    }
}

const counter = getCounter(5);
const counter2 = getCounter(33);
const counter3 = getCounter("Byba");
const counter4 = getCounter(NaN);

console.log(counter === counter2); //should be false
console.log(counter.value()); // should be 5
console.log(counter2.value()); // should be 33
console.log(counter3.value()); // should be 0
console.log(counter4.value()); // should be 0

counter.decrease();
counter.decrease();
counter3.increase();
counter3.increase();

console.log(counter.value()); //should be 3
console.log(counter3.value()); //should be 2
