/**
 * ============================================
 *     OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT
 * ============================================
 * 
 * KEY CONCEPT: JavaScript is NOT a class-based language like Java or C++.
 * It's a PROTOTYPE-BASED language. Classes in JS are just "syntactic sugar" 
 * over prototypes (introduced in ES6).
 * 
 * WHAT IS OOP?
 * - A programming paradigm based on the concept of "objects"
 * - Objects contain DATA (properties) and CODE (methods)
 * 
 * 4 PILLARS OF OOP:
 * 1. ABSTRACTION    - Hiding complex implementation, showing only essentials (e.g., fetch())
 * 2. ENCAPSULATION  - Bundling data & methods together, restricting direct access
 * 3. INHERITANCE    - Child classes can inherit properties/methods from parent classes
 * 4. POLYMORPHISM   - Same method name, different behaviors based on context
 */


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1: OBJECT LITERAL (Simplest way to create objects)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Object Literal: Creating an object directly using curly braces {}
 * Best for: Single, one-off objects that won't be duplicated
 */
const person = {
    // Properties (data)
    name: "ghans",
    age: 30,
    location: "india",
    
    // Method (function inside object)
    greet: function() {
        console.log("Hello!");
        // 'this' refers to the current object (person)
        return `Name: ${this.name}, Age: ${this.age}`;
    }
    
    /**
     * ⚠️ WHY NOT ARROW FUNCTION HERE?
     * 
     * Arrow functions DON'T have their own 'this' keyword!
     * They inherit 'this' from the surrounding scope (lexical this).
     * 
     * If we wrote: greet: () => { return this.name }
     * 'this' would refer to: window (browser) or global (Node.js)
     * Result: undefined for name and age!
     * 
     * WORKAROUND with arrow functions:
     * greet: () => { return person.name }  // Direct reference instead of 'this'
     */
};

// Accessing object properties and methods
console.log("=== Object Literal Example ===");
console.log(person.name);       // Output: ghans
console.log(person["age"]);     // Output: 30 (bracket notation)
console.log(person.greet());    // Output: Hello! then returns "Name: ghans, Age: 30"


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2: CONSTRUCTOR FUNCTIONS (Traditional way before ES6)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Constructor Function: A function used to create multiple similar objects
 * Convention: Name starts with CAPITAL LETTER (e.g., User, Person, Car)
 */
function User(name, age, location) {
    this.name = name;       // 'this' will refer to the new object being created
    this.age = age;
    this.location = location;
    
    // Method inside constructor
    this.introduce = function() {
        return `Hi, I'm ${this.name} from ${this.location}`;
    };
}

/**
 * ❌ WRONG WAY: Calling constructor WITHOUT 'new' keyword
 */
console.log("\n=== Without 'new' keyword (WRONG) ===");
// const wrongUser = User("chai", 24, "india");
// Problem: 'this' refers to global object (window/global)
// Properties get added to global scope - VERY BAD!
// wrongUser will be undefined because function returns nothing explicitly


/**
 * ✅ CORRECT WAY: Using 'new' keyword
 */
console.log("\n=== With 'new' keyword (CORRECT) ===");
const user1 = new User("chai", 24, "india");
const user2 = new User("ram", 28, "usa");

console.log(user1.name);           // Output: chai
console.log(user2.introduce());    // Output: Hi, I'm ram from usa
console.log(user1 === user2);      // Output: false (different instances!)


/**
 * 🔑 WHAT DOES 'new' KEYWORD DO? (4 Steps)
 * 
 * 1. Creates a NEW empty object: {}
 * 2. Sets the prototype of the new object to the constructor's prototype
 * 3. Binds 'this' to the new object (so this.name = name works!)
 * 4. Returns the new object (unless constructor explicitly returns an object)
 */


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3: ES6 CLASSES (Modern syntax - Recommended!)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Class: A blueprint for creating objects with predefined properties and methods
 * Remember: Classes are just syntactic sugar over constructor functions + prototypes
 */
