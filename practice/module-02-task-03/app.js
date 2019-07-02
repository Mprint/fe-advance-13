/* eslint-disable prefer-const */
/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// В переменной message хранится произвольная строка
const message = 'Proin sociis natoque et magnis parturient montes mus';
let price = 0;
const coast = 10;

// Разбить строку в массив, разделитель - пробел, и записать в переменную words
let words = message.split(' ');
console.log(words);

// Выведи в консоли длину массива words
console.log(words.length); // 8

// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
price = coast * words.length;
console.log(price); // 80
