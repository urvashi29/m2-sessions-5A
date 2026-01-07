// ES5
// use strict

// ES6
// Template Literals
// Array & Object Destructuring
// Object Restructuring
// Modules
// Rest Operators
// Regex & Spread Operators
// Array of objects

//use strict
// "use strict"
// a = 20;
// console.log(20);

// console.log(this);//undefined

// Multi line string
// ES5
console.log("hello, \n I am teaching ES6 today!");

// Template strings (Es6)
let str = `Hello World`;

console.log(`hello,
I am teaching ES6 today!`);

let firstName = "alina";
let lastName = "joe";
let city = "pune";

console.log(
  "Hi, my name is " + firstName + " " + lastName + " living in " + city + "."
);

// variable & expresion substitution
console.log(`Hi, my name is ${firstName} ${lastName}, living in ${city}`);

// Object Destructuring (break)
let person = {
  id: 1,
  isVerified: true,
  salary: 870989,
};

const { isVerified, salary } = person;
console.log(isVerified, salary);

//property shorthand
const o = {
  firstName,
};

// Array Destructuring (break)
let arr = [10, 20, 30, 40, 50];
let [one, two, , third] = arr;
console.log(one, two, third);

// Object Restructuring(make)
const emp = {
  firstName,
  lastName,
  city,
};

console.log(emp);

//see common.js file
// import add from "./common.js";//ES6
var add = require("./common"); //ES5
console.log(add(10, 20));

// Rest Operator (...)
function sum(...a) {
  console.log(a); //[1, 2, 3, 4, 5, 9, 10]
}

sum(1, 2, 3, 4, 5, 9, 10);

