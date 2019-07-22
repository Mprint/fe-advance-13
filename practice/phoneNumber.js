const usersNumberPhone = '096)0 746( 22 0; +346 04-145 483; +38 099 5295205; +38 (050) 511-37-00 ';
console.log(usersNumberPhone.split(' ').join(''));

const deleteSpace = function deleteSpace(string) {
  return string.split(' ').join('');
};

const deleteDash = function deleteDash(string) {
  return string.split('-').join('');
};

const deleteLeftBracket = function deleteLeftBracket(string) {
  return string.split('(').join('');
};

const deleteRightBracket = function deleteRightBracket(string) {
  return string.split(')').join('');
};

const clearString = function clearString(string) {
  deleteSpace(string);
  deleteDash(string);
  deleteLeftBracket(string);
  deleteRightBracket(string);
};

console.log(clearString(usersNumberPhone));
// console.log(deleteDash(usersNumberPhone));
// console.log(deleteLeftBracket(usersNumberPhone));
// console.log(deleteRightBracket(usersNumberPhone));
