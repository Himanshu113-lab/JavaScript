 let arr = [1, 2, 3, 4, 5];

//
 arr.forEach(function (el){
    console.log(el);
 });

 //
 let print = function (el){
    console.log(el);
 };

 arr.forEach(print);

 //
 arr.forEach((el) => {
    console.log(el);
 });

 let arr2 = [
    {
        name: "Himanshu",
        marks: 98

    },

    {
        name: "Dimanshu",
        marks: 95
    },

    {
        name: "Riya",
        marks:97
    }
 ];

 arr2.forEach((student) => {
    console.log(student);
 });

 //Mop
  let num = [1, 2,  3, 4, 5];

  let double = num.map((el) => {
    return el * el * el;
  });

  console.log(double);

  //gpa
let students = [
    {
        name: "Hiamsnhu",
        marks: 97
    },
    {
        name: "Riya",
        marks: 98
    },

    {
        name: "dipanshu",
        marks: 95
    }
];

  let gpa = students.map((el) =>{
    return el.marks / 10;
  });

  console.log(gpa);

  //Filter

  //Even number
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13, 14];

  let ans = nums.filter((el) =>{

    return el % 2 == 0; //even -> true , odd -> false

  });

    //Odd number
  console.log(ans);

  
  let ans2 = nums.filter((el) =>{

    return el % 2 != 0; //even -> true , odd -> false

  });

  console.log(ans2);

  //Every

  //true
  let every = [2, 4, 6, 8, 10].every( (el) => {
     return el %2 == 0;
  }) ;

  console.log(every);

  //false

  let every2 = [2, 4, 6, 7, 1].every( (el) => {
     return el %2 == 0;
  }) ;

  console.log(every2);

  //Reduse Funtion
  //Reduse the array to a single value.

  //arr.reduse (reducer function with 2 variables for (accumulator , element));

  // [1, 2, 3, 4].reduse ((res , el ) => (res+el) );
  // Output : 10

  let numb = [1, 2, 3, 4, 5, 6];

  let finalVal = numb.reduce((res, el) =>{
   console.log(res);

   return res + el;
   });
  
   
  console.log(finalVal);

  //Reduce 
  //Finding Maximum in an array

  let num3 = [2, 3, 4, 5, 3, 7, 8, 1, 23];

  let result = num3.reduce( (max, el) => {
     if(el > max){
        return el;
     }else{
        return max;
     }
  });

  console.log(result);

  //Qs1. Check if all number in our array are mutiples of 10 or not.
    let nums2 = [10, 20, 30, 40];
    let answ = nums2.every((el) => el % 10 == 0);

    console.log(answ);

  //Create a functin to find the mim number in an array.
   let nums3 = [10, 23, 34, 45, 34 , 45 ,9, 34, 56];

   let min = nums3.reduce( (min , el) => {
      if (min < el){
         return min;
      }else {
         return el;
      }

   });

   console.log(min);

   //in function from

   function getMin(nums3) {
    
   let min = nums3.reduce( (min , el) => {
      if (min < el){
         return min;
      }else {
         return el;
      }

   });

   return min;

   }

   //Default Parameters
   //Giving a default value to the arguments

   //function func(a, b = 2){
      //do something
   //}

   //Example

    function sum( a, b = 4){
       return a + b;
    }

    let A = sum( 45);
    console.log(A);

    // This method is not allow in the JS.
   // function sum( a = 3 , b ){
   //    return a + b;
   // }

   // let B = sum( 45); //a= 45, b = undefined
   // console.log(B);

   // Spread !
   // Expands an interable into multiple values
   //function func (...arr) {
        //do something 
//}

//example

let arr4 = [ 2, 3, 5, 7, 4 ,8, 9,];

 let C = Math.min(...arr4);

 console.log(C);

 console.log(...arr4);

 console.log(..."apnacollege");

 console.log(..."HIMANSHU PAL ");

 //Spread with Array literals

 let arr5 = [ 1, 2, 3, 4, 5, 6];
 let newArr = [...arr5];

 console.log( arr5, newArr);

 let chars = [..."Hello"];
console.log(chars);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums4 = [ ...odd, ...even];
console.log(nums4);

//Spread with Object Literals!

let data = {
   email : "himanshupalmzp@gamil.com",
   password : "asdfgg",
};

let dataCopy = {...data , id: 123 , country: "India" };

console.log(dataCopy);

let arr6 = [1, 2, 3, 4, 5, 6,7];
let obj1 = {...arr6};

console.log(obj1);

let obj2 = {..."HIMANSHU PAL"};
console.log(obj2);


//Rest
//Allow a function to take an indefinite number of arguments and bundle them in an array .

//Example.
function sum(...args){
   //arguments
   for (let i=0; i < args.length; i++){
      console.log("you gave us :", args[i]);
   }
}

function min3(a, b, c, d) {
   console.log(arguments);
   console.log(arguments.length);
   arguments.push(1);

}

function sum(...args) {
   return args.reduce((sum , el) => sum + el);
   
}

function min(...args){
   console.log(msg);
   return args .reduce((main , el) => {
      if (min > el ){
         return el ;
      }else {
         return min;
      }
   });
}

//Destructuring
//Storing values of array into multiple variables 

let names = ["tony" , "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner , runnerup); //"tony" "bruce"

// Destructuring in Objects

const student = {
   name : "Karan",
   class : 9,
   age : 15,
   subject : ["hindi", "english", "math","science", "social studies" ],
   username : "Karan123",
   password : 12345
};

const { username : user, password : pass } = student;

console.log(user); //"karan123"



//Qs1.Square and sum the array elements using the arrow function and then 
// find the average of the array.

let nums5 = [ 1, 2, 3, 4, 5];
const square = nums5.map((num) => num * num);
console.log(square);

let sum = square.reduce( (acc,cur) => acc + cur, 0);

let avg = sum / nums.length;
console.log(avg);



//Qs2.Create a new array using the map function whose each element is 
// equal to the original element plus 5.
let numbers = [2, 4, 6, 8, -2, -4];

console.log(numbers.map((number) => number + 5));

//Qs3.Create a new array whose elements are in upper case of words present
// in the original array.
let strings = ["adam", "bob", "catlyn", "donald", "eve"];

console.log(strings.map( (string) => string.toUpperCase()));

//Qs4.Write a function called doubleAndReturnArgs which accepts an array 
// and a variable number of arguments. The function should return a new 
// array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (arr, ...args) => [
   ...arr,
   ...args.map((v) => v * 2),];
   
   doubleAndReturnArgs([1, 2, 3], 4, 4); //[1,2,3,8,8]
   doubleAndReturnArgs([2], 10, 4);//[2,20,8]

//Qs5.Write a function called mergeObjects that accepts two objects and 
// returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

mergeObjects({ a: 1,b: 2}, {c: 3, d: 4}); //{a:1,b:2,c:3,d:4}