 

 //DOM (Document Object Model)
 //The DOM represent a document with a logical tree.
 //It allwos us to manipulate/change webpage content (HTML elements)


 //Selecting Elements
 //getElementById
 //Returns the Element as an object or null (if not found)

 document.getElementById("mainImg");


 //Selecting Elements
 //getElementByClassName
 //Returns the Elements as an HTML collection or empty collection (if not found)

 let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
  //  console.dir(smallImages[i].src);
 //}

 for(let i = 0; i < smallImages.length; i++){
   smallImages[i].src ="spiderman_img.png";
     console.log (`value of image no. ${i} is changed.`);
   }
 
   //getElementByTagName
   //Returns the Elements as an HTML collection or empty collection (if not found)

   //let tagName = document.getElementsByTagName("p");
  // console.dir(tagName);

   let tagName = document.getElementsByTagName("span");
   console.dir(tagName);

  
 //Query Selector 
 //Allows us to use any css selector

 //document.querySelector('p'); // Selects the first <p> element

 //document.querySelector('#myId'); // Selects first element with id = myId

 //document.querySelector('.myclass'); //selects first element with class = myClass

 //document.querySelectorAll("p"); // Selects the first <p> element

 console.dir(document.querySelector("h1"));

 console.dir(document.querySelector("#description"));

 console.dir(document.querySelector(".oldImg"));

 console.dir(document.querySelector("div a"));

  console.dir(document.querySelectorAll("div a"));

  //Using Properties & Methods
  //*1 innerText:
  //Shows the visible text contained in a node 

  //*2 textContent:
  //Shows all the full text

  //*3 inner HTML:
  //Shows the full markup

let para = document.querySelector("p");
console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);

let A = para.innerText = "Hii, Iam Peter Parker!";
console.dir(A);

let B = para.innerText = "Hii, Iam <b>Peter Parker</b>!";
console.dir(B);

let C = para.innerHTML = "Hii, Iam <b>Peter Parker</b>!";
console.dir(C);

let heading = document.querySelector("h1");
let D = heading.innerHTML = "<u> Spider Man </u>";
console.dir(D);


//Manipulating Attributes
//obj.getAttribute(attr)
//obj.setAttribute(attr , val)

let img = document.querySelector("img");
console.dir(img);

//console.dir(img.getAttribute("src"));

//img.setAttribute("src", "spiderman_img.png");
//console.dir(img.getAttribute("src"));

//img.setAttribute("src", "creation_3.jpeg");

//Manipulating styles
//style Property ,,,,,, obj.style

console.dir(img.style);

let heading1 = document.querySelector("h1");
console.dir(heading1.style);

console.dir(heading1.style.color = "purple");
console.dir(heading1.style.backgroundColor = "green");

let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//   links[i].style.color = "red";

// }

for (link of links){
  link.style.color = "purple";
}

//mainpulating style
//using classlist /
//obj.classlist

//1 classList.add() to add new classes
//2 classList.remove() to remove classes
//3 classList.toggle() to toggle between add and remove classes

let img2 = document.querySelector("img");

console.dir(img2.classList);

let heading2 = document.querySelector("h1");
console.dir(heading2.classList);

console.dir(heading2.classList.add("green"));

//Navigation
//1 parentNade
//2 children
//priviousElementSiblimg/nextElementSibling

let h4 = document.querySelector("h4");
console.dir(h4.parentElement);
console.dir(h4.children);

let box = document.querySelector(".box");
console.dir(box.children);
console.dir(box.childElementCount);

let ul = document.querySelector("ul");
console.dir(ul.parentElenment);
console.dir(ul.parentElementCount);
console.dir(ul.children);

//Adding Elements
// document.createElement("p")

//1 appendChild(element)
//2 append(element)  /process on end of text
//3 prepend(element)  /process on start of text
//4 insertAjacent(where, element)

document.createElement("p");

let newP = document.createElement("p");
console.dir(newP);

newP.innerText = "I am a new paragraph";
console.dir(newP);

let body = document.querySelector("body");
body.appendChild(newP);
console.dir(body);

let box3 = document.querySelector(".box");
console.dir(box3.appendChild(newP));

let btn = document.querySelector("button");
console.dir("btn");
console.dir(btn);

btn.innerText = "click me!";
let but= box.appendChild(btn);


console.dir(but);

//Removing Elements
//1 removeChild(element)
//2 remove(element)