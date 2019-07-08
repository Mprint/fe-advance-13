/* eslint-disable max-len */
/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  Сравни эти значения и по результатам выведи:
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"   
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

const total = 100;
const ordered = 50;
// console.log(Number.isNaN(ordered));
if ((Number.isNaN(ordered) === false) && (total < ordered)) {
    console.log('На складе недостаточно товаров!');
} else if ((Number.isNaN(ordered) === false) && (total > ordered)) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else if ((Number.isNaN(ordered) === false) && (total === ordered)) {
    console.log('Вы забираете весь товар cо склада!');
} else {
    console.log('Введите целое число');
}