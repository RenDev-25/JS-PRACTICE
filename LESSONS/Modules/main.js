import greetings from './greetings.js';
import { add, subtract, multiply } from "./math.js";
import { name, age, program } from "./StudInfo.js";
import {user} from './user.js';

import fruits from './array.js'; 


console.log(greetings());

let addResult = add(5, 7);
let subtractResult = subtract(5, 7);
let multiplyResult = multiply(5, 7);

console.log(`The result is: ${addResult}`);
console.log(`The result is: ${subtractResult}`);
console.log(`The result is: ${multiplyResult} \n\n`);


console.log(`Name: ${name}\nAge: ${age}\nProgram: ${program}`);
console.log('\n\n');

console.log(user.username); 
console.log(user.email); 
console.log(user.age); 
console.log('\n\n'); 

// ARRAY IMPORT
console.log("IMPORT/EXPORT an ARRAY: ")
console.log(fruits); 





