//Task1
let admin;
let name;
name = "Джон";
admin = name;
alert(admin);

//Task 2.1 Переменная для названия нашей планеты
const thirdPlanet = "Earth"
//Если например планируется описание солнечной системы,
//можно продолжить логический ряд констант: firstPlanet, secondPlanet etc

//Task 2.2 Текущий посетитель сайта.
const currentUser = "Dummy user";

//Task 3 Контекстное преобразование. При сложении строки и какого-то иного примитивного типа данных,
// примитивный тип данных будет приведен к строковому, а после произойдет конкатенация строк
// Почему? Магия JS и нестрогая типизация.
const value = '10' + 10;
console.log(typeof value);
console.log(value)
