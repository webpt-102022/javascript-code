// Function expression
const sum = function (num1, num2) {
  return num1 + num2;
}

// Function declaration
function doOperation(func, num1, num2) {
  return func(num1, num2);
}
//console.log(doOperation(sum, 8, 9));

// Arrow function
const greetUser = (user) => `Hello ${user}!`;
greetUser('Pau');

// Switch statement
function checkDayOfTheWeek(day) {
  let greet = '';
  switch (day) {
    case 'Monday':
      greet = "Oh shit it's Monday";
      break;
    case 'Friday':
    case 'Thursday':
      greet = "Your package will arrive in 72h"
      break;
    default:
      console.log('Hello world')
      break;
  }
  return greet;
}

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}






