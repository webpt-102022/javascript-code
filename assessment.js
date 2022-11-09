// 1. Calculate a product x,y
function product(x, y) { // Me piden que multiplique, devuelvo el resultado
  return x * y;
}


// 2. Find max of two numbers
function maxOfTwoNumbers(a, b) { // Devuelvo el más grande de los dos
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// 3. Find max of three numbers 
function maxOfThreeNumbers(a, b, c) { // Esta es una manera, ir comparando
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c
  }
}

function maxOfThreeNumbers(a, b, c) { // Esta es otra manera
  return Math.max(a, b, c) // Hay un método que te devuelve el máximo directamente
}


// 4. Check if number is even
function isEven(num) {
  if (num % 2 === 0) { // Si al dividirlo entre 2, no hay resto, es que es par
    return true;
  } else {
    return false;
  }
}


// 5. Sum an array of numbers
function sumArray(numbers) { // => Manera con for loop
  let sum = 0; // Me declaro un contador
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Voy sumando en cada iteración
  }
  return sum; // devuelvo el total
}

function sumArray(numbers) { // => Manera con forEach
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

// 6. Find max of an array of numbers
function maxOfArray(numbers) { // => Manera con for loop
  let max = 0; // Variable para ir almacenando el más grande que vaya encontrando
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) { // Voy comprobando en cada iteración y si es más grande, lo sustituyo
      max = numbers[i];
    }
  }
  return max;
}

function maxOfArray(numbers) { // => Manera con forEach
  let max = 0;
  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  })
  return max;
}


// 7. Find the longest string of an array of strings
function longestString(strings) { // Manera con for loop
  let longest = strings[0]; // Empiezo por un largo, puede ser el primero del array
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) { // Voy iterando y si el que estoy mirando es más largo,
      longest = strings[i]; // lo sustituyo
    }
  }
  return longest;
}

function longestString(strings) { // Manera con forEach
  let longest = strings[0]; // Empiezo por un largo, puede ser el primero del array
  strings.forEach((str) => { // La misma lógica, voy iterando
    if (str.length > longest.length) { // Si es el string que miro es más largo que el que me he guardado antes
      longest = str; // Lo sustituyo
    }
  })
  return longest;
}


// 8. Get full name of a given object
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}


// 9. Does word exist in an array
function doesWordExist(wordsArr, word) { // Manera con el método includes
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}

function doesWordExist(wordsArr, word) { // Se puede hacer así directamente porque ese método ya devuelve o true o false
  return wordsArr.includes(word);
}

function doesWordExist(wordsArr, word) { // Manera con método indexOf
  if (wordsArr.indexOf(word) !== -1) { // El método indexOf devuelve el índice donde está el elemento en un array, o -1 si no está
    return true; // Si el resultado no es -1, es que sí que la palabra está en el array
  } else {
    return false; // Si es -1, es que no está
  }
}


// 10. Find unique word and return the first unique word
function findUnique(wordsArr) { // => Manera con métodos de index
  if (wordsArr.length === 0) { // Te pedía que si el array estaba vacío devolvieras false
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++) { // Itero por el array de palabras
    // El método indexOf te devuelve el PRIMER índice donde aparece un elemento en un array, porque puede estar repetido
    // Por ejemplo: [3,4,6,3] => Si buscas indexOf(3), te dará 0, aunque también está en el índice 3
    // El métdo lastIndexOf te da el ÚLTIMO índice en el que aparece un elemento en un array
    if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) { // Si la primera vez que aparece es también la última, significa que no está repetido
      return wordsArr[i]; // Devuelvo esa palabra. Como hay un return, corta la función y devuelve siempre la primera unique word
    }
  }
}

function findUnique(wordsArr) { // => Manera sin métodos y más desgranada
  if (wordsArr.length === 0) { // Te pedía que si el array estaba vacío devolvieras false
    return false;
  }
  let shortestLength = wordsArr[0].length; // Me declaro una variable donde iré guardando cual es el largo más corto que hay en el array
  const shortestWords = []; // Aquí guardaré las palabras que sean así de cortas
  for (let i = 0; i < wordsArr.length; i++) { // Primero itero para ver qué length es el más corto del array 
    if (wordsArr[i].length < shortestLength) {
      shortestLength = wordsArr[i].length;
    }
  }
  for (let i = 0; i < wordsArr.length; i++) { // Después itero para ver qué palabras coinciden con ese length más corto
    if (wordsArr[i].length === shortestLength) {
      shortestWords.push(wordsArr[i])
    }
  }
  return shortestWords[0] // Devuelvo la primera palabra que coincide con el largo más corto
}








