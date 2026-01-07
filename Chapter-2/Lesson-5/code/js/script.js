deleteEle = () => {
  document.querySelector("#sample").remove();
};

// classList (add class to an element through js)
addClass = () => {
  let classLists = document.querySelector("#divEle").classList; //all the classes this element has
  classLists.add("test");

  let lists = document.querySelector("#remove").classList;
  console.log(lists); //
  lists.contains("test"); //
  // lists.remove("test");

  lists.toggle("test"); //
};

console.log(document.body.children);

// Text Content, innerHTML
console.log(document.querySelector("#list").innerHTML);
console.log(document.querySelector("#list").textContent);
console.log(document.querySelector("#list").innerText);

// let ul = document.createElement("ul");
// ul.innerHTML = "<li></li>";

// remove event from an element
// document.querySelector("button").removeEventListener("click");

// document.querySelector("img").removeAttribute("src");

// Event Propogation
// addEventListener(eventname, callback function, boolean(by default: false))
// false: bubbling

// document.querySelector("#grandparent").addEventListener("click", function () {
//   console.log("grandparent clicked!");
// }, false);//bubbling

// document.querySelector("#parent").addEventListener("click", function () {
//   console.log("parent clicked!");
// }, false);

// document.querySelector("#child").addEventListener("click", function () {
//   console.log("child clicked!");
// }, false);

// true: capturing
// document.querySelector("#grandparent").addEventListener("click", function (e) {
//   console.log("grandparent clicked!");
// }, true);//capturing

// document.querySelector("#parent").addEventListener("click", function () {
//   console.log("parent clicked!");
// }, true);

// document.querySelector("#child").addEventListener("click", function () {
//   console.log("child clicked!");
// }, true);

// stopPropogation
document.querySelector("#grandparent").addEventListener(
  "click",
  function (e) {
    //   console.log(e); //event object: it is automatically create when an event is fired and available as callback parameter
    //   console.log(e.target); //return the html element on which you have attached event
    console.log("grandparent clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  function (e) {
    console.log("parent clicked!");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("child clicked!");
    e.stopPropagation();
  },
  false
);

// e.preventDefault()
document.querySelector("#check").addEventListener("click", function (e) {
  e.preventDefault(); //is used to prevent event to occur
  // use case: onsubmit (avoid page refresh)
});

// Event Delegation
let lists = document.querySelectorAll(".btn");

lists.forEach((button) => {
  button.addEventListener("click", function (e) {
    alert(e.target.innerText);
  });
});

// this
console.log(this); //window (refer to the global object)

function add() {
  // this refers to owner object of the function
  console.log(this); //window
}

let obj = {
  details: function () {
    console.log(this); //obj
  },
  detail: () => {
    console.log(this); //window
  },
};

("use strict");
console.log(this); //undefined
