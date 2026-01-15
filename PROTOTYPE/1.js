// ============================================================================
// 🔥 JAVASCRIPT PROTOTYPES - COMPLETE IN-DEPTH GUIDE
// ============================================================================

// ============================================================================
// 📌 SECTION 1: WHAT IS PROTOTYPE? (THE WHY)
// ============================================================================

/*
 * 🤔 THE PROBLEM:
 * ---------------
 * Imagine you create 1000 user objects, and each needs a method like `sayHello()`.
 * If you put the method inside each object, you're creating 1000 copies of the SAME function!
 * This wastes memory and is inefficient.
 * 
 * 💡 THE SOLUTION - PROTOTYPE:
 * ----------------------------
 * JavaScript uses PROTOTYPE - a mechanism where objects can share methods/properties
 * through a "prototype chain". Instead of copying methods, objects LINK to a shared
 * prototype object containing common methods.
 * 
 * 📖 DEFINITION:
 * Every object in JavaScript has a hidden internal property called [[Prototype]]
 * (accessible via __proto__ or Object.getPrototypeOf()).
 * This links to another object (its prototype) forming a CHAIN.
 */


// ============================================================================
// 📌 SECTION 2: PROTOTYPAL INHERITANCE (THE HOW)
// ============================================================================

/*
 * 🔗 HOW PROTOTYPE CHAIN WORKS:
 * -----------------------------
 * When you access a property/method on an object:
 * 
 * STEP 1: JavaScript first looks IN the object itself
 * STEP 2: If NOT found → looks in object's prototype (__proto__)
 * STEP 3: If NOT found → looks in prototype's prototype
 * STEP 4: Continues until it reaches NULL (end of chain)
 * STEP 5: If still not found → returns undefined (for property) or throws error (for method call)
 * 
 * 📊 THE PROTOTYPE CHAIN VISUALIZATION:
 * 
 *    myArray → Array.prototype → Object.prototype → null
 *    myFunction → Function.prototype → Object.prototype → null
 *    myString → String.prototype → Object.prototype → null
 *    myNumber → Number.prototype → Object.prototype → null
 *    myObject → Object.prototype → null
 * 
 * ⚠️ IMPORTANT: Every prototype chain ENDS with null
 *    null has NO prototype - it's the END point
 */

// 👉 Example: Let's see prototype chain in action
const myArray = [1, 2, 3];
console.log(myArray.__proto__);                    // Array.prototype (has push, pop, map etc.)
console.log(myArray.__proto__.__proto__);          // Object.prototype (has toString, hasOwnProperty etc.)
console.log(myArray.__proto__.__proto__.__proto__); // null - END of chain!


// ============================================================================
// 📌 SECTION 3: FUNCTIONS ARE OBJECTS IN JAVASCRIPT
// ============================================================================

/*
 * 🎯 KEY INSIGHT:
 * In JavaScript, EVERYTHING is an object (except primitives).
 * Functions are ALSO objects - they can have properties!
 * 
 * Every FUNCTION has a special property called `prototype` (not __proto__)
 * This `prototype` property is used when the function is called with `new` keyword
 */

function multiply(x, y) {
    return x * y;
}

// 👉 Functions are objects - they can have properties
multiply.description = "This function multiplies two numbers";
console.log(multiply.description); // "This function multiplies two numbers"

// 👉 Every function has a `prototype` property (used with `new` keyword)
console.log(multiply.prototype); // {} - an empty object (prototype object)

// 👉 The result of multiply(5,3) is 15 (a number), not an object
// Numbers are primitives but JS wraps them temporarily to access methods
console.log(typeof multiply(5, 3)); // "number"


// ============================================================================
// 📌 SECTION 4: THE PROBLEM - WHY WE NEED `new` AND `this`
// ============================================================================

/*
 * 🚨 THE PROBLEM:
 * ---------------
 * We want to create multiple similar objects (like users, products, etc.)
 * Each object should have:
 *   - Its OWN data (like username, age)
 *   - SHARED methods (like printMe, increment) - to save memory
 * 
 * Let's see what happens WITHOUT using `new` keyword...
 */

// ❌ WRONG WAY - This is a CONSTRUCTOR FUNCTION (meant to be used with `new`)
function Creator(username, age) {
    // `this` refers to the CONTEXT in which function is called
    // Without `new`, `this` refers to global object (window in browser, global in Node)
    // With `new`, `this` refers to a NEW empty object
    
    this.username = username;
    this.age = age;
}

