/* eslint-disable max-len */
/*
Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране доставка не доступна'.

Ниже приведен список стран и стоимость доставки.

китай - 100 кредитов
южная америка - 250 кредитов
австралия - 170 кредитов
индия - 80 кредитов
ямайка - 120 кредитов
PS: используй switch
*/
const country = prompt('Введите страну доставки');
let price;

switch (country.toLowerCase()) {
    case 'китай':
        price = '100';
        alert(`Доставка в ${country.toUpperCase()} будет стоить ${price} кредитов`);
        break;

    case 'южная америка':
        price = '250';
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'австралия':
        price = '170';
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'индия':
        price = '80';
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;

    case 'ямайка':
        price = '120';
        alert(`Доставка в ${country} будет стоить ${price} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
}
console.log(country);