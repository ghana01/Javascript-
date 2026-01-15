const arr = ['a', 'b', 'c','d',1,20,true];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i], i); // 'a' 0, 'b' 1, 'c' 2
}// you can use break and continue as well

arr.forEach((value, index) => {
  console.log(value, index);
});//print will be same as above 


for (const value of arr) {
  console.log(value); // 'a', 'b', 'c', 'd', 1, 20, true
}

for (const [index, value] of arr.entries()) {
  console.log(index, value); // 0 'a', 1 'b', 2 'c', 3 'd', 4 1, 5 20, 6 true
}
const numbers = [1, 2, 3, 4];

// map: creates a new array by transforming each value
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]

// filter: creates a new array with only values that pass a test
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce: reduces the array to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 10

console.log(doubled);
console.log(evens);
console.log(sum);

const myArray = [1, 2, 3];
console.log(typeof myArray); // "object"
console.log(Array.isArray(myArray));    // true
console.log(Array.isArray({ a: 1 })); // false