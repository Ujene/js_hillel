// Створіть функцію insertWordInto, яка буде мати один параметер типу string.
// Це буде рядок, що може мати набір слів розділених пробілом або одне слово, або бути порожнім.
// Вона буде вертати функцію, що теж має лише один параметер типу string.
// Цей параметр має приймати довільне значення(або слово або набір слів), але не порожнє.
// Виклик повернутої функції має вставляти другий параметр у будь-який пробіл першого параметру,
// або на початок рядку, або у кінець, додаючи пробіли навколо значення,
// що вставляється(якщо воно не має пробілів з країв). Наприклад,
//
// const insert = insertWordInto('hello world')
// const result = insert('Odesa') // -> 'hello Odesa world'
// const secondResult = insert('Odesa') // -> 'Odesa hello world'
// const thirdResult = insert('Odesa') // -> 'hello world Odesa'
//
// // optional
// const fourthResult = insert('Odesa') // -> 'Odesa hello world':
// лише на цьому кроці вставка слова повторилась, бо до цього вже були перебрані всі 3 можливі варіанти вставки
// Необов'язково: кожен виклик повернутої функції має вставляти другий
// параметер у різні місця першого параметру, поки не переберуться всі
// можливі варіанти вставки і лише тоді їм дозволено повторюватись.

function insertInto(incomingString) {
    if (typeof incomingString !== 'string'){
        throw new TypeError("Argument should be a sting")
    }

    const position = getRandomPosition(incomingString.split(' ').length);

    function getRandomPosition(diapason) {
        let arr = [];

        function fillArray(diapason) {
            const result = [];
            for(let i = 0; i < diapason + 1; i++){
                result.push(i)
            }
            return result;
        }

        return function getElementPosition() {
            if (arr.length < 1) {
                arr = arr.concat(fillArray(diapason));
            }
            return arr.splice(Math.round(Math.random() * (arr.length - 1)), 1)[0]
        }
    }

    return function (str) {
        if (typeof str !== 'string' || str.length < 1){
            throw new TypeError("Argument should be a sting, and cannot be empty")
        }
        const currentPosition = position()
        if(incomingString.length > 0){
            const result = incomingString.split(' ')
            result.splice(currentPosition, 0, str);
            return result.join(' ');
        } else {
            return str;
        }
    }
}

//Rows for check
const str = insertInto('-- -- --'); //Parent string
const triesCount = 4;
for(let i = 0; i < triesCount; i++){
    console.log(str('WWW')) //Inserting parasite string
}
