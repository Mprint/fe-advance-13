/* eslint-disable max-len */
/*
На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

Напиши скрипт который:

Если в prompt была нажата Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let msg = prompt('Введите количество дроидов которые хотите приобрести');

if (msg === null) {
    msg = 'Отменено пользователем!';
    // console.log(typeof msg);
} else if (msg > 0 || Number.isNaN(msg)) {
    totalPrice = msg * pricePerDroid;
    const remainder = credits - totalPrice;
    if (totalPrice > credits) {
        msg = ('Недостаточно средств на счету!');
    } else {
        msg = (`Вы купили ${msg} дроидов, на счету осталось ${remainder} кредитов.`);
    }
} else {
    msg = 'Введите целое число больше нуля';
}
alert(msg);