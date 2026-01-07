// how to capture user input
// attaching events through js

// Events

document.querySelector("#test").innerHTML = "hello world!";

// see html file
changeBackground = () => {
  document.body.style.backgroundColor = "teal";
};

changeStyle = () => {
  document.querySelector("#name").style.padding = "10px";
};

captureUserInput = () => {
  let hobby = document.querySelector("#hobby").value; //capture user input
  console.log(hobby);
};

validate = () => {
  let email = document.querySelector("#email").value;
  let pwd = document.querySelector("#pwd").value;
  // console.log(`My Email and Password is ${email} ${pwd}`);

  //validation
  //   if(!regex.test(email)) {

  //   }

  document.querySelector(
    "#display"
  ).innerHTML = `My Email and Password is ${email} ${pwd}`;
};

// attaching events through js
// addEventListener("event name", callback function)
document.querySelector("#btn").addEventListener("click", function () {
  let p = document.querySelector("#cart-num").innerHTML;
  document.querySelector("#cart-num").innerHTML = Number(p) + 1;
  console.log(this); //
});

// let obj = {
//     detail: function () {
//         console.log(this);//obj
//     },
//     details:  () => {
//         console.log(this);//window
//     }
// }

// Task
// create a form: name, age, email, salary. onsubmitted display the user data in UI  (add email, salary validation)
