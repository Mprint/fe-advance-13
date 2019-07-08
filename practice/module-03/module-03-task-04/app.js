/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

function getPx(str) {
  if (str === Number(str)) {
    return null;
  }
  return parseFloat(str);
}
// Вызовы функции для проверки
console.log(getPx('10.2px') === 10.2); // true
console.log(getPx('10') === 10); // true
console.log(getPx(' 0 kj') === 0); // true
console.log(getPx(-1)); // null
console.log(getPx(10)); // null
