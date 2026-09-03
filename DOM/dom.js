 let para = document.getElementById("description");
console.dir(para);

let smallImages = document.getElementsByClassName("oldImg");

//for(let i = 0; i < smallImages.length; i++){
  //  smallImages[i].src = "spiderman_img.png";
    //console.dir(`Value of image no. ${i} is changed.`);
//}

let allPara = document.getElementsByTagName("p");

for(let i = 0; i < allPara.length; i++){
    console.dir(allPara[i]);

}

console.dir(document.getElementsByClassName("oldImg"));
//

//querySelector
console.dir(document.querySelectorAll(".oldImg"));

let parag = document.querySelector('p');
console.dir(parag);

console.dir(parag.innerText);
console.dir(parag.innerHTML);
console.dir(parag.textContent);

//get and set.

//let img = document.querySelector('img');
//console.dir(img);

//console.dir(img.getAttribute('id'));

//console.dir(img.setAttribute('id', 'spidermanImg'));

//console.dir(img.setAttribute('src',"creation_1.png"));

//styling change
//console.dir(document.querySelector('img'));

//console.dir(img.style);

let heading = document.querySelector('h1');
console.dir(heading);

console.dir(heading.style.color = 'purple');

console.dir(heading.style.backgroundColor = 'yellow');


let links = document.querySelectorAll(".box a");

for (links of links){
    links.style.color = "purple";
}
//for (let i = 0; i < links.length; i++){
  //  links[i].style.color = "green";
//}

//Using classList
let img = document.querySelector('img');
console.dir(img.classList);

console.dir(heading.classList);

console.dir(heading.classList.add("underline"));


//Navigation

let h4 = document.querySelector('h4');
console.dir(h4.parentElement);
console.dir(h4.children);

//let box = document.querySelector(".box");
//console.dir(box.children);

let ul = document.querySelector('ul');
console.dir(ul.parentElement);


//Adding elements in page!
let newP = document.createElement('p');
console.dir(newP);

newP.innerText = " Hii, I am a new Paragraph!";
console.dir(newP);

let body = document.querySelector('body');
body.appendChild(newP);

let box = document.querySelector('.box');
box.appendChild(newP);

let btn = document.createElement("button");
btn.innerText = "Click Me!";
box.appendChild(btn);

//Qs.1 a <p> with red text that says "Hey I'm red!"

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

//Qs2. an <h3> with blue text that says " I'm a blue h3!"


let h3 = document.createElement("h3");
para1.innerText = "Hey I'm blue h3!";
document.querySelector("body").append(h3);

para1.classList.add("blue");


//Qs3. a <div> with a black broder and pink background color with the following elements inside of it.
// * another <h1> THAT says "I'm in a div"
// * a <p> that says "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box1");

document.querySelector("body").append(div);
