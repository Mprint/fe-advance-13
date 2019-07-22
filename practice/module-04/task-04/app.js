/*
  Напиши функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

const isObjectEmpty = obj => Object.keys(obj).length === 0;

// Вызовы функции для проверки
console.assert(
  isObjectEmpty({}) === true,
  'Error: no properties',
); // true

console.log(
  isObjectEmpty({ a: 1 }),
); // false

console.log(
  isObjectEmpty({ a: 1, b: 2 }),
); // false
