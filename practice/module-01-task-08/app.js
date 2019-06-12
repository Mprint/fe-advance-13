/*
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!

  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:

    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

let search = prompt('Введите число от 1 до 5');

if (search === null) {
    alert('Очень жаль, приходите еще!');
} else {
    switch (search) {
        case '1':
            search = 'Каталог хостелов';
            break;
        case '2':
            search = 'Каталог бюджетных отелей';
            break;
        case '3':
            search = 'Каталог отелей ***';
            break;
        case '4':
            search = 'Каталог отелей ****';
            break;
        case '5':
            search = 'Каталог лучших отелей';
            break;
        default:
            search = 'Введите число от 1 до 5';
    }
    alert(search);
}