 function hello(){
    console.log("Hello!");
 }

 hello();
 

 hello();
 

 hello();
 

 hello();


//print name
 function printName(){
    console.log("Himanshu Pal!");
    console.log("Hello Engineers!");
 }

 printName();


//print number 1to5
 function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }

 }

 print1to5();

 //print age
function isAdult(){
    let age = 19;
    if(age >= 18){
        console.log("adult");
    }
    else{
        console.log("not adult");
    }

}

isAdult();

//Qs1 Create a function that prints a poem.
function printPoem(){
    console.log("The sun begins to paint the sky,");
       console.log(" As morning birds begin to fly.");
       console.log(" The gentle breeze removes the dark,");
       console.log(" And lights a bright and hopeful spark.");

       console.log("Walk in hope, let worries fade,");
        console.log("Enjoy the beauty nature made.");
         console.log("With every step and every dawn,");
          console.log("The miracle of life goes on.");       
        
}
printPoem();

//Qs2 Create a function to roll a dice & always display the value of the dice (1to6)
function rollDice(){
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);

}
rollDice();

//function Argument
function printName2(name){
    console.log(name);

}
printName2("Hiamnshu Pal");

function printInfo(name , age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("Hiamnshu" , 21);
printInfo("Sahil");
printInfo(22);

function sum(a , b){
    console.log(a+b);
}
 
sum(1, 2);
sum(3, 5);
sum(5, 7);

//Create a function that gives us the average of 3 numbers.
function averages(a ,b ,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

averages(3,3,3);
averages(12,123,234);

console.log("Print Table");
//Create a function that prints the multiplication table of a number.
function printTable(n){
    for(let i = n; i<n*10; i+=n){
        console.log(i);
    }
}

printTable(5);


//Return keyword 
function sum2(a , b){
    return a+b;

} 
let s = sum2(3, 4);
console.log(s);
let t = sum2(4, 4);
console.log(t);

function isAdult2(age){
    if(age >=18){
        return "adult";
    } else {
        return "not adult";
    }
}
 let age = isAdult2(2);
console.log(age);

//Qs. Create a function that returns the sum of numbers from 1 to n.

function getSum(n){
    let sum = 0;

    for(let i =1; i<=n; i++){
        sum +=i;
    }
    return sum;
}

let num = getSum(10000);
console.log(num);

//Qs. Create a function that returns the concatenation of all strings in an array .

let str = ["Hi","Himanshu","bye","Hiamnshu","!"];

function concat(str){
    let result = "";

    for(let i=0; i<str.length; i++){
        result += str[i];
    }

    return result;
}

 let con = concat(str);
 console.log(con);

 //Function Scope
 let sum1 = 54;  //Gobal scope


 function calSum(a,b){
    let sum1 = a + b;   //function scope
    console.log(sum1);
 }

 calSum(1,7);

 //Block Scope
 {
    let a = 25;
    console.log(a);
 }

 for (let i=1; i<=5; i++){
    console.log(i);
 }

 let age2 = 25;
 if(age2 >= 18){
    let str = "adult";
    console.log(str);
 }

 //Lexical Scope

 function outerFunc(){
    let x = 5 ;
    let y = 6;
    function innerfunc(){
        console.log(x);
        console.log(y);
    }

    innerfunc();
 } 

 //Qs What will be the output ?
 
 let greet = "Hello";

 function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
 }

 console.log(greet);
 changeGreet();

 //function Expression 
 let name = "shradha";

 let sum3 = function(a, b){
    return a+b;
 }

 let A=sum3(3 , 3);
 console.log(A);

 let Himanshu = function(){
    console.log("Himsnshu");
 }

console.log("Himanshu");

//Higher Order function

function multipleGreet2(func , count){  //higher order finction
for(let i=1; i<=count; i++){
    func();
}
}
let greet2 = function(){
    console.log("hello");
}

multipleGreet2(function() {console.log("namaste")}, 10);

let odd = function(n)
{
    console.log(!(n%2 == 0));
}

let even = function(n){
    console.log(n%2 == 0);
}

function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd= function(n){
            console.log(!(n%2 == 0));
        }
        return odd;

    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("wrong request"); 
    }

    
}
let request = "odd"; //even

//Calculator

const calculator = {
    add: function(a,b){
        return a+b;
    },

    sub: function(a ,b){
        return a-b;
    },

    mul: function(a ,b){
        return a*b;
    }
};

//Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8,9,10,1,2,3,4,5,6,7];
let num2 = 5;

//elements larger than a number num 
 function getElements (arr,num2){
    for (let i=0; i<arr.length; i++){
        if (arr[i] > num2) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num2);


//Qs2. Write a JavaScript function to extract unique characters from a string.
// Example:str=“abcdabcdefgggh”
// ans=“abcdefgh"

let str2 = "abcdabcdefgggh";

//function to get String with all unique elements 
function getUnique(str){
    let ans = "";
    for (let i=0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1) {
            // if current character is not added, then add it in ans.
            // 
            // Other wise it is a duplicate.
            ans += currChar;
        }
    }
    return ans;
}

getUnique(str)



//Qs3. Write a JavaScript function  that accepts a list of country names as input and
//  returns the longest country name as output.
//Example:country=["Australia","Germany","United States of America"]
// output:"United States of America"

let country = ["Australia", "Germany", "United States of America"];
function longestName(country){
    let ansIdx = 0;
    for (let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length; 
        if (currLen > ansLen)
            {
                ansIdx = i;
            }
        }
        return country[ansIdx];
    }

    longestName(country);


//Qs4. Write a javaScript function to count the number of vowels in a string argument.


let str3 = "apnacollege";

function countVowels(str3) {

    let count = 0;

    for (let i=0; i<str3.length; i++)
        {

        if(

            str.charAt(i) == "a"  || 

            str.charAt(i) == "e"  ||

            str.charAt(i) == "i"  ||

            str.charAt(i) == "o"  ||

            str.charAt(i) == "u"
        ) {
            count++;
        }
    }

    return count;

}



//Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let start = 100;

let end = 200;

function generateRandom(start,end) 

{

    let diff = end - start;
    
    return Math.floor(Math.random() *diff) + start;


}