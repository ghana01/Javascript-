//function -> it make us easy to use the same code again and again
// function is a block of code that can be reused
// function is a reusable block of code that performs a specific task
// function is a way to group a set of statements together to perform a specific task
// function is a way to encapsulate a set of statements together to perform a specific task
// function is a way to organize code into smaller, manageable and reusable pieces



function sayMyname(){
    console.log('my name is ghan')
}
sayMyname() // function call or function invocation this will print my name is ghan

function addTwoNumbers(num1,num2){ // num1 and num2 are parameters
    console.log(num1+num2)
    //return num1_num2;
}
addTwoNumbers(3,4) // 3 and 4 are arguments this will print 7
addTwoNumbers(10,"20") // this will print 1020 because + operator is used for both addition and concatenation
addTwoNumbers("hello","world") // this will print helloworld because + operator is used for both addition and concatenation


const result = addTwoNumbers(5,6) // this will print 11 but result will be undefined because function doesn't return anything
console.log(result) // undefined

function addTwoNumbers2(num1,num2){ // num1 and num2 are parameters
    return num1+num2; // return keyword is used to return a value from a function
}
const result2 = addTwoNumbers2(5,6) // this will print 11
console.log(result2) // 11


// when we dont give some argumnt then it will be undefined
addTwoNumbers2(5) // this will print NaN because num2 is undefined and 5 + undefined = NaN
addTwoNumbers2() // this will print NaN because both num1 and num2 are undefined and undefined + undefined = NaN



// when we dont know the  how much argument can be passed then we can use rest operator
function addMultipleNumbers(...numbers){ // rest operator is used to represent an indefinite number of arguments as an array
    console.log(numbers) // this will print [ 1, 2, 3, 4, 5 ]      
    let total =0;
    for(let i=0;i<numbers.length;i++){
        total += numbers[i];
    }
    return total;
}
const result3 = addMultipleNumbers(1,2,3,4,5) 
// rest vs spread operator
// rest operator is used in function parameter to represent an indefinite number of arguments as an array
// spread operator is used to expand an array into individual elements

console.log(result3) // 15

const user ={
    name:"ghan",
    age:27,
    location:"india"
}

function  handelobject(obj){ // obj is a parameter
    console.log(obj.name) // this will print ghan
    console.log(obj.age) // this will print 27
    console.log(obj.location) // this will print india
}
handelobject(user) // this will print ghan 27 india

//another way to access object properties using destructuring in function parameter
function  handelobject2({name,age,location}){ // obj is a parameter
    console.log(name) // this will print ghan
    console.log(age) // this will print 27
    console.log(location) // this will print india
}
handelobject2(user) // this will print ghan 27 india


// we can same pass array as object in function 
const arr = [1,2,3,4,5]
function  handelarray([num1,num2,num3,num4,num5]){ // arr is a parameter
    console.log(num1) // this will print 1
    console.log(num2) // this will print 2
    console.log(num3) // this will print 3
    console.log(num4) // this will print 4
    console.log(num5) // this will print 5
}
handelarray(arr) // this will print 1 2 3 4 5
// another way to access array elements using rest operator in function parameter
function  handelarray2(...numbers){ // arr is a parameter
    console.log(numbers) // this will print [ 1, 2, 3, 4, 5 ]
}
handelarray2(...arr) // spread operator is used to expand an array into individual elements this will print [ 1, 2, 3, 4, 5 ]
// we can also use default parameter in function
function  handelarray3(num1=0,num2=0,num3=0,num4=0,num5=0){ // arr is a parameter
    console.log(num1) // this will print 1
    console.log(num2) // this will print 2
    console.log(num3) // this will print 3
    console.log(num4) // this will print 4
    console.log(num5) // this will print 5
}
handelarray3(...arr) // this will print 1 2 3 4 5
handelarray3(10,20,30,40,50) // this will print 10 20 30 40 5
handelarray3() // this will print 0 0 0 0 0 because we have given default value to parameters
// function expression
