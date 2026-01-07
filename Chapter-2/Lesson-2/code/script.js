// Spread Operator (...)
// for objects
const objOne = {
  a: 10,
  b: 20,
};

// const objTwo = objOne;//shallow copy
// objTwo.a = 30;
// console.log(objOne, objTwo);

//spread operator (deep copy)
const objTwo = { ...objOne, z: 60, a: 30 };
console.log(objOne, objTwo);

// for arrays
const arr = [1, 2, 3, 4, 5];
const color = ["pink", "red", "green", "blue"];

const arrTwo = [...arr, ...color, 100, 200];
console.log(arrTwo);

// Regex - Regular expression
let regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
// [a-zA-Z0-9\\.-]+
let inputString = "admin@gmail.com";

console.log(regexEmail.test(inputString));

let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Qunatifiers
const regex = /ab+c/;
console.log(regex.test("abc")); //true
console.log(regex.test("ac")); //false
console.log(regex.test("abbc"));

const regexQues = /ab?c/;
console.log(regexQues.test("ac")); //true

//match
let str = "regex: Today we are learning regex";
console.log(str.match(/regex/));

//replace
console.log(str.replace(/regex/, "Regex"));

//search
console.log(str.search(/learning/));

// ["", {}, null, undefined, 80];

// Array of objects- Employee data, user, product, movie, tv series, recipe, restaurent, food items
let employees = [
  {
    id: 1,
    name: "alina",
    salary: 88980,
  },
  {
    id: 2,
    name: "alex",
    salary: 89800,
  },
  {
    id: 3,
    name: "harry",
    salary: 98000,
  },
];

let result = employees.map((emp) => {
  return emp.name;
});

console.log(result);

// Tasks on array helper functions: use es6 (map, filter, forEach, some, every, reduce)
//1. Check if all the property values(firstName) in an array of object is same or not
// array of object
// [
//     {
//         firstName: 'alina',
//         id: 1,
//         age: 12
//     }, {
//         firstName: 'harry',
//         id: 2,
//         age: 12
//     }, {
//         firstName: 'alina',
//         id: 3,
//         age: 12
//     }
// ]

// arr.map((e) => {
//     return e.firstName
// })

// 2. Get the value of the first element in an array that has value greater than 20. arr = [1, 2, 3, 10, 30, 20]
// 3. Get the value of the first element in an array that has value less than 20
// 4. Filter data based on a id(property) in an array of objects: pick id value (2)

// 5. Get all the person name based on age greater than and equal to 18, eligible to vote
// [{
//     firstName: 'joe',
//     age: 24
// }, {
//     firstName: 'alina',
//     age: 12
// },
// {
//     firstName: 'alex',
//     age: 20
// }
// ]

// 6. Check element is odd or even in an array [90, 89, 56, 45]

// 7. reduce method: Sum all the elements of an array [90, 89, 56, 45]

// 8. Sum of all the salaries and display final sum value
// [{
//     salary: 56000,
//     id: 1
// },
// {
//     salary: 90000,
//     id: 2
// }]

// 9. Concatenation of all array elemets ['pink', 'blue', 'green', 'red']:
// 'pinkbluegreenred'

// 10. Round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]
