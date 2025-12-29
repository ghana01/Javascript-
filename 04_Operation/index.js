

let value =3;
let negValue = -value;
console.log(negValue); // this will print -3
console.log(typeof negValue);


console.log(2 +3); // this will print 5
console.log(2 -3); // this will print -1
console.log(2 *3); // this will print       
console.log(2 /3); // this will print 0.6666
console.log(2 %3); // this will print 2 because 2 is less than 3
console.log(2 **3); // this will print 8 because 2^3 = 8



// string concatenation problems 
let str1= "hitesh";
let str2= "choudhary";
let str3= str1 + str2;
console.log(str3); // this will print hiteshchoudhary

console.log('1'+2); // this will print 12
console.log(1+'2'); // this will print 12
console.log('1'+2+2); // this will print 122
console.log(1+2+'2'); // this will print 32

// to avoid this we can use template literals
console.log(`The value is ${1+2}`); // this will print The value is 3
console.log(`The value is ${'1'+2+2}`); // this will print The value is 122
console.log(`The value is ${1+2+'2'}`); // this will print The value is 32
console.log(`The value is ${1+2*3}`); // this will print The value is 7 because * has higher precedence than +

// read about higher precedence operators in js

// increment and decrement operators
let num = 3;
console.log(num);   // this will print 3
console.log(++num); // this will print 4
console.log(num);   // this will print 4
console.log(num++); // this will print 4
console.log(num);
console.log(--num); // this will print 4


// for documetion or more detailed visite mdn doc or do gpt search