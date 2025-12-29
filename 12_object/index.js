//singleton
// object.create()




//object literal

const jsuser = {
   name :"ghan",
   "full name":"ghan mishra", // property with space
   age:27,
   location:"india",
   email:"fgreff#gmail.com"
}

jsuser.age=28 // update property
jsuser["name"]="mishra" // update property
console.log(jsuser["full name"]) // access property with space


jsuser.greeting =function (){
    console.log("hello jsuser")
}
console.log(jsuser.greeting)// it will print the function definition
jsuser.greeting()// it will call the function and print hello jsuser


//singleton object -> an object which is created only once in the entire application
const user = new Object() // object constructor
user.name ="ghan"
user.age=22
user.location="Bihar"
user.email="fgreff@gmail.com"
console.log(user)

// object nesting
user.address ={
    street:"xyz",
    city:"patna",  
    state:"bihar"
}
console.log(user)
console.log(user.address.city) // access nested object property
console.log(user["address"]["state"]) // access nested object property


//optional chaining
console.log(user?.address?.city) // it will print patna
console.log(user?.address?.country) // it will print undefined instead of error


const obj1 ={1:"a",2:"b",3:"c"}

const obj2 ={4:"d",5:"e",6:"f"}

const obj3 ={obj1,obj2}// it will create a nested object but we want to merge two objects
console.log(obj3)// it will print { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }

const obj3_1 =Object.assign({},obj1,obj2) // it will merge two objects using Object.assign() method
console.log(obj3_1) // it will print { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
const obj4 ={...obj1,...obj2} // it will merge two objects using spread operator
console.log(obj4) // it will print { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//object methods
console.log(Object.keys(obj4)) // it will print the keys of the object as an array
console.log(Object.values(obj4)) // it will print the values of the object as an array
console.log(Object.entries(obj4)) // it will print the key-value pairs of the object as an array of arrays


//object destructuring
const {name,age,location} = jsuser // it will destructure the object and create variables with the same name as the property names
console.log(name) // it will print ghan
console.log(age) // it will print 28
console.log(location) // it will print india

//how we can loop through an object
for(const key in jsuser){
    console.log(`key is ${key} and value is ${jsuser[key]}`);
}
//can we also use the for..of loop to loop through an object -> no we cant use for..of loop to loop through an object directly
// but we can use for..of loop to loop through the array returned by Object.keys(),Object.values(),Object.entries() methods
//how to loop through an object using for..of loop
for(const key of Object.keys(jsuser)){
    console.log(`key is ${key} and value is ${jsuser[key]}`);
}

// we can also use Object.keys() method to loop through an object
Object.keys(jsuser).forEach((key)=>{
    console.log(`key is ${key} and value is ${jsuser[key]}`);
})

// similarly we can use Object.entries() method to loop through an object
Object.entries(jsuser).forEach(([key,value])=>{
    console.log(`key is ${key} and value is ${value}`);
})
// here we are using destructuring to get the key and value from the array of arrays returned by Object.entries() method
// can we use map,filter ,reduce to the object -> no we cant use these methods directly on object 
// but we can use these methods on the array returned by Object.keys(),Object.values(),Object.entries() methods