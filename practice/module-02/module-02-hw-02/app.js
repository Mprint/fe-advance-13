/* eslint-disable max-len */
/* eslint-disable no-undef */
/*
Напиши скрипт имитирующий авторизацию пользователя.

Есть массив паролей зарегистрированных пользователей passwords. При посещении страницы, необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли массив passwords пароль введенный пользователем. Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attemptsLeft.

🔔 Используй цикл while или do...while

Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшееся количество попыток.
Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
*/

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
const attemptsLeft = 3;

for (let i = 0; i < attemptsLeft; i += 1) {
  user = prompt('введите пароль');
  n = attemptsLeft - i;

  if (passwords.includes(user) === true) {
    alert('Добро пожаловать!'); break;
  } else {
    alert(`Неверный пароль, у вас осталось ${n-1} попыток`);
  }
}
