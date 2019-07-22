/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
const prices = [1000, 2000, 1500, 2700, 1600, 8000];

const combine = (names, prices) => {
  const res = [];
  for (const i in names) {
    res.push({ [names[i]]: prices[i] });
  }
  return res;
};
const products = combine(names, prices);

console.log(products); // массив объектов со свойствами name и price
