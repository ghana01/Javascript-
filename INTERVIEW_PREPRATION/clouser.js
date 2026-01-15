
//timme tide and js wait for none 


function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("hello js");
}
x(); // it will print hello js first and after 3 sec it will print 1 because settimeout is asynchronous function

output:
// hello js
// 1
// setTimeout is an async function so it will be executed after the main function x() is executed completely
// but the inner function of setTimeout has access to the variable i because of closure
// closure allows a function to access variables from its outer (enclosing) function scope even after that outer function has finished executing.

// in this case the inner function of setTimeout is able to access the variable i from the outer function x() even after x() has completed its execution.
// thus when the timeout completes after 3 seconds, it can still log the value of i, which is 1.

//
function y(){
    console.log("start");
    for(var j=1;j<=5;j++){
        setTimeout(function(){
            console.log(j);
        },j*1000);
    }
    console.log("end");
}
y();

output:
// start 
//end
//6
//6
//6
//6
//6
// it will print start and end first because settimeout is async function 
// after that it will print 6 five times because by the time settimeout function is executed the loop is already completed and the value of j is 6
// so all the inner functions of settimeout access the same variable j which has value 6

// i have doubt here plese explain more clerly
// so when the loop run each time loop run it create a ne settimieout function and each function have its own closure
// no no i am asking about the varible j  when the loop run  it means run the code inside it t
//see when the j=0; it run the loop for the first time it call the settimeout function which create clouser 
// but after that j increament to 1 and loop run again it will call the settimout function again which create another clousr 
// so fisrt all the loop will run and create 5 times the settimeout function and each function have their own clouser so each time
// when the settimeout exectued the value of j  is  incerese cuz  the value of j is also increse in loop
// so the when last time the loop run it have  dont it print the value of j each time settimeout is exectued
// no no 
// when the loop run it create 5 settimeout function but all the function share the same variable j from the outer scope
// so by the time the settimeout functions are executed after their respective delays, the loop has already completed and the value of j is 6
// thus when each settimeout function executes, it accesses the same variable j which now holds the value 6
// so all of them print 6

// ok get it now 