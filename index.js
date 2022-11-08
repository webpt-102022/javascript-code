// Function expression (function but in a variable)
const sum = function (num1, num2) {
  return num1 + num2;
}

// Function declaration (regular way to do functions)
function doOperation(func, num1, num2) {
  return func(num1, num2);
}
//console.log(doOperation(sum, 8, 9));

// Arrow function with implicit return
const greetUser = (user) => `Hello ${user}!`;

// Arrow function with regular return
const greetUser2 = (user) => {
  return `Hello ${user}!`;
}

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

function runCode() {
  // for (counter variable; condition to keep counting; what to do with the counter){}
  for (let counter = 0; counter < iterable.length; counter++) {
    let result = iterable[counter] + 1;
    //console.log(result);
  }

  const endNumber = 31;
  let i = 32;

  while (i < endNumber) { // Runs when the condition is matched
    i++;
    if (i === 5) {
      continue; // Continue statement will skip the rest of this iteration and continue with the next iteration
    }
    //console.log(iterable[i])
  }

  do { // Runs one time and then when the condition is matched
    console.log('Hello')
    if (i === 10) {
      break; // Break will stop the loop. Won't read rest of the code underneath
    }
    //console.log(iterable[i])
  } while (i < endNumber);


  for (const value of student) { // for value of iterableVariable (array o string)
    console.log(value)
  }

  const obj = {
    username: 'Pepe',
    age: 32,
  }

  for (const key in obj) { // To iterate through the keys of a given object
    console.log(key)
  }
}

const arr = [1, 2, 3, 4, 5, [7, 8, 9]];
console.log(arr[5][2])

const deletedElements = [];

// arr.splice(2, 2, 18, 20, 23); // splice(index, how many to delete, what to add)
// returns an array with the deleted elements

const index = arr.indexOf(5); // When I don't know the index
// console.log(index);
// console.log(arr.splice(index, 1, 7));
// console.log(arr);

// ******** ARRAY METHODS **********
// arr.pop() => Delete last element. Returns deleted element
// arr.shift() => Delete primer element. Returns deleted element
// arr.indexOf(elem) => Returns the index of the given element. If the element doesn't exist, returns -1
// arr.unshift(elem) => Adds element to the beginning of the array. Returns new length of array
// arr.push(elem) => Adds element to the end of array. Returns new length of array
// arr.forEach(function(elem, index, arr){}) => Iterates through the array and executes the given function for each element of the array

// function consoleItems(item, index, arr) { // You can declare it outside
//   arr2.push(item);
//   // console.log(arr2)
// }

// arr.forEach(consoleItems) // And then REFERENCE it
// arr.forEach((elem, i, arr) => {}) // forEach with arrow function

// let total = 0;

// arr.forEach((num, i, arr) => { // Arrow function
//   console.log(i, num)
// })

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// console.log(matrix[1][2]) // I can access multiple levels

// function sayHello(username) {
//   console.log(`Hello ${username}`)
// }

// arr.push(sayHello); // I can add functions to arrays
// console.log(arr[6]('Gerard')) // I can call functions from arrays

// To get random element from an array we can use Math.random()
// const names = ['Presidenta', 'GG', 'Guille', 'Marc'];
// const random = Math.floor(Math.random() * names.length);
// console.log(random)
// console.log(names[random])


// ***************+ OBJECTS ***************
const student = {
  name: 'Olivia',
  age: 32,
  level: 'intermediate',
  address: {
    street: 'Pamplona'
  },
  scholarship: true,
  doSomething: () => {
    console.log('Bye')
  },
  action() {
    console.log('Hello')
  }
}

console.log(student.address.street)

// student.action()
//console.log(student.age) // Dot notation
//console.log(student['age']) // Bracket notation

// for (let key in student) {
//   console.log(key)
// }

// Object.seal(student);
// Object.freeze(student);
student.email = 'olivia@gmail.com'
student.age = 44;
// console.log('email' in student)
delete student.level;

// console.table(student)

const classRoom = {
  room: 23,
  teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25, specialty: 'WEB DEV' },
  students: [
    { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
    { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
    { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
    { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
    { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
  ],
  action: function () {
    console.log('Hello')
  },
  encrypt: Symbol(2),
  year: undefined,
  range: null
};

classRoom.teacher.specialty = classRoom.teacher.specialty.toLowerCase();
classRoom.students[2].age

// ********* SHALLOW COPY VS. DEEP COPY *************
const names = ['Manolito', 'Perico', 'Zamburano', [1, 2, 3]];

const namesCopy = [];
for (let i = 0; i < names.length; i++) { // Shallow copy: with loops
  namesCopy.push(names[i])
}

namesCopy[3][2] = 22;
// console.table(names)
// console.table(namesCopy)

const classRoomCopy = {};

for (let key in classRoom) {
  classRoomCopy[key] = classRoom[key]
}

// console.log(classRoomCopy);

function myFuncton





















