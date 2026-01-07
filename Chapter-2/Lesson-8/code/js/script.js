// Promise.all
// Promise.race

const promiseOne = new Promise((res, rej) => {
  res(10);
});

const promiseTwo = new Promise((res, rej) => {
  res(20);
});

const promiseThree = Promise.resolve(30);

// Promise.all([promiseOne, promiseTwo, promiseThree])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.race([promiseOne, promiseTwo, promiseThree])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// throttle function
// debouncing function

function throttle(func, delay) {
  let timeoutId;
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        // console.log(args);
        func.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  };
}

let throttleWrap = throttle(function () {
  console.log("User Input");
  //api call for search
}, 2000);

document.querySelector("#name").addEventListener("input", throttleWrap);

function debouncing(func, delay) {
  let timeoutId;
  return function (...args) {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

let debouncingWrap = debouncing(function () {
  console.log("User Age");
  //api call for search
}, 2000);

document.querySelector("#age").addEventListener("input", debouncingWrap);
