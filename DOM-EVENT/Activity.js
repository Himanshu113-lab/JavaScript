//  let btn = document.querySelector("button");

//  btn.addEventListener("click", function (){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.style.backgroundColor = randomColor;
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;


//     console.log("color updated");
//  });

//  function getRandomColor(){
//     let red = Math.floor(Math.random() * 255);
//      let green = Math.floor(Math.random() * 255);
//       let blue = Math.floor(Math.random() * 255);

//       let color = `rgb(${red}, ${green}, ${blue})`;
//       return color;
//  }

//  let p = document.querySelector("p");

//  p.addEventListener("click", function () {
//     console.log("paragraph was clicked !");
//  });

//  let box = document.querySelector(".box");
//  box.addEventListener("mouseenter", function (){
//     console.log("mouse inside div");
//  });

// THIS IN EVENT LISTENER

//  let btn1 = document.querySelector("button");
//  let p = document.querySelector("p");
//  let h1 = document.querySelector("h1");
//  let h3 = document.querySelector("h3");

//  btn1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
//  });

 
//  p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
//  });

 
//  h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
//  });

 
//  h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
//  });

 //Best types excuted by 'this' in event listener.


//  let btn1 = document.querySelector("button");
//  let p = document.querySelector("p");
//  let h1 = document.querySelector("h1");
//  let h3 = document.querySelector("h3");


//  function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
//  }

//  btn1.addEventListener("click", changeColor);

 
//  p.addEventListener("click", changeColor);

 
//  h1.addEventListener("click", changeColor);

 
//  h3.addEventListener("click", changeColor);

// KEYBOARD

// let inp = document.querySelector("input");

//  inp.addEventListener("keydown", function(event){
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//      console.log("key was pressed");
//  });


// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// });


// let inp = document.querySelector("input");

//  inp.addEventListener("keydown", function(event){
//     console.log("code =", event.code); //ArrowUp, ArrowDown, ArrorLeft, ArrowRight
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     }
//     else if (event.code == "ArrowDown"){
//         console.log("character moves backward");
//     }
//     else if (event.code == "ArrowLeft"){
//         console.log("character moves left");
//     }
//     else if (event.code == "ArrowRight"){
//         console.log("character moves right");
//     }
//  });

 //FORM EVENTS

//  let form = document.querySelector("form");

//  form.addEventListener("submit", function(){
//     event.preventDefault();
//  //console.log("form submitted");

// // let inp = document.querySelector("input");
// // console.dir(inp);
//  //console.dir(inp.value);

//  let user = document.querySelector("#user");
// let pass = document.querySelector("#pass");

// console.log(user.value);
// console.log(pass.value);

// alert(`Hii ${user.value},your password is set to ${pass.value}`);
//  });

//MORE EVENTS (change and input event)


//  let form = document.querySelector("form");

//  form.addEventListener("submit", function(){
//     event.preventDefault();
//  });

//     let user = document.querySelector("#user");

//     user.addEventListener("change", function(){
//         console.log("input changed");
//         console.log("final value = ",this.value);

//     });

    
//     user.addEventListener("change", function(){
//         console.log("input event");
//         console.log("final value = ",this.value);

//     });

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});

