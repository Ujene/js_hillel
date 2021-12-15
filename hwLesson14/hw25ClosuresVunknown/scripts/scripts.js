//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.

function getRandomGenerator() {
    const maxDiapason = 100;
    let arr = [];

    function fillArray(maxDiapason) {
        const result = [];
        for(let i = 0; i < maxDiapason; i++){
            result.push(i+1);
        }
        return result;
    }

    return function getNumber() {
        if (arr.length < 1) {
            arr = arr.concat(fillArray(maxDiapason));
        }
        return arr.splice(Math.round(Math.random() * arr.length - 1), 1)[0];
    }
}

const rndGenerator = getRandomGenerator(); //искомая функция. При вызове rndGenerator() вернеться случайное значение из массива
