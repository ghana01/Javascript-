//array


const myarr = [1,32,4,34,5,6,7,8,9];

console.log(myarr)
console.log(typeof myarr) // object

//array make a shallow copy of original array when we use = operator
const newarr = myarr;
newarr.push(100)
console.log(myarr) // original array is also changed
console.log(newarr) // [1,32,4,34,5,6,7,8,9,100]

// to make a deep copy of array we can use slice() method
const newarr2 = myarr.slice(0) // it will make a deep copy of original array
newarr2.push(200)
console.log(myarr) // original array is not changed
console.log(newarr2)// new array is changed

//splice method
myarr.splice(2,3) // it will remove 3 elements from index 2 it is mutable method
console.log(myarr) //this print the original array after removing elements

myarr.splice(2,0,1000,2000) // it will add 1000 and 2000 at index 2
console.log(myarr) //this print the original array after adding elements
//putput of above line [1,32,1000,2000,7,8,9,100]


//array method
console.log(myarr.length) // length of array
myarr.push(400) // add element at the end of array
myarr.pop() // remove element from the end of array
myarr.unshift(15) // add element at the beginning of array
myarr.shift() // remove element from the beginning of array
console.log(myarr)

// these abve method are mutable methods they change the original array
console.log(myarr.indexOf(34)) // it will print the index of 34
console.log(myarr.indexOf(1000)) // it will print -1 because 1000 is not in the array


//what id deep copy and shallow copy
//shallow copy -> it copies the reference of the original array so if we change the new array the original array will also change
//deep copy -> it copies the values of the original array so if we change the new array the original array will not change

//array iteration methods
const arr = [1,2,3,4,5,6,7,8,9,10];

// forEach method
arr.forEach((element)=>{
    console.log(element);
})

// map method -> it returns a new array after applying the function to each element of the original array
const newArr = arr.map((element)=>{
    return element * 2;
})
console.log(newArr);

// filter method -> it returns a new array after filtering the elements based on the condition provided in the function to each element of the original array
const filteredArr = arr.filter((element)=>{
    return element % 2 === 0; // return even numbers
})
console.log(filteredArr);

// reduce method
const sum = arr.reduce((accumulator,element)=>{
    return accumulator + element;
},0)
console.log(sum);



const myArray = [1, 2, 3];
console.log(typeof myArray); // "object"
console.log(Array.isArray(myArray));    // true
console.log(Array.isArray({ a: 1 })); // false
  

