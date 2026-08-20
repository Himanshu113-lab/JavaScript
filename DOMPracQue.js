
//Qs1. Add the follwing element to the container usind only JavaScripy and the DOM methods.
//(i). <p> with red text that says "Hey I am red!"

let para1 = document.createElement("p");
para1.innerText = "Hey I am red!";
document.querySelector('body').append(para1);

para1.classList.add("red");

//(ii). an <h3> with blue text that says "I am a blue h3!";


let h3 = document.createElement("h3");
h3.innerText = "Hey I am red!";
document.querySelector('body').append(h3);

h3.classList.add("blue");

//(iii) a <div> with a black border and pink background color with the following elements inside of it.
// * another <h1> that says "I am in a div"
// * <p> that says "ME TOO!"

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am in a div";
para2.innerText = "ME TOO! ";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector('body').append(div);

//Practice Question

//Qs1. create a new input and button element on the page using JavaScript only. Set the text of button to "Click me";


let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me!";

document.body.appendChild(input);
document.body.appendChild(button);


    // Q1: Create Input and Button
    
//    let input = document.createElement("input");
//     let button = document.createElement("button");

//     button.innerText = "Click me";

//     document.body.appendChild(input);
//     document.body.appendChild(button);


    // Q2: Add following attributes to the element:
    // -Change placeholder value of input to “username”
    // -Change the id of button to “btn”
    
    input.setAttribute("placeholder", "username");
    button.setAttribute("id", "btn");

    
    // Q3: .Access the btn using the query Selector and button id. Change the button background color to blue and text color to white.
    
    let btn = document.querySelector("#btn");
    btn.classList.add("btnStyle");

    // Using querySelector
    let btn1 = document.querySelector("#btn");
    btn1.style.backgroundColor = "blue";
    btn1.style.color = "white";

    // Using getElementById
    let btn2 = document.getElementById("btn");
    btn2.style.padding = "10px 20px";
    btn2.style.border = "none";
    btn2.style.cursor = "pointer";

    
    // Q4: Create H1
    
    let heading = document.createElement("h1");
    heading.innerText = "DOM Practice";
    heading.style.color = "purple";
    heading.style.textDecoration = "underline";

    document.body.appendChild(heading);

    
    // Q5: Create Paragraph
    
    let para = document.createElement("p");
    para.innerHTML = "Apna College <b>Delta</b> Practice";

    document.body.appendChild(para);