// Adding methods to prototype (shared among all instances)
// 👉 WHY on prototype? So we don't create new function for EACH instance!
Creator.prototype.increment = function() {
    // ❌ age++ would NOT work here!
    // It would look for a variable called `age` in:
    //   1. Function's local scope - NOT FOUND
    //   2. Global scope - NOT FOUND or WRONG value
    // 
    // ✅ this.age++ works because `this` refers to the specific instance
    // It knows WHICH object's age to increment
    this.age++;
};

Creator.prototype.printMe = function() {
    // ✅ Using `this` to access the specific object's properties
    console.log(`Username is ${this.username} and age is ${this.age}`);
};


// ============================================================================
// 📌 SECTION 5: WITHOUT `new` - THE DISASTER
// ============================================================================

/*
 * 🚨 CALLING Constructor WITHOUT `new` keyword:
 * 
 * When you call Creator("chai", 23) WITHOUT `new`:
 *   - `this` refers to GLOBAL object (window/global)
 *   - Properties are added to GLOBAL object (polluting global scope!)
 *   - Function returns undefined (not an object)
 *   - You CANNOT access the methods
 */

// ❌ WRONG - Without `new`
const chai = Creator("chai", 23);   // Returns undefined!
const chai2 = Creator("chai2", 24); // Returns undefined!

console.log(chai);  // undefined - because function didn't return anything!
console.log(chai2); // undefined

// ❌ This will CRASH! chai is undefined, can't call printMe on undefined
// chai.printMe(); // TypeError: Cannot read property 'printMe' of undefined

// 🚨 SIDE EFFECT: Properties leaked to global object!
// console.log(global.username); // In Node.js: "chai2" (last value set)
// console.log(window.username); // In Browser: "chai2"


// ============================================================================
// 📌 SECTION 6: THE `new` KEYWORD - THE MAGIC BEHIND THE SCENES
// ============================================================================

/*
 * ✨ WHAT `new` KEYWORD DOES (STEP BY STEP):
 * ==========================================
 * 
 * When you write: const obj = new Creator("chai3", 25)
 * 
 * JavaScript does these 4 things AUTOMATICALLY behind the scenes:
 * 
 * STEP 1: 🆕 CREATE - Creates a brand new empty object
 *         const newObj = {};
 * 
 * STEP 2: 🔗 LINK - Links the new object's __proto__ to Constructor's prototype
 *         newObj.__proto__ = Creator.prototype;
 *         (This is HOW the object can access shared methods!)
 * 
 * STEP 3: 🎯 BIND - Calls the function with `this` bound to the new object
 *         Creator.call(newObj, "chai3", 25);
 *         (Now `this.username = username` sets property on newObj!)
 * 
 * STEP 4: ↩️ RETURN - Returns the new object automatically
 *         return newObj;
 *         (Unless function explicitly returns another object)
 * 
 * 📝 PSEUDO CODE - What `new` does internally:
 * 
 * function simulateNew(Constructor, ...args) {
 *     // Step 1: Create empty object
 *     const obj = {};
 *     
 *     // Step 2: Link prototype
 *     obj.__proto__ = Constructor.prototype;
 *     // OR: Object.setPrototypeOf(obj, Constructor.prototype);
 *     
 *     // Step 3: Call constructor with `this` = obj
 *     const result = Constructor.apply(obj, args);
 *     
 *     // Step 4: Return object (or result if it's an object)
 *     return (typeof result === 'object' && result !== null) ? result : obj;
 * }
 */

// ✅ CORRECT WAY - With `new` keyword
const chai3 = new Creator("chai3", 25);
const chai4 = new Creator("chai4", 26);

console.log(chai3); // Creator { username: 'chai3', age: 25 }
console.log(chai4); // Creator { username: 'chai4', age: 26 }

// ✅ Now we can access methods from prototype!
chai3.printMe(); // "Username is chai3 and age is 25"
chai4.printMe(); // "Username is chai4 and age is 26"

// ✅ Methods modify the SPECIFIC object
chai3.increment();
chai3.printMe(); // "Username is chai3 and age is 26" (age increased!)
chai4.printMe(); // "Username is chai4 and age is 26" (chai4's age unchanged!)


