
const ta = 'Marina'; // Variable shadowing

if (true) {
  const ta = 'Guillem';
  console.log(ta);
}

console.log(myFunction)

// Function declaration
function myFunction(num1, num2) { // var
  console.log(arguments)
  return num1 + num2;
}

myFunction(3, 4, 5, 6)

// Function expression = función anónima almacenada en una variable
let mySecondFunction = function (num1, num2) {
  return num1 + num2;
}

mySecondFunction()

// Arrow function
const sumFunction = (num1, num2) => { // Evolución del function expression
  const result = (num1 + num2)
  return result;
}


// Callback functions
const step1 = () => {
  console.log('Make the dough')
}

const step2 = () => {
  console.log('Add tomato and mozarella')
}

const step3 = () => {
  console.log('Add bacon')
}

const step4 = () => {
  console.log('Put in oven')
}

const makePizza = (func1, func2, func3, func4) => {
  func1();
  func2();
  func3();
  func4();
}

makePizza(step1, step2, step3, () => console.log('Put in oven')); // Callback function: la puedo crear aquí mismo

const numbers = [1, 2, 3];

const add2 = (elem, i, arr) => {
  arr[i] = elem + 2;
}

numbers.forEach(add2) // Con callback function creada fuera
numbers.forEach((num, i, arr) => arr[i] = num + 2) // Con callback function creada aquí mismo (en este caso una arrow function anónima)




