// Global Execution Context created
// During Hoisting:
// var x -> undefined
// function a -> stored
// function b -> stored

var x = 1;  // x becomes 1 in global scope

a(); // Call function a()
// New execution context for a()
// var x -> undefined
// x = 10
// prints 10

b(); // Call function b()
// New execution context for b()
// var x -> undefined
// x = 100
// prints 100

console.log(x); // prints global x -> 1

// Still global scope
console.log(x); // prints 1 again

// if we dont declare the var outside any function  then the varible declare inside the function 
// will be acces outside the function also it will become global varible

function a(){
    y=10;
    console.log(y);
}
console.log(y); // this will print 10 because y become global varible

