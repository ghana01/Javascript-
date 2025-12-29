const user = { name: 'Ghan', age: 22 };

for (const key in user) {  // for in loop
  console.log(key);        // 'name', 'age'
  console.log(user[key]);  // 'Ghan', 22
}


for (const [key, value] of Object.entries(user)) {
  console.log(key, value); // 'name' 'Ghan', 'age' 22
}