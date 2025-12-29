
# JavaScript Data Types - Complete Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Primitive Data Types](#primitive-data-types)
3. [Reference Data Types](#reference-data-types)
4. [Memory Management](#memory-management)
5. [Type Checking Methods](#type-checking-methods)
6. [Type Conversion](#type-conversion)
7. [Advanced Concepts](#advanced-concepts)
8. [Best Practices](#best-practices)
9. [Common Pitfalls](#common-pitfalls)

## Introduction

JavaScript is a **dynamically typed language**, meaning you don't need to declare variable types explicitly. Variables can hold different types of values during runtime. Understanding data types is crucial for effective JavaScript programming.

JavaScript data types are divided into two main categories:
- **Primitive Types**: Stored in stack memory, immutable
- **Reference Types**: Stored in heap memory, mutable

## Primitive Data Types

Primitive data types are the basic building blocks of JavaScript. They are **immutable** (cannot be changed) and stored directly in **stack memory**.

### 1. Number

JavaScript uses a single `Number` type for all numeric values (integers and floating-point numbers).

```javascript
// Integer and floating-point numbers
let integer = 42;
let float = 3.14159;
let negative = -17;
let exponential = 2.5e6; // 2,500,000

console.log(typeof integer); // "number"
console.log(typeof float);   // "number"

// Special numeric values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

console.log(typeof infinity);    // "number"
console.log(typeof notANumber);  // "number"

// Number methods and properties
console.log(Number.MAX_VALUE);          // Largest representable number
console.log(Number.MIN_VALUE);          // Smallest representable positive number
console.log(Number.MAX_SAFE_INTEGER);   // Largest safe integer
console.log(Number.isInteger(42));      // true
console.log(Number.isNaN(NaN));         // true
console.log(parseInt("42.7"));          // 42
console.log(parseFloat("42.7"));        // 42.7
```

**Important Notes:**
- JavaScript numbers are 64-bit floating-point (IEEE 754 standard)
- Safe integer range: -(2^53 - 1) to (2^53 - 1)
- Beyond safe integers, precision may be lost

### 2. String

Strings represent textual data and can be created using single quotes, double quotes, or template literals.

```javascript
// Different string declaration methods
let singleQuote = 'Hello World';
let doubleQuote = "Hello World";
let templateLiteral = `Hello World`;

// Multiline strings with template literals
let multiline = `This is a
multiline string
spanning multiple lines`;

// String interpolation
let name = "John";
let age = 25;
let greeting = `Hello, my name is ${name} and I'm ${age} years old`;

// String methods
let text = "JavaScript is awesome";
console.log(text.length);              // 20
console.log(text.toUpperCase());       // "JAVASCRIPT IS AWESOME"
console.log(text.toLowerCase());       // "javascript is awesome"
console.log(text.charAt(0));           // "J"
console.log(text.indexOf("Script"));   // 4
console.log(text.slice(0, 10));        // "JavaScript"
console.log(text.split(" "));          // ["JavaScript", "is", "awesome"]
console.log(text.replace("awesome", "great")); // "JavaScript is great"

// String immutability demonstration
let original = "Hello";
let modified = original.toUpperCase();
console.log(original); // "Hello" (unchanged)
console.log(modified); // "HELLO" (new string created)
```

### 3. Boolean

Boolean represents logical values: `true` or `false`.

```javascript
let isActive = true;
let isComplete = false;

// Boolean conversion
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// Falsy values in JavaScript
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyValues.forEach(value => {
    console.log(`${value} is ${Boolean(value)}`);
});

// Truthy values (everything else)
let truthyValues = [true, 1, "hello", [], {}, function(){}];
truthyValues.forEach(value => {
    console.log(`${value} is ${Boolean(value)}`);
});
```

### 4. Null

`null` represents an intentional absence of any object value.

```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a known bug in JavaScript)

// Checking for null
console.log(emptyValue === null);        // true
console.log(emptyValue == undefined);    // true (loose equality)
console.log(emptyValue === undefined);   // false (strict equality)

// Practical use of null
let userData = null; // Explicitly no data
function getUserData() {
    // If no user found, return null
    return null;
}
```

### 5. Undefined

`undefined` represents a variable that has been declared but not assigned a value.

```javascript
let notAssigned;
console.log(notAssigned);        // undefined
console.log(typeof notAssigned); // "undefined"

// Function parameters
function greet(name) {
    console.log(typeof name); // "undefined" if no argument passed
}
greet(); // name is undefined

// Object properties
let person = { name: "John" };
console.log(person.age); // undefined (property doesn't exist)

// Array elements
let arr = [1, 2, 3];
console.log(arr[10]); // undefined (index doesn't exist)
```

### 6. Symbol

Symbols are unique identifiers, primarily used for object property keys to avoid naming conflicts.

```javascript
// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol("description");

console.log(sym2 === sym3); // false (symbols are always unique)
console.log(typeof sym1);   // "symbol"

// Using symbols as object keys
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 12345 // Symbol as property key
};

console.log(user[id]); // 12345
console.log(user.id);  // undefined (different from symbol)

// Symbols are not enumerable
for (let key in user) {
    console.log(key); // Only prints "name", not the symbol key
}

// Global symbol registry
let globalSym1 = Symbol.for("app.id");
let globalSym2 = Symbol.for("app.id");
console.log(globalSym1 === globalSym2); // true (same global symbol)

// Well-known symbols
console.log(Symbol.iterator);    // Symbol for iterator protocol
console.log(Symbol.toStringTag); // Symbol for custom toString behavior
```

### 7. BigInt (ES2020)

BigInt allows representation of integers larger than `Number.MAX_SAFE_INTEGER`.

```javascript
// Creating BigInt
let bigNumber1 = 1234567890123456789012345678901234567890n;
let bigNumber2 = BigInt("1234567890123456789012345678901234567890");

console.log(typeof bigNumber1); // "bigint"

// BigInt operations
let a = 10n;
let b = 20n;
console.log(a + b); // 30n
console.log(a * b); // 200n

// Cannot mix BigInt with regular numbers
// console.log(10n + 5); // TypeError: Cannot mix BigInt and other types

// Conversion
console.log(Number(10n)); // 10 (loses precision for large numbers)
console.log(BigInt(10));  // 10n
```

## Reference Data Types

Reference types are objects stored in heap memory. Variables hold references (memory addresses) to these objects.

### 1. Object

Objects are collections of key-value pairs.

```javascript
// Object creation methods
let obj1 = {}; // Object literal
let obj2 = new Object(); // Constructor
let obj3 = Object.create(null); // Object.create()

// Object with properties
let person = {
    name: "John",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York"
    },
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};

// Accessing properties
console.log(person.name);        // "John"
console.log(person["age"]);      // 30
console.log(person.address.city); // "New York"

// Adding/modifying properties
person.salary = 50000;
person["department"] = "IT";
person.age = 31;

// Object methods
console.log(Object.keys(person));     // Array of property names
console.log(Object.values(person));   // Array of property values
console.log(Object.entries(person));  // Array of [key, value] pairs

// Object reference behavior
let person1 = { name: "Alice" };
let person2 = person1; // Reference copy
person2.name = "Bob";
console.log(person1.name); // "Bob" (both variables reference same object)

// Object cloning
let shallowCopy = { ...person1 }; // Shallow copy
let deepCopy = JSON.parse(JSON.stringify(person1)); // Deep copy (limited)
```

### 2. Array

Arrays are ordered collections of values.

```javascript
// Array creation
let arr1 = []; // Array literal
let arr2 = new Array(); // Constructor
let arr3 = Array.from("hello"); // ["h", "e", "l", "l", "o"]

// Array with mixed data types
let mixedArray = [1, "hello", true, null, { name: "John" }, [1, 2, 3]];

console.log(typeof mixedArray);        // "object"
console.log(Array.isArray(mixedArray)); // true

// Array methods
let numbers = [1, 2, 3, 4, 5];

// Mutating methods (change original array)
numbers.push(6);        // Add to end: [1, 2, 3, 4, 5, 6]
numbers.pop();          // Remove from end: [1, 2, 3, 4, 5]
numbers.unshift(0);     // Add to beginning: [0, 1, 2, 3, 4, 5]
numbers.shift();        // Remove from beginning: [1, 2, 3, 4, 5]
numbers.splice(2, 1);   // Remove 1 element at index 2: [1, 2, 4, 5]

// Non-mutating methods (return new array)
let doubled = numbers.map(x => x * 2);     // [2, 4, 8, 10]
let filtered = numbers.filter(x => x > 2); // [4, 5]
let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 12

// Array destructuring
let [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [4, 5]
```

### 3. Function

Functions are first-class objects in JavaScript.

```javascript
// Function declarations
function regularFunction(param) {
    return `Hello ${param}`;
}

// Function expressions
let functionExpression = function(param) {
    return `Hello ${param}`;
};

// Arrow functions
let arrowFunction = (param) => `Hello ${param}`;
let arrowFunctionBlock = (param) => {
    return `Hello ${param}`;
};

console.log(typeof regularFunction); // "function"

// Functions as objects
regularFunction.customProperty = "I'm a property";
console.log(regularFunction.customProperty); // "I'm a property"

// Higher-order functions
function higherOrder(callback) {
    return callback("World");
}

console.log(higherOrder(regularFunction)); // "Hello World"

// Function methods
function greet(greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
}

let person = { name: "John" };

// call() and apply()
console.log(greet.call(person, "Hello", "!")); // "Hello, I'm John!"
console.log(greet.apply(person, ["Hi", "."])); // "Hi, I'm John."

// bind()
let boundGreet = greet.bind(person, "Hey");
console.log(boundGreet("?")); // "Hey, I'm John?"
```

### 4. Date

Date objects represent dates and times.

```javascript
// Creating dates
let now = new Date();
let specificDate = new Date("2023-12-25");
let constructedDate = new Date(2023, 11, 25, 10, 30, 0); // Month is 0-indexed

console.log(typeof now); // "object"

// Date methods
console.log(now.getFullYear());  // Current year
console.log(now.getMonth());     // Current month (0-11)
console.log(now.getDate());      // Current day of month
console.log(now.getDay());       // Current day of week (0-6)
console.log(now.getHours());     // Current hour
console.log(now.getMinutes());   // Current minute
console.log(now.getSeconds());   // Current second

// Date formatting
console.log(now.toString());     // Full date string
console.log(now.toDateString()); // Date portion only
console.log(now.toTimeString()); // Time portion only
console.log(now.toISOString());  // ISO format
console.log(now.toLocaleString()); // Locale-specific format

// Date arithmetic
let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);

let daysDifference = (tomorrow - now) / (1000 * 60 * 60 * 24);
console.log(daysDifference); // 1
```

## Memory Management

Understanding how JavaScript manages memory is crucial for writing efficient code.

### Stack vs Heap Memory

```javascript
// STACK MEMORY - Primitive types
let a = 10;        // Stored in stack
let b = a;         // Copy of value stored in stack
b = 20;            // Only b changes
console.log(a);    // 10 (unchanged)
console.log(b);    // 20

// HEAP MEMORY - Reference types
let obj1 = { value: 10 }; // Object stored in heap, reference in stack
let obj2 = obj1;          // Copy of reference, same object
obj2.value = 20;          // Modifies the same object
console.log(obj1.value);  // 20 (changed!)
console.log(obj2.value);  // 20

// Memory allocation demonstration
function createObjects() {
    let localObj = { data: "temporary" };
    return localObj;
} // localObj variable destroyed, but object may remain if referenced

let persistentObj = createObjects(); // Object persists because it's referenced
```

### Garbage Collection

JavaScript uses automatic garbage collection to manage memory.

```javascript
// Objects become eligible for garbage collection when no references exist
let obj = { name: "John" };
obj = null; // Original object now eligible for garbage collection

// Circular references (handled by modern JS engines)
function createCircularReference() {
    let objA = {};
    let objB = {};
    objA.ref = objB;
    objB.ref = objA;
    // Both objects will be garbage collected when function ends
}

// Memory leaks to avoid
let globalArray = [];
function memoryLeak() {
    // Adding to global array creates persistent references
    globalArray.push(new Array(1000000).fill("data"));
}

// Better approach - clean up references
function properCleanup() {
    let localArray = new Array(1000000).fill("data");
    // Process data
    // localArray automatically garbage collected when function ends
}
```

## Type Checking Methods

JavaScript provides several ways to check data types.

### 1. typeof Operator

```javascript
// typeof returns string representation of type
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (known bug!)
console.log(typeof Symbol());    // "symbol"
console.log(typeof 10n);         // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### 2. instanceof Operator

```javascript
// instanceof checks prototype chain
console.log([] instanceof Array);        // true
console.log({} instanceof Object);       // true
console.log(new Date() instanceof Date); // true
console.log("hello" instanceof String);  // false (primitive)
console.log(new String("hello") instanceof String); // true (object wrapper)

// Custom constructor
function Person(name) {
    this.name = name;
}
let john = new Person("John");
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true (Person inherits from Object)
```

### 3. Array.isArray()

```javascript
// Reliable way to check for arrays
console.log(Array.isArray([]));         // true
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));         // false
console.log(Array.isArray("hello"));   // false

// Why not use typeof or instanceof for arrays from different frames/windows
let iframe = document.createElement('iframe');
document.body.appendChild(iframe);
let iframeArray = iframe.contentWindow.Array(1, 2, 3);
console.log(iframeArray instanceof Array);        // false
console.log(Array.isArray(iframeArray));         // true
```

### 4. Object.prototype.toString.call()

```javascript
// Most reliable type checking method
function getExactType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getExactType(42));           // "Number"
console.log(getExactType("hello"));      // "String"
console.log(getExactType(true));         // "Boolean"
console.log(getExactType(null));         // "Null"
console.log(getExactType(undefined));    // "Undefined"
console.log(getExactType([]));           // "Array"
console.log(getExactType({}));           // "Object"
console.log(getExactType(new Date()));   // "Date"
console.log(getExactType(/regex/));      // "RegExp"
console.log(getExactType(function(){})); // "Function"
```

## Type Conversion

JavaScript performs automatic type conversion (coercion) and allows explicit conversion.

### Implicit Type Conversion (Coercion)

```javascript
// String concatenation
console.log("5" + 3);     // "53" (number to string)
console.log("5" + true);  // "5true" (boolean to string)
console.log("5" + null);  // "5null" (null to string)

// Arithmetic operations
console.log("5" - 3);     // 2 (string to number)
console.log("5" * "2");   // 10 (both strings to numbers)
console.log(true + 1);    // 2 (boolean to number)
console.log(false + 1);   // 1 (boolean to number)

// Comparison coercion
console.log("5" == 5);    // true (string converted to number)
console.log("5" === 5);   // false (no coercion with strict equality)
console.log(null == undefined);  // true (special case)
console.log(null === undefined); // false (different types)

// Boolean context coercion
if ("hello") {            // "hello" converted to true
    console.log("Truthy string");
}

if (0) {                  // 0 converted to false
    console.log("This won't run");
}
```

### Explicit Type Conversion

```javascript
// To Number
console.log(Number("42"));      // 42
console.log(Number("42.5"));    // 42.5
console.log(Number("hello"));   // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN

console.log(parseInt("42"));    // 42
console.log(parseInt("42.9"));  // 42 (truncates)
console.log(parseFloat("42.9")); // 42.9
console.log(+"42");             // 42 (unary plus operator)

// To String
console.log(String(42));        // "42"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log((42).toString());   // "42"
console.log(42 + "");           // "42" (concatenation)

// To Boolean
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(!!42);              // true (double negation)
```

## Advanced Concepts

### 1. Wrapper Objects

```javascript
// Primitive wrapper objects
let str = "hello";
let strObj = new String("hello");

console.log(typeof str);    // "string"
console.log(typeof strObj); // "object"

console.log(str == strObj);  // true (coercion)
console.log(str === strObj); // false (different types)

// Auto-boxing: primitives temporarily wrapped when accessing methods
let text = "JavaScript";
console.log(text.toUpperCase()); // Temporary String object created and destroyed

// This is what happens behind the scenes:
// let temp = new String(text);
// let result = temp.toUpperCase();
// temp = null; // Temporary object destroyed
// return result;
```

### 2. Immutability of Primitives

```javascript
// Primitives cannot be mutated
let str = "hello";
str[0] = "H"; // Doesn't work (no error in non-strict mode)
console.log(str); // "hello" (unchanged)

// String methods return new strings
let original = "hello";
let capitalized = original.toUpperCase();
console.log(original);    // "hello" (unchanged)
console.log(capitalized); // "HELLO" (new string)

// Number operations create new values
let a = 5;
let b = a + 1;
console.log(a); // 5 (unchanged)
console.log(b); // 6 (new value)
```

### 3. Reference Equality vs Value Equality

```javascript
// Primitive comparison (by value)
let num1 = 42;
let num2 = 42;
console.log(num1 === num2); // true

let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2); // true

// Object comparison (by reference)
let obj1 = { value: 42 };
let obj2 = { value: 42 };
let obj3 = obj1;

console.log(obj1 === obj2); // false (different objects)
console.log(obj1 === obj3); // true (same reference)

// Array comparison
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different arrays)

// Deep equality comparison (manual)
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(deepEqual(obj1, obj2)); // true (same content)
```

## Best Practices

### 1. Type Safety

```javascript
// Use strict equality
console.log(5 === "5");  // false (recommended)
console.log(5 == "5");   // true (avoid this)

// Explicit type checking
function processNumber(value) {
    if (typeof value !== 'number') {
        throw new TypeError('Expected a number');
    }
    return value * 2;
}

// Type guards
function isString(value) {
    return typeof value === 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}
```

### 2. Null and Undefined Handling

```javascript
// Null coalescing operator (ES2020)
let value = null;
let defaultValue = value ?? 'default';
console.log(defaultValue); // 'default'

// Optional chaining (ES2020)
let user = { address: { street: '123 Main St' } };
console.log(user?.address?.street);    // '123 Main St'
console.log(user?.phone?.number);      // undefined (no error)

// Traditional null checking
function processUser(user) {
    if (user && user.address && user.address.street) {
        return user.address.street;
    }
    return 'No address';
}
```

### 3. Immutable Data Patterns

```javascript
// Object immutability
const originalObj = { name: 'John', age: 30 };

// Don't mutate - create new object
const updatedObj = { ...originalObj, age: 31 };
console.log(originalObj.age); // 30 (unchanged)
console.log(updatedObj.age);  // 31

// Array immutability
const originalArray = [1, 2, 3];

// Don't mutate - create new array
const newArray = [...originalArray, 4];
console.log(originalArray); // [1, 2, 3] (unchanged)
console.log(newArray);      // [1, 2, 3, 4]

// Deep freezing objects
const frozenObj = Object.freeze({
    name: 'John',
    hobbies: Object.freeze(['reading', 'swimming'])
});
```

## Common Pitfalls

### 1. typeof null

```javascript
// The famous typeof null bug
console.log(typeof null); // "object" (should be "null")

// Correct null checking
function isNull(value) {
    return value === null;
}

function isNullOrUndefined(value) {
    return value == null; // Matches both null and undefined
}
```

### 2. Array vs Object Detection

```javascript
// Wrong way to check for array
console.log(typeof []);        // "object"
console.log([] instanceof Array); // true, but fails across frames

// Right way
console.log(Array.isArray([])); // true (always reliable)
```

### 3. Floating Point Precision

```javascript
// Floating point arithmetic issues
console.log(0.1 + 0.2);         // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Solution: Use Number.EPSILON for comparison
function almostEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}
console.log(almostEqual(0.1 + 0.2, 0.3)); // true

// Or use toFixed() for display
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
```

### 4. Automatic Semicolon Insertion (ASI)

```javascript
// ASI can cause unexpected behavior
function getValue() {
    return    // ASI inserts semicolon here
    {
        value: 42
    };
}
console.log(getValue()); // undefined (not the object!)

// Correct approach
function getValue() {
    return {  // Keep opening brace on same line
        value: 42
    };
}
console.log(getValue()); // { value: 42 }
```

### 5. Global Variable Creation

```javascript
// Accidentally creating global variables
function createUser() {
    userName = "John"; // Creates global variable (bad!)
    let userAge = 25;  // Local variable (good!)
}

// Use strict mode to catch these errors
"use strict";
function createUserStrict() {
    userName = "John"; // ReferenceError in strict mode
}
```

## Understanding Your Code Example

Let's analyze your specific code:

```javascript
// Basic console output
console.log(3 + 3); // 6

// String literals demonstration
console.log("ghan");  // Double quotes
console.log('ghan');  // Single quotes  
console.log(`ghan`);  // Template literals

// Number type examples
let num1 = 3;     // Integer
let num2 = 3.5;   // Float
console.log(typeof num1); // "number"
console.log(typeof num2); // "number"
console.log(num1 + num2); // 6.5

// String type examples
let str1 = "ghan";    // Double quotes
let str2 = 'ghan';    // Single quotes
let str3 = `ghan`;    // Template literal with multiline capability
console.log(typeof str1); // "string"
console.log(typeof str2); // "string" 
console.log(typeof str3); // "string"

// Boolean type examples
let bool1 = true;
let bool2 = false;
console.log(typeof bool1); // "boolean"
console.log(typeof bool2); // "boolean"

// Null type (with the famous typeof bug)
let null1 = null;
console.log(typeof null1); // "object" - known JavaScript quirk

// Undefined type
let undefined1; // Declared but not initialized
console.log(typeof undefined1); // "undefined"

// Symbol type
let sym1 = Symbol("ghan");
console.log(typeof sym1); // "symbol"

// Object type examples
let obj1 = { name: "ghan", age: 21 };
console.log(typeof obj1); // "object"

// Array type (arrays are objects in JavaScript)
let arr1 = [1, 2, 3, 4, 5];
console.log(typeof arr1);        // "object"
console.log(Array.isArray(arr1)); // true - proper way to check for arrays

// Function type
let func1 = function() {
    console.log("This is a function");
};
console.log(typeof func1); // "function"
func1(); // Calls the function

// Date type (also an object)
let date1 = new Date();
console.log(typeof date1);           // "object"
console.log(date1.toDateString());   // Readable date format
console.log(date1.toTimeString());   // Readable time format
console.log(date1.toISOString());    // ISO format
console.log(date1.getFullYear());    // Current year
```

This comprehensive guide covers JavaScript data types in depth, providing practical examples and real-world scenarios. Understanding these concepts is fundamental to becoming proficient in JavaScript development.