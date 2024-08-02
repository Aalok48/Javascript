// var: variable can be re-declared and updated. A global scope variable
// var is not recommended to use

// let: variable cannot be re-declared but updated. A block scope variable
let fullName = "Alok karn";
console.log(fullName);

// const: variable cannot be re-declared and updated.A block scopre variable
const age =  24;
console.log(age);

let a;
//const a; not possible because const variables must be initialized with a value
console.log(a);   // this give output undefined because the value of a is not defined 