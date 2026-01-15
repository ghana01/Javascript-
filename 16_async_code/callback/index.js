// callbakc function 
//-> A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
//-> Callbacks are primarily used to handle asynchronous operations in JavaScript, 
// allowing code to continue executing while waiting for an operation to complete, 
// such as fetching data from an API or reading a file.

setTimeout(function(){
    console.log("This is callback function example after 2 sec")
},2000);    // this function will be executed after 2 sec asynchronously

// js issingle threaded language and synchronous language but we can make it asynchronous using the callback function
// but the callback function can also be used in synchronous code

setTimeout(function(){
    console.log("This is another callback function example after s sec")
},5000)
function x(y){
    console.log("inside function x")
    y();
}
x(function y(){
    console.log("inside function y")
});  // how is this code helping in to run the async code 
// here function y is passed as a callback function to function x
// so when function x is called it will execute the code inside it and when it reach to y() it will call the function y
// so this way we can run the async code using the callback function
// but even in this x function is synchronous function because it run line by line
// but the settimeout function is asynchronous function because it run in the background after the specified time
// so if the x function is called then  then also run the y function inside it ,other wise it wait for the y function to be called
// so this is how callback function help in to run the async code in js


// output will be
// inside function x
// inside function y
// This is callback function example after 2 sec
// This is another callback function example after s sec


// callbak is a function passed as a argument to another function 

// it is used to handle asynchronous code in js
// how callback handel the async code 

// so callback simply means -> call me back later when u are done with your woek

// example of callback function is settimeout function
setTimeout(function(){
    console.log("This is callback function example")
},3000) // in this example the function inside the timeout is callback function whicc is called after the 3 second 

// so here js will not wait for the settimeout function to complete its work it will move to the next line of code
// and after 3 second the function inside the settimeout will be called back by the js runtime enviroment
console.log("This is synchronous code example")

// output will be 
// This is synchronous code example
// This is callback function example

//callback hell
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000); // output will be 1 2 3 each after 1 sec
// in this examplw first the outer settimeout function is executed after 1 sec
// then inside it the second settimeout function is executed after 1 sec
// then inside it the third settimeout function is executed after 1 sec

// first the outer first settimeout goes to the web api   which is called after 1 sec or u can say it 
// is registred into stack to be executed afterr 1 sec when the time is up at instant the console log is print but inside the  first outer fucntion insde is also another
//settimeout then again the second settimeout is registred into the web api to be executed after 1 sec
// and when the time is up the console log 2 is printed 
// then again inside the second settimeout there is another settimeout which is registred into the web api to be executed after 1 sec
// and when the time is up the console log 3 is printed
//  this is the way how callback hell is created using the nested settimeout function

//woow this is super cool  -> 
// so it very much about the execution cnstex and call stack


// in the above example we have nested the settimeout function inside another settimeout function
// this is called callback hell
// it is difficult to read and maintain the code in this way
// to avoid callback hell we can use promises and async await


// if i have to create the   system in which  for the e-ccomerce when the user place order
// first the cart is created then the payment is done then the order is placed
// all thes three task are asyn task because they take time to complete
// so how can i create this with the callback funcion only 

api.createOrder(Cart ,function(){
    api.processedtoPayment(function(){
        api.showOrderSummary(function(){
            console.log("order placed successfully")
        }   )

    })
})

// in this first the createorder is created ,only the createorder function is complted then the payment function will run
// other wise itt will wait  for the create order to complete
// same way the showordersummary function will run only after the payment function is completed
// other wise it will wait for the payment function to complete
// this is how we can handle the async code using the callback function only
// but this code is difficult to read and maintain
// to avoid this callback hell we can use promises and async await