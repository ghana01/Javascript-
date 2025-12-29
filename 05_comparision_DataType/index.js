console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
console.log(2==2);
console.log(2!=2);

console.log('a'>'b'); // this will print false because in ascii table b has higher value than a
console.log('a'<'b'); // this will print true because in ascii table a has lower value than b

console.log( "2" >1) // this will print true because js will convert the string to number and then compare
console.log( "2" <1) // this will print false because js will convert the string to number and then compare


console.log( null  >0) // this will print false because null is converted to 0 and then compared
console.log( null ==0) // this will print false because null is only equal to undefined
console.log( null >=0) // this will print true because null is converted to 0 and then compared

console.log( undefined  >0) // this will print false because undefined is converted to NaN and then compared
console.log( undefined ==0) // this will print false because undefined is only equal to null
console.log( undefined >=0) // this will print false because undefined is converted to NaN and then compared



// reson why comparison  and eqality operators give different results is because of 
// type coercion in js
// read more about type coercion in js
//comparison operators always convert the values to numbers before comparing
// equality operators do not do type coercion
// == and != do type coercion but === and !== do not do type coercion

// strict equality operator === and strict inequality operator !==
console.log(1 === 1); // this will print true because both are of same type and value
console.log(1 === '1'); // this will print false because both are of different type
console.log(1 !== 1); // this will print false because both are of same type and value
console.log(1 !== '1'); // this will print true because both are of different type

//Question 1: Data Types and Equality
// You've used == and === in JavaScript. Explain the difference. More importantly, give me a practical 
// example where using == would introduce a bug and === would prevent it.

// (Follow-up): Good. Now, what is the typeof null? And why is it that? What's the typeof NaN? 
// And if you can't use NaN === NaN, how do you reliably check if a value is NaN?
// Answer:
// The difference between == and === is that == checks for equality of value after type coercion, 
// while === checks for equality of both value and type without type coercion.

// Practical example:
let userInput = "0";
if (userInput == false) {
    console.log("This will run because '0' is coerced to false");
}
if (userInput === false) {
    console.log("This will NOT run because '0' is a string and false is a boolean");
}
// A classic bug scenario is checking for 0. 0 == '' is true, and 0 == false is also true. 
// If you're checking a form input where 0 is a valid entry but an empty string '' is not, == will fail you. === would correctly distinguish them.
let formInput = "0";
if (formInput == 0) {
    console.log("This will run because '0' is coerced to 0");
}
if (formInput === 0) {
    console.log("This will NOT run because '0' is a string and 0 is a number");
}

// Follow-up answers:
console.log(typeof null); // "object"
console.log(typeof NaN);  // "number"

// typeof null returns "object" because of a historical bug in JavaScript. 
// typeof NaN returns "number" because NaN is considered a numeric value in JavaScript.
// To reliably check if a value is NaN, you can use the built-in function isNaN(value) or 
// Number.isNaN(value) which does not perform type coercion.
