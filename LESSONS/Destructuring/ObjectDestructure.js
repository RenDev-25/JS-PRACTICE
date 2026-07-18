

/*  TRADITIONAL WAY OF ACCESSING OBJECT PROPERTIES

const person = {
    name: "John",
    age: 25,
    country: "Philippines"
};

const name = person.name;
const age = person.age;
const country = person.country;

 */


// U S I N G    O B J E C T     D E S T R U C T U R I N G

const { name, age, country } = person;

console.log(name);
console.log(age);
console.log(country);


// R E N A M I N G     V A R I A B L E S

const tao = {
    identity: "John",
    edad: 25
};

const { identity: fullName, edad: yearsOld } = tao;

console.log(fullName);
console.log(yearsOld);












