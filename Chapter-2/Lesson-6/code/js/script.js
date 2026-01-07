add();
console.log("Hello");
console.log("world");

function add() {
  console.log(10 + 20);
}

setTimeout(() => {
  console.log("hello World");
}, 0);

//callback
// Application of callback
setTimeout(() => {
  console.log("Execute after 2 seconds!");
}, 2000);

// console.log(x);

console.log("1");
console.log("2");

// 1000ms = 1s

// setInterval(() => {
//   let date = new Date();
//   console.log(date);
// }, 1000);

// callback chaining -> callback hell
// one(userID, function () {
//   //
//   two(2, function () {
//     //
//     three(3, function () {
//       //write code
//       four(4, function () {});
//     });
//   });
// });

//promises
let myPromise = new Promise((myResolve, myReject) => {
  //Producing code (JS code to be async)
  let x = 0;
  if (x == 0) {
    myResolve("ok");
  } else {
    myReject("error");
  }
});

console.log(myPromise); //object

// consume the promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise chaining
// promiseObject
//   .then(() => {
//     return x;
//   })
//   .then(() => {})
//   .then(() => {})
//   .then(() => {})
//   .catch(() => {});

//async/await
async function subtract() {
  return 100 - 40;
}

// return a promise
subtract()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//
async function getData() {
  let multiply = await 10 * 20 * 30;
  return multiply;
}

getData()
  .then(() => {})
  .catch(() => {});

//

async function displayData() {
  let promiseObj = new Promise((res, rej) => {
    setTimeout(() => {
      res("call after 4 seconds");
    }, 4000);
  });

  console.log(await promiseObj);
}

displayData();
