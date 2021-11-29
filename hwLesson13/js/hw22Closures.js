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
        number: number || 0,
        value: function () {return this.number},
        increase: function () {this.number++},
        decrease: function () {this.number--}
    }
}

const counter = getCounter();
const counter2 = getCounter();

console.log(counter === counter2);
console.log(counter.value());
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.log(counter2.value());
counter2.decrease();
counter2.decrease();
counter2.decrease();
console.log(counter.value());
