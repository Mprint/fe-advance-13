/* eslint-disable no-restricted-syntax */
/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const getNameWithTheMaxNumbers = (obj) => {
  const keys = Object.keys(obj);
  const max = 0;
  let name = '';
  for (const key of keys) {
    name = obj[key] > max ? key : name;
  }
  return name;
};
console.log(`max tasks had ${getNameWithTheMaxNumbers(tasksCompleted)}`);
