const students = [
  { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
  { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
  { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
  { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
  { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
];

// const studentCopy = students => No podemos hacer esto

// Maneras de copiar arrays
const numbers = [22, 6, 7, 21, 98, 56, [45, 67, 89]];
const numberCopy = JSON.parse(JSON.stringify(numbers)); // Deep copy
const spreadCopy = [...numbers] // => Spread operator: shallow copy

const arrCopy = [];
numbers.forEach(elem => arrCopy.push(elem)) // Iterando con cualquier loop: shallow copy

numberCopy[6][2] = 100;
// console.log('Original: ', numbers);
// console.log('Copy:', numberCopy);

let game = {
  name: '7 Wonders',
  minPlayers: 3,
  maxPlayers: 7,
  time: 60,
  editorial: {
    name: 'Asmodee',
    branch: 'Spain'
  }
}

// Maneras de clonar objetos
const boardgame = JSON.parse(JSON.stringify(game)) // JSON: Deep copy
const copyGame1 = Object.assign({}, game) // Object assign: shallow copy
const copyGame2 = { ...game } // Spread operator: shallow copy

const copyGame3 = {}; // Iterando: shallow copy
for (let key in game) {
  copyGame3[key] = game[key]
}

// boardgame.name = '7 Wonders Architect';
// boardgame.time = 30;
// boardgame.editorial.branch = 'France';

console.table('Original: ', game)
console.table('Copy: ', boardgame)
