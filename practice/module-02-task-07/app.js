/*
  Создай игру угадай число.

  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.

  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.

  Пусть prompt говорит "Введите цифру между x и y", где x и y
  соотвественно самый маленький и самый большой элемент массива.

  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать.
  Проверить содержит ли в себе массив numbers введенное число.

    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

const numbers = [12, 15, 25, 37, 41, 62, 74, 83];
const min = numbers[0];
const max = numbers[numbers.length - 1];

const num = prompt(`Введите цифру между ${min} и ${max}`);

// eslint-disable-next-line eqeqeq
if (numbers.includes(Number(num)) && num != min && num != max) {
  alert("Поздравляем, Вы угадали!");
} else {
  alert("Сожалеем, Вы не угадали!");
}
