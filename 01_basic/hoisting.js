// hoisting js

// it is on of the most imp conscept in js  

// hositing means in js we can move the varrbile and function declartion at the top of theri scope
// before the exection of the code

// in lay man term we can call or use the function and varbile   before declartion

//example of hositing

console.log(myvar); // Output: undefined
var myvar = 10;

// in the above example we are using the varible myvar before declartion
// but it does not throw any error because of hositing
// but the value of myvar is undefined because in the creation phase of exection context
// js assign the value undefined to the varible
myfunction(); // Output: "hello world"
function myfunction (){
    console.log("hello world");
}
// in the above example we are calling the function before declartion
// but it does not throw any error because of hositing
// in the creation phase of exection context
// js assign the entire function code to the memory space of the function name
// so we can call the function before declartion


// but this hositing feature is only available for var and function declartion
// it is not available for let and const


// dicuss the hositng with the let and const 
console.log(mylet)// this will throw an error because mylet is not defined
let mylet =20;
// in the above example we using the ;et varible before declarion
// but it will throw and error  because due the tempral dead zone (TDZ)
// let and const also support the hoisting but they are in the tempral dead zone it means
// we can access then  only after the decleration

console.log(myconst) // this will throw an error because myconst is not defined
const myconst =30;
// in the above example we using the const varible before declarion
// but it will throw and error  because due the tempral dead zone (TDZ)
// let and const also support the hoisting but they are in the tempral dead zone it means
// we can access then  only after the decleration



// let dicuss some more example with hoisting

getname(); // this will throw an error because getname is not a function
console.log(getname); // this will print undefined
var getname =function (){
    console.log("my name is ganesan");
};
// in the above code we are calling the dunction before decaleration 
//but the getname is varible which has the function assigned to it
// so in the creation phase of exection context js assign the value undefined to the getname varible
// so when we call the getname it will throw an error because undefined is not a function

