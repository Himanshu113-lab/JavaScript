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

let img = document.querySelector('img');
console.dir(img);

console.dir(img.getAttribute('id'));

console.dir(img.setAttribute('id', 'spidermanImg'));

console.dir(img.setAttribute('src',"creation_1.png"));

//styling change
console.dir(document.querySelector('img'));

console.dir(img.style);

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