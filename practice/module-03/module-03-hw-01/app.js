/* eslint-disable func-names */
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return (!allLogins.includes(login));
};

const addLogin = function (allLogins, login) {
  let message;
  if (!isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
  } else if (!isLoginUnique(allLogins, login)) {
    console.log('Такой логин уже используется!');
  } else {
    logins.push(login);
    console.log('Логин успешно добавлен!');
  }
  return message;
};

// console.log( isLoginUnique(logins,'Man1go'))

// Вызовы функции для проверки
addLogin(logins, 'Mango1'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
