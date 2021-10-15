// Task #1
// 1. Создайте пустой объект user.
// 2. Добавьте свойство name со значением John.
// 3. Добавьте свойство surname со значением Smith.
// 4. Измените значение свойства name на Pete.
// 5. Удалите свойство name из объекта.

const user = Object();
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


// Task #2: Изменяемость объекта переменная которого была объявленна с помощью ключевого слова 'const'
//Можно ли изменить объект, объявленный с помощью const?
const user2 = {
    name: "«John»"
};
// --- Изменить объект можно, изменить ссылку на объект(присвоить переменной другое значение) нет. =>
//=> изменение value для поля name в объекте user2 сработает и value будет измененено.
// это будет работать?
user2.name = "«Pete»";




//Task #3: Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const sum = getSalariesSum(salaries);
//console.log(sum);

//Дополнительные валидации перед выполнением цикла опущенны
//т.к. предполагаю, что объект и его содержимое было предварительно провалидировано перед тем как передано в функцию
function getSalariesSum(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum = sum + salaries[key]
    }
    return sum;
}
