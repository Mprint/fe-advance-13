/* eslint-disable no-restricted-syntax */
/*
  Напиши функцию countTotalSalary(salaries).

  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.

  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/

const countTotalSalary = (obj) => {
  let sum = 0;

  const keys = Object.keys(obj);
  for (const key of keys) {
    sum += obj[key];
  }
  return sum;
};

// Вызовы функции для проверки
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330
