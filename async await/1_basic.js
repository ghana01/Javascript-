//Async

//javascript 

//-> synchronous     imp -> js is asynchrounous language but by default it is synchorous behavior

//->single threaded  all thing are on single thread 


//execution context
// ->execute one line of code at a time
// ->call stack
// ->web api
// ->callback queue
// ->event loop
// each operation waits for the last one to complete before execution



//blocking code vs non blocking code
//blocking code -> line by line execution
//non blocking code -> line by line execution not guaranteed it can be executed at any time
//eg -> setTimeout, fetch, file reading etc

// bloking code -> block the flow of program ->read the file
// non bloking -> dont block the flow of program -> read the file in background and move to next line of code

// make a full even loop and explain  the concept how event loop work  even the js is single  threaded how it is  effectife using the enviroment like web browser node and etc
// how js is 

//
// async code -> code that runs in the background and dont block the main thread
// sync code -> code that runs in the main thread and block the main thread

// what will happen when we first run the setTimeout then run the setInterval with same time
// what will happen when we first run the setInterval then run the setTimeout with same time

// what is difference between callback ,promise and async await

// callback -> function passed as an argument to another function
// promise -> object that represents the eventual completion or failure of an asynchronous operation
// async await -> syntactic sugar over promises to write asynchronous code in a synchronous manner
// how async wait is better then promise 
// it is easier to read and write
// it makes the code look synchronous
// it is easier to handle errors using try catch block
// but under the hood it is still using promises
// example of async await
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
};
fetchData();

// here we are using async await to fetch data from an API
// in this example the fetchData function is declared as async  code will run in the background
// and we are using await keyword to wait for the fetch and response.json() to complete before moving to the next line of code
// this makes the code look synchronous and easier to read
// understanding async await
// async function -> it is a function that returns a promise
// await keyword -> it is used to wait for a promise to resolve or reject
// try catch block -> it is used to handle errors in async await
// we use try catch block to handle the error
// if the fetch is successful then the data will be logged to the console
// if there is an error then the error will be logged to the console
