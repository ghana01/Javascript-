const marvel_heroes =['thor','ironman','spiderman','captain america'];

const dc_heros =['batman','superman','flash','aquaman'];


marvel_heroes.push(dc_heros)// it will add dc_heros array as a single element in marvel_heroes array

console.log(marvel_heroes.push(dc_heros));


//concat method
const all_heros = marvel_heroes.concat(dc_heros) // it will merge two arrays and return a new array
console.log(all_heros);


//spread operator 
const all_heros2 = [...marvel_heroes,...dc_heros] // it will merge two arrays and return a new array
console.log(all_heros2);

const another_array =[[1,2,3],4,5,2,[6,7,8]] // nested array
console.log(another_array)
console.log(another_array.flat()) // it will flatten the array by one level
console.log(another_array.flat(2)) // it will flatten the array by two level
console.log(another_array.flat(3)) // it will flatten the array by three level