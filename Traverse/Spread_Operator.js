// Copying an array

// Spread Operator (...) (Copying Data)
// It "spreads out" the contents of an iterable into a new array or object
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3]

// Merging arrays
const mergedArr = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Copying an object
const user1 = { name: 'Ghan', age: 22 };
const user2 = { ...user1 }; // { name: 'Ghan', age: 22 }

// Updating an object (immutably)
const updatedUser = { ...user1, age: 23 }; // { name: 'Ghan', age: 23 }