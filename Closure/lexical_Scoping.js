// ==========================================================
// LEXICAL SCOPING & CLOSURES IN JAVASCRIPT
// ==========================================================
//
// Lexical Scope:
// Scope of a variable is determined by WHERE it is written
// Inner functions can access outer variables
// Outer functions CANNOT access inner variables
//
// Closure:
// Function + its lexical environment (variables it remembers)
// Allows inner function to remember outer variables
// even after the outer function finishes execution
// ==========================================================


// ----------------------------------------------------------
// Example 1: Basic Lexical Scope + Fresh Execution Context
// ----------------------------------------------------------
function outerfunction() {
  let outerVariable = 5;

  function innerfunction() {
    console.log("outerVariable:", outerVariable);
    outerVariable++;
    console.log("outerVariable after increment:", outerVariable);
  }

  return innerfunction;
}

outerfunction(); // Creates new execution context (inner not called)
outerfunction(); // New 'outerVariable' again (fresh)
outerfunction(); // Again fresh


// ----------------------------------------------------------
// Example 2: Closure Preserves State
// ----------------------------------------------------------
let ans1 = outerfunction();
ans1(); // 5
ans1(); // 6
ans1(); // 7
//
// Why?
// `ans1` holds a reference to innerfunction
// innerfunction remembers outerVariable via closure
// So value persists between calls
// ----------------------------------------------------------


// ----------------------------------------------------------
// Example 3: Closure Still Works After Outer Execution Ends
// ----------------------------------------------------------
function outer() {
  let username = "admin";

  function inner() {
    console.log("username:", username);
  }

  return inner;
}

const ans2 = outer();
ans2(); // admin
//
// Even though outer() finished,
// inner() still accesses username thanks to closure
// ----------------------------------------------------------


// ----------------------------------------------------------
// Example 4: Counter Closure (State Preservation)
// ----------------------------------------------------------
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log("count:", count);
  };
}

const counter1 = counter();
counter1(); // 1
counter1(); // 2
counter1(); // 3
//
// Outer executes only once
// Inner function runs multiple times
// But still remembers 'count'
// ----------------------------------------------------------


// ----------------------------------------------------------
// Example 5: Using Closure For Private Variables
// ----------------------------------------------------------
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("count after increment:", count);
    },
    decrement() {
      count--;
      console.log("count after decrement:", count);
    }
  };
}

const counterObj = createCounter();
counterObj.increment();
counterObj.increment();
counterObj.decrement();
//
// count is NOT directly accessible
// Only accessible via functions => Private Variable
// ----------------------------------------------------------


// ----------------------------------------------------------
// Example 6: Outer Cannot Access Inner Variable
// ----------------------------------------------------------
function outerFunc() {
  let outerVar = "I am outer variable";

  function innerFunc() {
    let innerVar = "I am inner variable";
    console.log("outerVar inside innerFunc:", outerVar);
  }

  innerFunc();

  // console.log(innerVar); ❌ ERROR (not accessible)
}

outerFunc();
//
// Inner can access outer
// Outer CANNOT access inner
// ----------------------------------------------------------


// ----------------------------------------------------------
// Example 7: Classic MDN Closure Example
// ----------------------------------------------------------
function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Mozilla
//
// displayName remembers 'name' even after makeFunc finishes
// ----------------------------------------------------------


// ==========================================================
// BENEFITS OF CLOSURE
// ==========================================================
//
// 1️⃣ Data Privacy (Private Variables)
// 2️⃣ Maintain State Without Globals
// 3️⃣ Function Factories
// 4️⃣ Callback + Async Handling
// 5️⃣ Module Pattern
// 6️⃣ Event Handling
// 7️⃣ Currying & Partial Application
// 8️⃣ Memoization
// 9️⃣ Retry mechanisms
// 1️⃣0️⃣ Functional Programming
// ==========================================================


// ----------------------------------------------------------
// PRACTICAL USE CASE: Retry Logic Example
// ----------------------------------------------------------
function fetchData() {
  return Math.random() > 0.7
    ? Promise.resolve("Success")
    : Promise.reject("Failed");
}


// ------------------- Loop Based Retry --------------------
async function fetchDataWithRetry() {
  for (let i = 0; i < 3; i++) {
    try {
      const data = await fetchData();
      console.log("Data fetched successfully:", data);
      break;
    } catch (err) {
      console.log(`Attempt ${i + 1} failed:`, err);
      if (i === 2) console.log("Failed after 3 retries");
    }
  }
}


// ------------------- Recursive Retry ---------------------
async function fetchDataWithRetryRecursion(attempts = 3) {
  try {
    const data = await fetchData();
    console.log("Data fetched successfully:", data);
  } catch (err) {
    if (attempts - 1 > 0) {
      console.log(`Retrying... attempts left: ${attempts - 1}`);
      await fetchDataWithRetryRecursion(attempts - 1);
    } else {
      console.log("Failed after 3 retries");
    }
  }
}

// ----------------------------------------------------------
// Both retain access to 'attempt' or loop variables via closure
// ----------------------------------------------------------
