let div = document.getElementById("myid");
console.log(div);
console.dir(div);

let headings = document.getElementsByClassName("myclass");
console.dir(headings);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

// 1st element 
let element = document.querySelector(".myclass");
console.log(element);

// All elements 
let elements = document.querySelectorAll(".myclass");
console.dir(elements);
console.log(elements);

//console.dir(document.body.firstChild);

// problem 1
let h3 = document.querySelector("h3");
console.dir(h3.innerText);
h3.innerText = h3.innerText + " from Apna College";
console.dir(h3.innerText);

// problem 2
let myDivs = document.querySelectorAll(".box");
console.log(myDivs);
let idx = 0;
for(div of myDivs){
  div.innerText = `value ${idx}`;
  console.log(div.innerText);
  idx++ ;
};

let myId = document.querySelector("button");
 console.log(myId.getAttribute("id"));
myId.setAttribute("id","myButton");
console.log(myId.getAttribute("id"));

let divBox = document.getElementById("myDiv");
divBox.style.backgroundColor = "yellow";
divBox.style.color = "red";
divBox.innerText = "Hello";

let newEl = document.createElement("button");
newEl.innerText = "click";
console.log(newEl);

let div1 = document.getElementById("myDiv");
div1.append(newEl);
//newEl.remove();

// problem 3
let newBtn = document.createElement("button");
newBtn.innerText = "Click Ziyan";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
 document.querySelector("body").prepend(newBtn);
 
 // problem 4
 let para = document.querySelector("p");
// para.setAttribute("class","newClass");
 para.classList.add("newClass");
 