// promises

// fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error('Error:', error);
// });

// Async/Await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }       
// }

// fetchData();

const promise1 = new Promise((resolve,reject)=>{
    // do an async task
    //db calls,cryptograghphy,
    setTimeout(()=>{
        console.log('Async Task 1 is completed');
        resolve();
    },2000);
})

promise1.then(()=>{
    console.log('Promise 1 is consumed');
})

// here is the breakdown of the above code  -> we create a promise which takes a function 
// as an argument which has two parameters resolve and reject
// inside the promise we do an async task here we are using setTimeout to simulate an async task
// after 2 seconds we call the resolve function to indicate that the promise is resolved
// then we consume the promise using the then method which takes a function as an argument which is called when the promise is resolved

// in real life when we connect the database and fetch some data it takes time 
// so we use promises to handle such scenarios
// so database connection is async so we put in a promise and when the data is fetched we call the resolve function
// and then we consume the promise using the then method  -> we can do operation in then method on what we get in resolve function


const promise2 = new Promise((resolve,reject)=>{
    // do an async task
    //db calls,cryptograghphy,
    setTimeout(()=>{
        console.log('Async Task 2 is completed');
        resolve();
    },2000);
})

// chaining promises
promise2.then(()=>{
    console.log('Promise 2 is consumed');
}).then(()=>{
    console.log('I am also part of promise 2');
})

// here we are chaining two then methods to the same promise
// so when the promise is resolved both the then methods will be called in order


const promise3 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
          resolve({userName: 'chai',email:"ghanshyamkumar@gmail",age:24})
    },1000)
}).then((data)=>{
    console.log(data);
})

const promise4 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
            let error =true
            if(!error){
            resolve({userName: 'chai',email:"ghanshyamkumar@gmail"})
            }
    },1000)
}).then((user)=>{
    console.log(user)
    return user.email
}).then((email)=>{
    console.log(email)
})

// above code we do chaining cuz if we have want to return the value indivilau of then method then we have to do chaining
// here we are returning the email from the first then method and using it in the second then method
// we cant put store the rerurn value of then method in a variable and use it in another then method
// we have to do chaining to achieve this
.catch((error)=>{
    console.log('Error is there')
})
// catch method is used to handle the error if the promise is rejected

// finally method
.finally(()=>{
    console.log('I will run anyway')
})  


// finally method is used to run some code regardless of the promise is resolved or rejected


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
            let error =true
            if(!error){
            resolve({userName: 'chai',email:"ghanshyamkumar@gmail"})
            }else{
                reject('Error: Something went wrong')
            }   
    },5000)
            
})
// above code is  handeling the error using reject method
// if error is true then the promise will be rejected and the catch method will be called
// if error is false then the promise will be resolved and the then method will be called

// async wait
async function fetchUserData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await response.json()
        console.log(data)
    }catch(error){
        console.log('Error:',error)
    }   
}

fetchUserData()

// here we are using async await to fetch data from an API
// we use try catch block to handle the error
// if the fetch is successful then the data will be logged to the console
// if there is an error then the error will be logged to the console

console.log('End of the file')
// this will be logged first before the async task is completed
// because the async task is running in the background and the main thread is not blocked
// so the main thread will continue to run and log this statement to the console

// this is the beauty of async programming in javascript

// javascript is single threaded but it can handle async tasks using event loop and callback queue
// so when an async task is completed it is pushed to the callback queue and when the main thread is free it will pick the task from the callback queue and execute it
// this is how javascript handles async tasks without blocking the main thread

