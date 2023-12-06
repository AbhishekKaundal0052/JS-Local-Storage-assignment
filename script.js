//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
let firstName = "Parul";
let lastName = "Meow";
let age = "9";
let country = "South Korea";
let state = "Seoul";
localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("state", state);
console.log(localStorage);
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
localStorage.getItem("firstName", firstName)
localStorage.getItem("lastName", lastName)
localStorage.getItem("age", age)
localStorage.getItem("country", country)
localStorage.getItem("state", state)

console.log(localStorage)
// console.log("name: " + firstName)
// console.log("lastName: " + lastName)
// console.log("age: " + age)
// console.log("country: " + country)
// console.log("state: " + state)

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem("state", state);
console.log(localStorage)
//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear()
console.log(localStorage)
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
var ak = JSON.stringify(user)
console.log(ak)
