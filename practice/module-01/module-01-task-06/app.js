/*
  Напиши скрипт который:
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

let count = prompt('Введите произвольное целое число', '');

if (count === null) {
    count = 'Ну и ладно, пока!';
    const test = 'Ну и ладно, пока!';
    console.assert(count === test, 'when push cansel');

} else if (Number.isInteger(Number(count)) === true) {
    console.log(Number.isInteger(count));
    count = 'Спасибо';
    const test = 'Спасибо';
    console.assert(count === test, 'when push count');
} else {
    count = 'Необходимо было ввести целое число!';
    const test = 'Необходимо было ввести целое число!';
    console.assert(count === test, 'when push symbol');
}
alert(count);