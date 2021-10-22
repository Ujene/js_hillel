// ДЗ 17. Доп ДЗ - Условия (Принадлежность точки окружности)

//Даны координаты точки A(x = 4, y = 9) и радиус окружности (R = 10)
// с центром в начале координат. Используя тернарный оператор напишите код,
// который будет выводить сообщение о том, лежит ли данная точка внутри окружности
// или за её пределами. Для извлечения квадратного корня из числа z вам понадобится метод Math.sqrt(z).
// Подсказка: Длина гипотенузы находится по теореме Пифагора

const radius = 10;
const posX = 9;
const posY = 9;

console.log(Math.sqrt(posX**2 + posY ** 2) < radius ? "Точка внутри окружности" : "Точка вне окружности");