// conversion of one datatype to another datatype

// 1. Number to String
let num = 123;
let str = String(num);
console.log(typeof str); // this will print 'string'
console.log(str); // this will print '123'
console.log(typeof num); // this will print 'number'
console.log(num); // this will print 123

// 2. String to Number
let str2 = "456";
let num2 = Number(str2);
console.log(typeof num2); // this will print 'number'
console.log(num2); // this will print 456
console.log(typeof str2); // this will print 'string'
console.log(str2); // this will print '456'
// if the string is not a valid number, it will return NaN
let str3 = "33abc";
let num3 = Number(str3);
console.log(typeof num3); // this will print 'number'
console.log(num3); // this will print NaN ->Not a Number

// 3. Boolean to String
let bool1 = true;
let str4 = String(bool1);
console.log(typeof str4);// this will print 'string'
console.log(str4); // this will print 'true'

// 4. String to Boolean
let str5 = "false";
let bool2 = Boolean(str5);
console.log(typeof bool2);
console.log(bool2); // this will print false

// null to String
let null1 = null;
let str6 = String(null1);
console.log(typeof str6); // this will print 'string'
console.log(str6); // this will print ''
// string to null
// there is no direct way to convert string to null
// we can use conditional statement to achieve this
let str8 = "";
let null2 = (str8 === "") ? null : str8;
console.log(typeof null2);
console.log(null2); // this will print null
// undefined to String
let undefined1 = undefined;
let str7 = String(undefined1);
console.log(typeof str7);
console.log(str7); // this will print 'undefined'

// Number to Boolean
let isLoggedIn =1;// 0, null, undefined, NaN, '' are considered as falsy values in js everything else is considered as truthy value
let bool3 = Boolean(isLoggedIn);
console.log(bool3); // this will print true because 1 is a truthy value
