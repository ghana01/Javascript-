const name ='ghan'

const anothername = 'mishra'


console.log(name+anothername)// concatenation

const count =50;
console.log(name+count) // js automatically convert number to string and then concatenate

console.log(`hello my name is  ${name} and my age  is ${27}`);// template literals (template strings)  using backticks ``


const gamename = new String('chess') // string object

console.log(gamename)
console.log(typeof gamename) // object
console.log(gamename.toUpperCase()) // methods of string object does it change the real value of gamename?
 // no it does not change the real value of gamename cuz string is immutable in js means it belong to stakc and cannot be changed

//but its type is object then it should be mutalbe or goes to heap right?
// no it is still immutable because it is a wrapper object around string primitive
// and it is created using new keyword

// string has many method like toUpperCase(), toLowerCase(), slice(), substring(), substr(), replace(), trim(), charAt(), charCodeAt(), indexOf(), lastIndexOf(), includes(), startsWith(), endsWith(), split(), concat(), repeat() etc

console.log(gamename.slice(0,2)) // it will print ch
console.log(gamename.substring(0,2)) // it will print ch
console.log(gamename.substr(0,2)) // it will print ch

const url  = 'https://www.google.com/search?q=javascript+string+methods&oq=javascript+string+methods&aqs=chrome..69i57j0i512l9.3051j0j7&sourceid=chrome&ie=UTF-8'

console.log(url.replace('search','maps')) // it will replace search with maps   

// we should use string primitive instead of string object
// because string object has some performance issues and also some unexpected behavior