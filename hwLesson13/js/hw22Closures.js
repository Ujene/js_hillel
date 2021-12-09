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

function getCounter(number) {
    return {
        number: typeof number === 'number' && !Number.isNaN(number) ? number : 0,
        value: function () {return this.number},
        increase: function () {this.number++},
        decrease: function () {this.number--}
    }
}

function getCounter2(number) {
    function Counter(number) {
        let num = (typeof number === 'number' && !Number.isNaN(number) ? number : 0);
        return {
            value : () => {return num},
            increase : () => {num++},
            decrease : () => {num--}
        }
    }
    return new Counter(number);
}