class Animal {
    // Constructor: Special method called when creating new instance
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    // Instance Method: Available on each instance
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Static Method: Called on the CLASS itself, not instances
    static isAnimal(obj) {
        return obj instanceof Animal;
    }
}

console.log("\n=== ES6 Class Example ===");
const dog = new Animal("Buddy", "Dog");
console.log(dog.name);                  // Output: Buddy
console.log(dog.speak());               // Output: Buddy makes a sound
console.log(Animal.isAnimal(dog));      // Output: true (static method)
// console.log(dog.isAnimal(dog));      // ❌ Error! Static methods not on instances


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4: INHERITANCE (extends & super)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Inheritance: A class can inherit properties and methods from another class
 * - 'extends' keyword: Used to create a child class
 * - 'super' keyword: Calls the parent class constructor
 */
class Dog extends Animal {
    constructor(name, breed) {
        // super() MUST be called before using 'this' in child class
        super(name, "Dog");     // Calls Animal constructor with name and species="Dog"
        this.breed = breed;     // Additional property specific to Dog
    }
    
    // Overriding parent method (POLYMORPHISM!)
    speak() {
        return `${this.name} barks! Woof woof!`;
    }
    
    // New method specific to Dog class
    fetch() {
        return `${this.name} fetches the ball!`;
    }
}

console.log("\n=== Inheritance Example ===");
const myDog = new Dog("Max", "Golden Retriever");
console.log(myDog.name);       // Output: Max (inherited property)
console.log(myDog.species);    // Output: Dog (set via super())
console.log(myDog.breed);      // Output: Golden Retriever
console.log(myDog.speak());    // Output: Max barks! Woof woof! (overridden method)
console.log(myDog.fetch());    // Output: Max fetches the ball!


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5: ENCAPSULATION (Private Fields - ES2022)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Encapsulation: Restricting direct access to object's internal state
 * Private fields: Use # prefix (ES2022+)
 */
class BankAccount {
    #balance;   // Private field - cannot be accessed outside the class
    
    constructor(owner, initialBalance) {
        this.owner = owner;              // Public property
        this.#balance = initialBalance;  // Private property
    }
    
    // Getter: Read private data safely
    getBalance() {
        return `$${this.#balance}`;
    }
    
    // Public methods to interact with private data
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew $${amount}. New balance: $${this.#balance}`;
        }
        return "Insufficient funds or invalid amount";
    }
}

console.log("\n=== Encapsulation Example ===");
const account = new BankAccount("Ghans", 1000);
console.log(account.owner);            // Output: Ghans (public)
console.log(account.getBalance());     // Output: $1000
console.log(account.deposit(500));     // Output: Deposited $500. New balance: $1500
console.log(account.withdraw(200));    // Output: Withdrew $200. New balance: $1300
// console.log(account.#balance);      // ❌ SyntaxError! Private field


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6: GETTERS AND SETTERS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Getters/Setters: Special methods to get/set property values
 * - Allows validation before setting values
 * - Computed properties on the fly
 */
class Circle {
    constructor(radius) {
        this._radius = radius;   // Convention: _ prefix for "protected" properties
    }
    
    // Getter: Access like a property (circle.radius)
    get radius() {
        return this._radius;
    }
    
    // Setter: Assign like a property (circle.radius = 10)
    set radius(value) {
        if (value <= 0) {
            console.log("Radius must be positive!");
            return;
        }
        this._radius = value;
    }
    
    // Computed property using getter
    get area() {
        return Math.PI * this._radius ** 2;
    }
    
    get circumference() {
        return 2 * Math.PI * this._radius;
    }
}

console.log("\n=== Getters & Setters Example ===");
const circle = new Circle(5);
console.log(circle.radius);          // Output: 5 (using getter)
console.log(circle.area.toFixed(2)); // Output: 78.54 (computed property)
circle.radius = 10;                  // Using setter
console.log(circle.radius);          // Output: 10
circle.radius = -5;                  // Output: Radius must be positive!


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 7: PROTOTYPES (The Core of JavaScript OOP)
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Every JavaScript object has a hidden [[Prototype]] property
 * This creates a "prototype chain" for property/method lookup
 */