// ============================================================================
// 📌 SECTION 7: VISUALIZING THE PROTOTYPE CHAIN
// ============================================================================

/*
 * 📊 After `new Creator("chai3", 25)`:
 * 
 * chai3 object:
 * {
 *   username: "chai3",
 *   age: 25,
 *   __proto__: Creator.prototype  ←── LINK created by `new`
 * }
 * 
 * Creator.prototype:
 * {
 *   increment: function() {...},
 *   printMe: function() {...},
 *   __proto__: Object.prototype  ←── Default link
 * }
 * 
 * Object.prototype:
 * {
 *   toString: function() {...},
 *   hasOwnProperty: function() {...},
 *   __proto__: null  ←── END of chain
 * }
 * 
 * 🔍 When you call chai3.printMe():
 * 1. JS looks in chai3 → NOT FOUND
 * 2. JS looks in chai3.__proto__ (Creator.prototype) → ✅ FOUND!
 * 3. Calls printMe with `this` = chai3
 */

// Let's verify the prototype chain!
console.log(chai3.__proto__ === Creator.prototype);                    // true
console.log(chai3.__proto__.__proto__ === Object.prototype);           // true
console.log(chai3.__proto__.__proto__.__proto__ === null);             // true


// ============================================================================
// 📌 SECTION 8: THE `this` KEYWORD - DEEP DIVE
// ============================================================================

/*
 * 🎯 UNDERSTANDING `this`:
 * ========================
 * 
 * `this` is a special keyword that refers to the CONTEXT of execution.
 * Its value depends on HOW the function is called, not WHERE it's defined.
 * 
 * 📋 RULES FOR `this`:
 * 
 * 1️⃣ GLOBAL CONTEXT:
 *    - In browser: this = window
 *    - In Node.js: this = global (or {} in module)
 * 
 * 2️⃣ OBJECT METHOD:
 *    - this = the object calling the method
 *    - obj.method() → this = obj
 * 
 * 3️⃣ CONSTRUCTOR (with new):
 *    - this = newly created object
 *    - new Constructor() → this = new empty object
 * 
 * 4️⃣ EXPLICIT BINDING:
 *    - call(), apply(), bind() can set `this` explicitly
 *    - func.call(obj) → this = obj
 * 
 * 5️⃣ ARROW FUNCTIONS:
 *    - NO own `this` - inherits from parent scope
 *    - () => {} → this = parent's this
 */

// Example demonstrating `this` in different contexts
const person = {
    name: "John",
    
    // Regular function - `this` refers to the object calling it
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    
    // Arrow function - `this` is inherited from parent (NOT the object!)
    greetArrow: () => {
        console.log(`Hello, I'm ${this.name}`); // `this` is NOT person!
    }
};

person.greet();      // "Hello, I'm John" ✅ (this = person)
person.greetArrow(); // "Hello, I'm undefined" ❌ (this = global/window)


// ============================================================================
// 📌 SECTION 9: EXTENDING BUILT-IN PROTOTYPES (USE WITH CAUTION!)
// ============================================================================

/*
 * 🛠️ PROBLEM:
 * We want a method `trueLength` that gives string length WITHOUT spaces
 * 
 * 💡 SOLUTION:
 * We can add methods to built-in prototypes (String, Array, Object)
 * 
 * ⚠️ WARNING:
 * Extending built-in prototypes is POWERFUL but DANGEROUS!
 * - Can conflict with future JavaScript features
 * - Can conflict with other libraries
 * - Use carefully in production code
 */

let myName = "hitesh      ";
console.log(myName.length);           // 12 (includes spaces)
// console.log(myName.trueLength);    // undefined - doesn't exist yet!

// ✅ Adding custom method to String prototype
String.prototype.trueLength = function() {
    // `this` refers to the string calling this method
    // trim() removes leading/trailing spaces
    return this.trim().length;
};

// Now ALL strings have access to trueLength!
console.log(myName.trueLength());           // 6 (without trailing spaces)
console.log("hello world   ".trueLength()); // 11


// ============================================================================
// 📌 SECTION 10: PROTOTYPE CHAIN IN ACTION
// ============================================================================

let myHeros = ["hulk", "thor", "ironman", "spiderman    "];

