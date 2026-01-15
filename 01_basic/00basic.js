// this is theroy about the js

// js is lossely type language: it means we dont need to declare the data type of the varible
let data =42;
 data="ghan" // this dont  give me error because js is loosely typed language
data=true // this also dont give me error
console.log(typeof data) // this will print boolean because the current value of data is boolean

// js code run by line by line  interpreter  -> it does not compile like the c,c++,java
// it first interpret the code and then run it line by line like python

// js is single threaded language :it means it can do one thing at a time means it has one call stack
// when it complete the current task then it goes to next task other wise it wait for the current task to complete

// js is synchronous and blocking code :it means it execute the code line by line and wait for the current task to complete before moving to the next task

//but we can make it asynchronous and non bloking using the callback,promises,async wait
// these asynchronus code run in the background  and this asyn code feture is not avlable in the other programming language like c,c++,java

// this asyn code is handeled by the web api provided by the browser or the node js runtime or we can say js runtime enviroment
// example of asyn code : settimeout ,api call ,file read write in node js

//js is fast langugage because it is interpreted language and it run in the v8 engine provided by the google chrome
// v8 engine is written in c++ and it is open source


// ==========================================================
// execution context and call stack
// ==========================================================

// when js  code is run in two phase  one  is createtion phase and another is exectuion pahase

// in creation phase js create the global object (window in browser and global in node js)
// and also create the this keyword and set to the global object

// also create the memory space for the varible and function we declare in the code
// forthe varable it assign the value undefined
// for the function it assign the entire funcion code in the memroy space


// in execution phase js execute the code line by line and assigne the value to the varibles

// when the function is called then it create the new exectuion context inside the call stack in lay man term
// we  can say then we have one call stack but  whne function exectue inside it it create theri own exectuion and creation pase in which varible and function are stored in the memory space of that exectuion context
// and when the function exectuion is completed then that exectuion context is removed from the call stack

// after completen the function it return the value to the place whre it called from

// so call stack is the place where all the exectuion context are stored in the stack data structure manner



