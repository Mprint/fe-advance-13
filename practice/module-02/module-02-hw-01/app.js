/* eslint-disable no-restricted-syntax */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/*
Напиши скрипт со следующим функционалом:

При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

let input;
const numbers = [];
let total = 0;
*/

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('введите число');
  console.log(input);
  if (input == null) break;
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    // eslint-disable-next-line no-continue
    continue;
  }
  numbers.push(Number(input));
}
console.log(numbers);

if (numbers.length > 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    console.log(typeof Number(numbers[i]));
    total += numbers[i];
  }
} else {
  alert('Введите число');
}

console.log(`Общая сумма чисел равна ${total}`);