let heroPower = {
    thor: "hammer",
    ironman: "suit",
    hulk: "smash",
    spiderman: "sling",
    
    getSpiderPower: function() {
        // `this` refers to heroPower object
        console.log("Spidy power is " + this.spiderman);
    }
};

// 🔧 Adding method to Object.prototype
// This method will be available to EVERYTHING (arrays, strings, objects, etc.)
// Because EVERYTHING ultimately inherits from Object.prototype!
Object.prototype.hitesh = function() {
    console.log("hitesh method called on:", typeof this);
};

// 🔧 Adding method to Array.prototype
// This method will ONLY be available to arrays
Array.prototype.heyGhanshyam = function() {
    console.log("Hey Ghanshyam! This array has", this.length, "items");
};

// ✅ Array can access Object.prototype methods (through prototype chain)
myHeros.hitesh();       // Works! Array → Array.prototype → Object.prototype
myHeros.heyGhanshyam(); // Works! Array → Array.prototype

// ✅ String can access Object.prototype methods
myName.hitesh();        // Works! String → String.prototype → Object.prototype

// ❌ String CANNOT access Array.prototype methods
// myName.heyGhanshyam(); // TypeError! String is NOT in Array's chain

// ✅ Object can access Object.prototype methods
heroPower.hitesh();     // Works! Object → Object.prototype

/*
 * 📊 PROTOTYPE CHAIN VISUALIZATION:
 * 
 * myHeros (Array)
 *    ↓
 * Array.prototype (push, pop, map, heyGhanshyam)
 *    ↓
 * Object.prototype (toString, hitesh)
 *    ↓
 * null
 * 
 * myName (String)
 *    ↓
 * String.prototype (charAt, slice, trueLength)
 *    ↓
 * Object.prototype (toString, hitesh)
 *    ↓
 * null
 */


// ============================================================================
// 📌 SECTION 11: MODERN INHERITANCE WITH __proto__ (ES6+)
// ============================================================================

/*
 * 🔗 SETTING UP INHERITANCE:
 * 
 * Old way: Using __proto__ directly (not recommended for production)
 * Modern way: Object.create(), Object.setPrototypeOf(), or ES6 classes
 */

const Teacher = {
    makeVideo: true,
    teachStudents: function() {
        console.log("Teaching students...");
    }
};

const TeachingSupport = {
    isAvailable: false,
    helpStudents: function() {
        console.log("Helping students with doubts...");
    }
};

// Creating object that inherits from TeachingSupport
const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport  // Linking prototype chain
};

// ✅ TASupport has its own properties
console.log(TASupport.makeAssignment); // true

// ✅ TASupport can access inherited properties
console.log(TASupport.isAvailable);    // false (from TeachingSupport)
TASupport.helpStudents();              // "Helping students with doubts..."

// 📝 Better way to set prototype (modern approach)
const TASupport2 = Object.create(TeachingSupport);
TASupport2.makeAssignment = true;
TASupport2.fullTime = true;


// ============================================================================
// 📌 SECTION 12: SUMMARY - KEY TAKEAWAYS
// ============================================================================

/*
 * 🎯 KEY CONCEPTS TO REMEMBER:
 * 
 * 1️⃣ PROTOTYPE CHAIN:
 *    - Every object has __proto__ linking to its prototype
 *    - Chain ends at null
 *    - JS looks up the chain to find properties/methods
 * 
 * 2️⃣ `new` KEYWORD (4 Steps):
 *    - Creates new empty object
 *    - Links object's __proto__ to Constructor.prototype
 *    - Binds `this` to new object and calls constructor
 *    - Returns the new object
 * 
 * 3️⃣ `this` KEYWORD:
 *    - Refers to execution context
 *    - With `new`: refers to newly created object
 *    - In method: refers to object calling the method
 *    - Arrow functions: inherit `this` from parent
 * 
 * 4️⃣ WHY USE PROTOTYPE?
 *    - Memory efficiency (shared methods)
 *    - Inheritance without copying
 *    - Extend built-in objects (carefully!)
 * 
 * 5️⃣ COMMON MISTAKES:
 *    - Forgetting `new` keyword
 *    - Using `age++` instead of `this.age++` in methods
 *    - Not understanding arrow function's `this`
 */

console.log("\n=== END OF PROTOTYPE TUTORIAL ===\n");

