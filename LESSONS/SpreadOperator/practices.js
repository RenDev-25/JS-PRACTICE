
/* S P R E A D     O P E R A T O R   */ 

/*------------Example 1------------------------------*/

const fruits = ["Apple", "Banana", "Orange"];
const copiedFruits = [... fruits];
const final = [...copiedFruits,...fruits]; 

console.log(final); 


/*--------------Example 2 ----------------------------*/

const prutas = ["Apple", "Banana"];
const gulay = ["Carrot", "Potato"];

const foods = [...prutas, ...gulay]; 
console.log(foods); 


/*---------add-first-item------------------------*/

const colors = ["Blue", "Green"];

const newColors = ["Red", ...colors];

console.log(newColors);





/*--------------copy-object------------------------*/

const person = {
    name: "John",
    age: 25
};

const personCopy = { ...person };

console.log(person);
console.log(personCopy);



/*--------------update-object------------------------*/

const student = {
    name: "Anna",
    grade: 90
};

const updatedStudent = {
    ...student,
    grade: 95
};

console.log(updatedStudent);




/*--------------merge-object------------------------*/

const personalInfo = {
    fname: "John"
};

const contactInfo = {
    email: "john@gmail.com"
};

const user = {
    ...personalInfo,
    ...contactInfo
};

console.log(user);












