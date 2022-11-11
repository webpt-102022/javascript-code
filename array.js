const students = [
  { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
  { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
  { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
  { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
  { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
];

// MAP

// ES5
const studentAges = students.map(function (elem, i, arr) {
  return elem.age
})

// ES6
const studentAges2 = students.map(student => student.age);


// FILTER

// const studentsOver18 = []; => Doing the same with a loop
// for (let i = 0; i < students.length; i++) {
//   if (students[i].age > 18) {
//     studentsOver18.push(students[i])
//   }
// }

// ES
const filteredArr = students.filter(function (elem) {
  if (elem.age > 50) {
    return true;
  }
})

// ES6
const filteredArr2 = students.filter(student => student.age > 17 && student.firstName === 'Jan');

const justNames = filteredArr.map(elem => elem.lastName);

// REDUCE

const strings = ['Hello', 'Guille', 'How', 'Are', 'You'];
const prices = [34, 45, 67, 12, 98, 666];

// ES5
const total = prices.reduce(function (total, currentValue) {
  return total + currentValue
}, 0)

// ES6
const total2 = prices.reduce((acc, val) => acc + val, 0);

// ES5
const sortedPrices = prices.sort(function (price1, price2) {
  if (price1 > price2) {
    return 1
  }
  if (price1 < price2) {
    return -1
  }
  if (price1 === price2) { return 0 }
})

// ES6 + short way de la comparació

const sortedInc = prices.sort((a, b) => a - b); // Increasing
const sortedDec = prices.sort((a, b) => b - a); // Decreasing

// REVERSE

const reversedArr = prices.reverse(); // Mutates the original array and returns a reference, reversed














