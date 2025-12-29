// alert(3 +3)  // we are using node js not browser
console.log(3 + 3) // this will print 6 in the console cuz we are using node js

console.log("ghan") ; console.log('ghan') ; console.log(`ghan`) // this is not code readability
 /*
 in ending  of code we use semicolon ; but it is optional in js
    but it is a good practice to use it
    its upto us wether use it or not  if we use then use after
     all statements cuz it improves code readability
 */

// Datatypes in js
// 1. Primitive datatypes
// a. Number
let num1 = 3; // we can use both integer and float values in js     
let num2 = 3.5; // both are of type number
console.log(typeof num1); // this will print 'number'
console.log(typeof num2); // this will print 'number'
console.log(num1 + num2); // this will print 6.5

// b. String    
let str1 = "ghan"; // we can use both single and double quotes for strings
let str2 = 'ghan';
let str3 = `ghan    
`; // we can use backticks for multi-line strings and for string interpolation
console.log(typeof str1); // this will print 'string'
console.log(typeof str2);// this will print 'string'
console.log(typeof str3);// this will print 'string'

// c. Boolean
let bool1 = true; // we can use both true and false for boolean values
let bool2 = false;
console.log(typeof bool1);// this will print 'boolean'
console.log(typeof bool2);

// d. Null
let null1 = null; // we can use null for null values
console.log(typeof null1);// this will print 'object' because of a bug in js

// e. Undefined
let undefined1; // we can use undefined for undefined values
console.log(typeof undefined1);// this will print 'undefined'

// f. Symbol
let sym1 = Symbol("ghan"); // we can use Symbol for unique values
console.log(typeof sym1);// this will print 'symbol'

// 2. Reference datatypes
// a. Object
let obj1 = { name: "ghan", age: 21 };
console.log(typeof obj1);// this will print 'object'

// b. Array
let arr1 = [1, 2, 3, 4, 5];
console.log(typeof arr1); // this will print 'object' because arrays are objects in js
console.log(Array.isArray(arr1)); // this will print true because arr1 is an array

// c. Function
let func1 = function () {
    console.log("This is a function");
}
console.log(typeof func1); // this will print 'function'
func1(); // this will call the function and print "This is a function"

// d. Date
let date1 = new Date();
console.log(typeof date1); // this will print 'object' because date is an object in js
console.log(date1); // this will print the current date and time
console.log(date1.toDateString()); // this will print the current date in a readable format
console.log(date1.toTimeString()); // this will print the current time in a readable format
console.log(date1.toISOString()); // this will print the current date and time in ISO format
console.log(date1.getFullYear());
console.log(date1.getMonth());
console.log(date1.getDate());
console.log(date1.getDay());
console.log(date1.getHours());

// what is the difference between primitive and reference datatypes?
// Primitive datatypes are stored in stack memory and reference datatypes are stored in heap memory
// Primitive datatypes are immutable and reference datatypes are mutable
// Primitive datatypes are compared by value and reference datatypes are compared by reference
// Primitive datatypes are passed by value and reference datatypes are passed by reference
// Primitive datatypes have fixed size and reference datatypes have dynamic size
// Primitive datatypes are faster to access and reference datatypes are slower to access
// also discuss about the heap, stack memory and garbage collection in js also discuss how the primitive goes to stack memory and reference goes to heap memory
// Stack memory is used for static memory allocation and is managed by the compiler
// Heap memory is used for dynamic memory allocation and is managed by the garbage collector
// Garbage collection is the process of automatically freeing memory that is no longer in use
// Note: In js everything is an object except primitive datatypes
// we can use typeof operator to check the datatype of a variable
// we can use Array.isArray() method to check if a variable is an array or not
// we can use instanceof operator to check if a variable is an instance of a particular class or not
// we can use Object.prototype.toString.call() method to check the exact datatype of a variable
