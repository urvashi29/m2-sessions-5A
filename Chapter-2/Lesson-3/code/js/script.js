//display

// classList (add class to an element through js)
// attaching events through js

console.log(10 + 20);

//DOM Selector

//getElementById
let heading = document.getElementById("sample");
console.log(heading);
console.log(typeof heading); //object
heading.innerHTML = "Hello! there"; //innerHTML is used to access/change element content

//getElementsByClassName
let list = document.getElementsByClassName("list-item");
console.log(list);

let newArr = [];
for (let i = 0; i < list.length; i++) {
  console.log(list[i].innerHTML);
  newArr.push(list[i].innerHTML);
}

console.log(newArr);

// document.getElementsByTagName("p")

//querySelector(css selector): selects only 1 element
console.log(document.querySelector(".list-item"));
document.querySelector(".list-item").innerHTML = "NextJs";
console.log(document.querySelector("p"));

// querySelectorAll(css selector)
console.log(document.querySelectorAll(".list-item"));

document.querySelector("ul").innerHTML = 20;
// document.querySelector("li:nth(2)")

// var a = 20;
// console.log(a);
// console.log(this);//global (window)

// manuipulate css
document.querySelector("p").style.fontSize = "20px";
document.querySelector("p").style.color = "teal";

//creating an element through js
let element = document.createElement("div"); //<div></div>
element.innerHTML = "JS DOM"; //<div>JS DOM</div>
element.style.backgroundColor = "orange";
document.body.appendChild(element);
console.log(element);

//create image element, manipulating attributes
let img = document.createElement("img"); //<img>
img.src =
  "https://m.media-amazon.com/images/I/31yUzU5r4oL._SY300_SX300_QL70_FMwebp_.jpg";
img.alt = "alternate image";
console.log(img);
document.body.append(img);

//set & the attribute for the element
img.setAttribute(
  "src",
  "https://m.media-amazon.com/images/I/31yUzU5r4oL._SY300_SX300_QL70_FMwebp_.jpg"
);
console.log(img.getAttribute("alt"));


// task: 
// 1. create a unorder list of 10 items through js and display in UI
// 2. create a div element through js, add following content: image, heading, paragraph  and display in UI