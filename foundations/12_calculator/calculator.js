const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return (arr.length === 0) ? 0 : arr.reduce((total, num) => total * num);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
	let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