console.log("\n=== Prototype Example ===");

// Adding method to prototype (shared by all instances - memory efficient!)
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Method on prototype - shared by ALL Car instances
Car.prototype.start = function() {
    return `${this.brand} ${this.model} is starting...`;
};

Car.prototype.stop = function() {
    return `${this.brand} ${this.model} has stopped.`;
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1.start());   // Output: Toyota Camry is starting...
console.log(car2.start());   // Output: Honda Civic is starting...

// Both share the same method in memory!
console.log(car1.start === car2.start);  // Output: true


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 8: 'this' KEYWORD SUMMARY
// ═══════════════════════════════════════════════════════════════════════════

/**
 * 'this' behavior in different contexts:
 * 
 * 1. GLOBAL CONTEXT:
 *    - Browser: window object
 *    - Node.js: global object (or {} in modules)
 * 
 * 2. OBJECT METHOD:
 *    - 'this' = the object calling the method
 * 
 * 3. CONSTRUCTOR/CLASS:
 *    - 'this' = the new instance being created
 * 
 * 4. ARROW FUNCTION:
 *    - 'this' = inherited from enclosing scope (lexical binding)
 *    - Does NOT have its own 'this'!
 * 
 * 5. EVENT HANDLER:
 *    - 'this' = the DOM element that triggered the event
 * 
 * 6. call(), apply(), bind():
 *    - 'this' = explicitly set to the first argument
 */

console.log("\n=== 'this' Keyword Examples ===");

const obj = {
    name: "MyObject",
    regularMethod: function() {
        console.log("Regular:", this.name);  // this = obj
    },
    arrowMethod: () => {
        console.log("Arrow:", this.name);    // this = global/window (inherited)
    }
};

obj.regularMethod();  // Output: Regular: MyObject
obj.arrowMethod();    // Output: Arrow: undefined (no 'this' binding)


// ═══════════════════════════════════════════════════════════════════════════
// SECTION 9: PRACTICAL EXAMPLE - Putting It All Together
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Real-world example: Simple Shopping Cart System
 */
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    #items = [];   // Private array to store cart items
    
    addItem(product, quantity = 1) {
        this.#items.push({ product, quantity });
        console.log(`Added ${quantity}x ${product.name} to cart`);
    }
    
    get totalItems() {
        return this.#items.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    get totalPrice() {
        return this.#items.reduce(
            (sum, item) => sum + (item.product.price * item.quantity), 
            0
        );
    }
    
    checkout() {
        console.log(`\n🛒 Checkout: ${this.totalItems} items, Total: $${this.totalPrice}`);
        this.#items = [];  // Clear cart
    }
}

console.log("\n=== Shopping Cart Example ===");
const cart = new ShoppingCart();
const phone = new Product("iPhone", 999);
const case_ = new Product("Phone Case", 29);

cart.addItem(phone, 1);
cart.addItem(case_, 2);
console.log(`Total items: ${cart.totalItems}`);   // Output: 3
console.log(`Total price: $${cart.totalPrice}`);  // Output: $1057
cart.checkout();


/**
 * ═══════════════════════════════════════════════════════════════════════════
 * QUICK REFERENCE SUMMARY
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * | Concept              | Syntax/Keyword                          |
 * |----------------------|-----------------------------------------|
 * | Object Literal       | const obj = { key: value }              |
 * | Constructor Function | function Name() { this.prop = val }    |
 * | Create Instance      | new ConstructorName()                   |
 * | ES6 Class            | class Name { constructor() {} }         |
 * | Inheritance          | class Child extends Parent              |
 * | Call Parent          | super()                                 |
 * | Private Field        | #fieldName                              |
 * | Getter               | get propertyName() {}                   |
 * | Setter               | set propertyName(value) {}              |
 * | Static Method        | static methodName() {}                  |
 * | Prototype Method     | ClassName.prototype.method = function() |
 * 
 * Happy Learning! 🚀
 */