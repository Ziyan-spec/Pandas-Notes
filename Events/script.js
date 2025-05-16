let btn = document.querySelector("#btn1");

// This is preferred over inline handler 
btn1.onclick = (e) => {
  console.log('This is button');
  console.log(e);
  console.log(e.type);
  console.log(e.target);
}

btn1.addEventListener("click",(e) => {
  console.log("Button-handler1");
} );

let handler2 =  (e) => {
  console.log("Button-handler2");
};
btn1.addEventListener("click",handler2);

btn1.addEventListener("click",() => {
  console.log("Button-handler3");
} );

// Remove 
//btn1.removeEventListener("click",hanlder2);


let div = document.querySelector("#box");
div.onmouseover =() => {
  console.log("You are inside the div");
}

// problem 1
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
modeBtn.style.marginTop = "100px";
let currMode = "light";
body.classList.add("white");
modeBtn.addEventListener("click",() => {
  if(currMode == "light"){
    currMode = "dark";
    console.log(currMode);
    body.classList.remove("white");
    body.classList.add("dark");
  }
  else {
    currMode = "light";
    console.log(currMode);
    //document.querySelector("body").style.backgroundColor = "white";
    body.classList.remove("dark");
    body.classList.add("light");
 
  }
});