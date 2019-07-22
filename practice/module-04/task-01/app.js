/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/*
  Напиши скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - заменяет значение premium на false

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

function addProps(props, value, obj) {
  obj[props] = value;
}

function changeProps(props, value, obj) {
  obj[props] = value;
}

addProps('mood', 'happy', user);
// user.mood = 'happy';
console.log(user);

// user.hobby = 'javascript';
changeProps('hobby', 'javascript', user);
console.log(user);

// user.premium = false;
changeProps('premium', false, user);
console.log(user);

const stringEntriesByKeys = (obj) => {
  let res = '{\n';
  const keys = Object.keys(obj);
  for (const key of keys) {
    res += ` ${key}: ${typeof obj[key] === 'string' ? `'${obj[key]}'` : obj[key]}, \n `;
    // console.log(`${key} : ${obj[key]}`)
  }
  return `${res}}`;
};
console.log(`user = ${stringEntriesByKeys(user)}`);

const stringEntriesByEntries = (obj) => {
  let res = '{\n';
  const entries = Object.entries(obj);
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    res += ` ${key}: ${typeof value === 'string' ? `'${value}'` : value}, \n   `;
    // console.log(`${key}: ${value}`)
  }
  return `${res}}`;
};
console.log(`user = ${stringEntriesByEntries(user)}`);
