const accountId= 1234343 // we use const for variables that should not be reassigned
let accountName= "ghan" // we use let instead of var cuz it has better scope management
var accountEmail= "ghan@email"// we dont use var anymore in js cuz it has some issues with scope
accountCity ="jaipur" // this is a global variable because it is not declared with var, let, or const
// accountId= 234343// This will throw an error because accountId is a constant

let accountState;

/*
prefer not to use var anymore 
because of issue with the scope
*/
accountEmail ='ghan_new@email' // This is valid because accountEmail is declared with var
accountName= "new ghan" // This is valid because accountName is declared with let

console.log(accountId)
console.log(accountName)
console.log(accountEmail)
console.log(accountCity) // This will work because accountCity is a global variable
console.log(accountState)// This will print undefined because accountState is declared but not initialized

console.table([accountId, accountName, accountEmail, accountState ]); // This will display the variables in a table format in the console