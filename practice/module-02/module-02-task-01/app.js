/* eslint-disable max-len */
/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива

users.shift(); // ["Poly", "Ajax", "Chelsey"]
console.log(users);

// Удалить последний элемент массива
users.pop(); // ["Poly", "Ajax"]
console.log(users);

// Добавить в начало массива пользователя "Lux"
users.unshift('Lux'); // ["Lux", "Poly", "Ajax"]
console.log(users);

// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
users.push('Jay', 'Kiwi'); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]
console.log(users);

// Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
users.splice(users.indexOf(userToDelete), 1);
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]


// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = 'Jay';
users.splice(users.indexOf(userToInsertBefore), 0, 'Kong');
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
