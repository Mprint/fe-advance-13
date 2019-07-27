/* eslint-disable no-restricted-syntax */
/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/
const getAllPropValues = (arr, props) => {
  if (!Array.isArray(arr)) return [];
  if (arr.length === 0) return [];

  const value = [];
  for (const key of arr) {
    if (props in key) {
      value.push(key[props]);
    }
  }
  return value;
};

const users = [
  { name: 'Poly', age: 7, mood: 'happy' },
  { name: 'Mango', age: 4, mood: 'blissful' },
  { name: 'Ajax', age: 3, mood: 'tired' },
];

const resName = getAllPropValues(users, 'name');

console.assert(
  resName.length === 3
  && resName[0] === 'Poly'
  && resName[1] === 'Mango'
  && resName[2] === 'Ajax',
  'Error name',
);
// Вызовы функции для проверки

console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']

console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']

console.log(getAllPropValues(users, 'active')); // []
