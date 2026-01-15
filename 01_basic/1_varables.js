// variable   it stored data value to used in program
// there are 3 way to declre the varible in js
//var (we dont use any more  because of scope issue) 
// let  it is widely used now day ,block scope varible
// const it is also a block scope varbile but it value cant be changed/reassigned

// ========================== CONST================================

const accountId= 1234343 // we use const for variables that should not be reassigned
// const is blocekd scope varbile  and its value cant be reassigned or changed
 accountId=23445 // this will throw an error because we are trying to reassign the value of a const variable

// when we talk about reassigne ment it means chanign the value of its entirely new value
//for example when we assigne a new value this means it create a new memory location for it  in cont changing the current or assign memroy location is not allowed


// clear explnation of const and 
// `const` is used when a variable name should always refer to the same thing.
// In other words: the variable binding (reference) cannot change.

const accountId1 = 1234343;

// ❌ Not allowed:
// Reassigning means trying to point `accountId` to a NEW value / NEW memory reference.
// `const` prevents this.
accountId1 = 23445; // Error: Assignment to constant variable



// ----------------------------------------------
// But this story gets interesting with objects 👇
// ----------------------------------------------
const account = {
  username: "ganesan",
  balance: 5000
};

// ✅ Allowed:
// We are NOT changing the reference of `account`.
// We are only modifying the data inside the existing memory location.
account.balance = 7000;
account.username = "updatedUser";


// ❌ Not allowed:
// This tries to make `account` point to a completely new object (new reference).
account = {
  username: "newUser",
  balance: 9999
}; // Error again



// ----------------------------------------------
// Summary in code words 🌟
// ----------------------------------------------
//
// `const` means:
// 1️⃣ Variable binding / reference cannot change
// 2️⃣ Reassignment is NOT allowed
// 3️⃣ For objects & arrays: contents CAN change (because the reference is same)
// 4️⃣ For primitive values (number, string, etc.): no modification possible



// ========================== LET ================================

// `let` is used when a variable's value is expected to change.
// It has block scope, which means it only lives inside { } blocks.

let accountName = "ghan";

// ✅ Allowed
// Reassignment is fine because `let` allows changing the value.
accountName = "new ghan";
// like we dicuss ed earlier reassignment means changing the value to a new value and changing the memory location


// ========================== VAR ================================

// `var` is the old way of declaring variables in JavaScript.
// It still works, but it has dangerous behavior, so modern JS avoids it.

var accountEmail = "ghan@email";

// `var` is FUNCTION scoped, not BLOCK scoped.
// It ignores normal { } block boundaries, which can create weird bugs.

if (true) {
  var testVar = "I escape the block 😈";
  let testLet = "I stay inside the block 🙂";
} // even we are outside the block we can access the testVar which is block scoped   this can create issue in larger code base
// suppose in larger code if we have multiple block and in one block we have declared the varible with same name this can create issue because var dont have block scope it will override the previous value


console.log(testVar); // ✅ Works because var leaks out of the block
console.log(testLet); // ❌ Error, testLet is not defined


// ========================== MORE VAR ISSUES ================================

// 1️⃣ var allows REDECLARATION (bad behavior)
var x = 10;
var x = 20;  // No error, silently overwrites. Dangerous.
// when we use var we can redeclare the varible with same name and it overrite the previous value this can create issue with  larger code base
// 2️⃣ let prevents accidental redeclaration
let y = 10;
// let y = 20;  // ❌ Error, stops mistakes

// 3️⃣ var is hoisted in a confusing way
console.log(z); // 😵 Undefined, but no error
var z = 50;

// but with let:
console.log(a); // ❌ Error due to Temporal Dead Zone
let a = 10;



