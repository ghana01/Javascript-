// ==========================================================
//undefined vs not defined
// undefine : varible is declare but the value is not assigned to it
// not defined : varible is not declared in the program
// ==========================================================

console.log(x); // This will throw an error because x is not defined
let y;
console.log(y); //this will print undefined because it is define but not assigned any value

// js is loosely typed language.it does not required to declare the data type of the vairble itself identify the data
// example

let data =42;
 data="ghan" // this dont  give me error because js is loosely typed language
data=true // this also dont give me error
console.log(typeof data) // this will print boolean because the current value of data is boolean

// important note: avoid using global variables as much as possible
// and also dont assigne the undefined to ny varible manually
// always use let and const to declare the varible
