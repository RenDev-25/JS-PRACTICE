import greetings from './greetings.js';
import { add, subtract, multiply } from "./math.js";
import { name, age, program } from "./StudInfo.js";

console.log(greetings());

let addResult = add(5, 7);
let subtractResult = subtract(5, 7);
let multiplyResult = multiply(5, 7);

console.log(`The result is: ${addResult}`);
console.log(`The result is: ${subtractResult}`);
console.log(`The result is: ${multiplyResult} \n\n`);


console.log(`Name: ${name}\nAge: ${age}\nProgram: ${program}`);




