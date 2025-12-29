
// number

const score = 500;

const balance = new Number(1000); // number object

console.log(score);
console.log(balance);


console.log(balance.toString().length); // methods of number object

console.log(balance.toFixed(2)); // it will print 1000.00
// we should use number primitive instead of number object
// because number object has some performance issues and also some unexpected behavior
// for example
console.log(typeof score);
console.log(typeof balance);
// score is number primitive and balance is number object
// so we should use number primitive instead of number object
// because number object has some performance issues and also some unexpected behavior

// number has many methods like toString(), toFixed(), toPrecision(), valueOf(), toExponential() etc    
// but we should use number primitive instead of number object
// because number object has some performance issues and also some unexpected behavior
// for example
console.log(balance + 500); // it will print [object Object]500
// because balance is an object and when we try to add a number to an object
// it will convert the object to string and then concatenate it with the number
// so it will print [object Object]500
// but if we use number primitive then it will work fine
console.log(score + 500); // it will print 1000





// Math
console.log(Math);
console.log(Math.abs(-5)); // it will print 5
console.log(Math.round(4.2)); // it will print 4
console.log(Math.round(4.8)); // it will print 5
console.log(Math.ceil(4.2)); // it will print 5
console.log(Math.floor(4.8)); // it will print 4
console.log(Math.min(4, 5, 1, 8, -1)); // it will print -1

console.log(Math.random()); // it will print a random number between 0 and 1
console.log(Math.random() * 10); // it will print a random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // it will print a random number between 0 and 9

const min =10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it will print a random number between min and max (both inclusive)