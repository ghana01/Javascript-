let a =1;
const b=2;
var c=3;


if(true){
    let a=4;
    const b=5;
    var c=6;
    console.log(a,b,c)
}

console.log(a,b,c)
// let and const are block scoped
// var is function scoped
// console.log(d) // it will give error because d is not defined
for(let i=0;i<5;i++){
    console.log(i) // it will print 0 1 2 3 4
}
console.log(i) // it will give error because i is not defined
// we can access var outside the block
for(var j=0;j<5;j++){
    console.log(j) // it will print 0 1 2 3 4
}       
// when variable{let,const} is define  withint the scope we cant access it outside the scope
console.log(j) // it will print 5 because j is defined with var and var is function scoped      


//global scope is acces every where ,// local scope is acces only within the block


//Question 2: Scope and Hoisting
// Explain hoisting. I don't want just the definition. Tell me exactly what is hoisted for var, let, 
// and const declarations. What is the "Temporal Dead Zone" and why does it exist?

// Answer:
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top 
// of their containing scope during the compilation phase before code execution.
//practical code example:
console.log(x); // undefined
var x = 5;
// In the above example, the declaration of x is hoisted to the top, but its assignment remains in place. 
// So, during execution, x is undefined until the assignment occurs.

// For var declarations:
// - The declaration is hoisted to the top of its function scope.
// - The variable is initialized with undefined.

// For let and const declarations:
// - The declarations are hoisted to the top of their block scope.
// - However, they are not initialized. Accessing them before their declaration results in a ReferenceError. why?
//so var is globally scoped or function scoped while let and const are block scoped
// This period between the start of the block and the actual declaration is known as the "Temporal Dead Zone" (TDZ).
// The TDZ exists to prevent access to variables before they are declared, which helps catch errors and 
// encourages better coding practices.
// Because they are in the Temporal Dead Zone (TDZ) from the start of the block until their declaration.
let y = 10;
console.log(y); // ReferenceError: Cannot access 'y' before initialization
// In this example, y is in the Temporal Dead Zone (TDZ) from the start of the block until its declaration.
// This period between the start of the block and the actual declaration is known as the "Temporal Dead Zone" (TDZ).
// The TDZ exists to prevent access to variables before they are declared, which helps catch errors and 
// encourages better coding practices.  
// (Follow-up): You said var is function-scoped. Give me a concrete code example where using var inside 
// a loop leads to a common, unexpected bug that let immediately solves.
for (var k = 0; k < 5; k++) {
    setTimeout(() => {
        console.log(k);
    }, 1000);
}
// This will print 5 five times because k is function-scoped and its value is 5 after the loop ends.

for (let l = 0; l < 5; l++) {
    setTimeout(() => {
        console.log(l);
    }, 1000);
}
// This will print 0 1 2 3 4 because l is block-scoped and retains its value for each iteration.

//difference bwtween function or block scope
function testVar() {
    var m = 1;
    if (true) {
        var m = 2; // same variable!
        console.log(m); // 2
    }
    console.log(m); // 2
}
testVar();

function testLet() {
    let n = 1;
    if (true) {
        let n = 2; // different variable
        console.log(n); // 2
    }
    console.log(n); // 1
}
testLet();