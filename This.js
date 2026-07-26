 const student = {
    name : "Himanhsu Pal",

    age : 21,

    eng : 87,

    phy : 89,

    math : 95,

    getAvg()
{
    console.log(this);
    let avg = (this.eng + this.math + this.phy)/ 3;
    console.log(`${this.name} got avg marks = ${avg}`);


}
 }

 //try and catch!

console.log("Hello!");

console.log("Hello!");

let a = 5;
try {

    console.log(a);
}
catch {
    console.log("Himanhsu");
}




console.log("Hello!");

console.log("Hello!");

//Miscellaneous Topics.(Arrow Functions)

const sum = (a ,b)=> {
    console.log(a + b);
};

sum(2 ,7);

const cube = (n)=> {
    return n * n * n;
};

let c = cube(6);
console.log(c);

const pow = (a , b)=>{
    return a ** b;
};

let p = pow(2 ,3);
console.log(p);

const hello = ()=>{
    console.log("Hello World");
};

hello();

// Implicit return!

const mul2 = (a , b)=> (a * b);

//Set Timeout

console.log("Hii there!");

setTimeout( () =>{
    console.log("Apna College");
}, 6000);

console.log("Welcome to");



console.log("Hii there!");

let id = setInterval( () =>{
    console.log("Apna College");
}, 2000);

console.log(id);

console.log("Welcome to");


let id2 = setInterval( () =>{
    console.log("Himanshu!");
}, 3000);

console.log(id2);

console.log("Welcome to");

const student2 = {

    name : "Himanshu!",
    marks : 87,
    prop: this, //global scope
    getName: function (){
        console.log(this);;
        return this.name;
    },

    getMarks: ()=>{
        console.log(this); //parent's scope -> window
        return this.marks;
    },

    getInfo1: function (){
        setTimeout( () => {
            console.log(this); //student
        }, 2000);
    },

    getInfo2: function (){
        setTimeout(function () {
            console.log(this); //window
        }, 2000);
    },

};


// Qs1. Write an arrow function that returns the square of a number 'n'.

const square = (n) => {
    return n * n;
}

let S = square(5);
console.log(S);


//Write a function that prints "Hello World" 5times at intervals of 2s each.

let id3 = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clear interval run!");
}, 10000);

 //practice Questions
 //Qs1. Write an arrow function named arrayAverage that accepts an array
 //  numbers and returns the average of those numbers.
const arrayAverage = (arr) => {
    
    let total = 0;

    for (let number of arr) {

        total += number;
    }

    return total / arr.length;

};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arrayAverage (arr));


 //Qs2. Write an arrow function named isEven () that takes a single number
 //  as argument and returns if it is even or not.

 let num = 4;

 const isEven = (num) => num % 2 == 0;

 //Qs3. What is the output of the following code:

 const object = {
     
    massage: `Hello , World!`,

    logMessage() {
        console.log(this.message);
    }
 };

 setTimeout(object.longMessage, 1000);


 //Qs4. What is the output of the following code:

 let length = 4;

 function callback(){

    console.log(this.length);
 }

 const object2 = {

    length: 5, 

    method(callback){
        callback();
    },

 };

 object.method(callback, 1, 2);