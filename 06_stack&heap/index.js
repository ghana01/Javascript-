// stack (primitive), heap (Non-primitive)


let myname = "ghan"
let anothername =myname

anothername = "mishra";
// it doestnt affect myname cuz anothername is stored in different memory location
// and copy of myname is assined to anothername

console.log(myname)
console.log(anothername)


//heap (non-primitive)

// but in case of non-primitive data types (objects, arrays, functions) it works differently
// non-primitive data types are stored in heap memory and the reference of the memory location is stored in stack memory

let person = {
    name : "ghan",
    age : 22
}   
let anotherperson = person; // here anotherperson is pointing to the same memory location as person
anotherperson.age = 23; // here we are changing the age property of anotherperson
// and it will also change the age property of person because both are pointing to the same memory location