
/*

W I T H O U T      D E S T R U C T U R I N G

const fruits = ["Apple", "Banana", "Orange"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first);
console.log(second);
console.log(third);

*/

// WITH DESTRUCTURING 

const fruits = ["Apple", "Banana", "Orange"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);



// Rest Operator (...)

const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

const [una, pangalawa, ...others] = numbers;

console.log(una);
console.log(pangalawa);
console.log(others);














