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