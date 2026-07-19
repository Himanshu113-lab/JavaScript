//  console.log ("Hello!");
//  console.log ("This is a console!");
//  let a = 10;
//  let b = 5;
//  console.log ("sum is : ", a+b);

// //Tenplate Literals
// let penprice = 10;
// let pencilprice = 5;
// console.log ("The total price is :", (penprice + pencilprice), "Rupees.");
// let output = "The total price is :" +(penprice + pencilprice) + "Rupees";
// console.log (output);

// console.log (`The total price is : ${pencilprice + penprice} Rupees`); //back tick

// //Arithmetic Operators 
// let c = 8;
// let d = 4;
// console.log (a+b);
// console.log (a-b);
// console.log (a*b);
// console.log (a/b);
// console.log (a%b);
// console.log (a**b);

// //unary operators (++,--)
// console.log (c++);
// console .log(++c);

// //Comparison Operators
// let ag = 18;
// console.log (ag >= 18);


// let hour = 19;
// if(hour < 18 ){
//     console.log("Good day!");
// }
//if(hour > 18){
  //  console.log("Good Evening!");
//}

// let age = 34;
// if(age >= 18 ){
//     console.log("you can voit!");
// }
// else if (age < 18){
//     console.log("you cannot vote");
// }

// let marks = 8;

// if(marks >= 90){
//     console.log("A+");
// }

// else if(marks >= 80){
//     console.log("A");

// }
// else if(marks >= 70){
//     console.log("B+");

// }
// else if(marks >= 60){
//     console.log("B");
// }
// else if(marks <= 30){
//     console.log("Fail!");
// }

let size = "r";

if( size === "XL"){
    console.log("price is Rs.250");
}


else if(size === "L"){
    console.log("price is Rs.200");
}
else if(size === "M"){
    console.log("price is Rs.100");
}
else if(size === "S"){
    console.log("price is Rs.50");
}
else {
    console.log("Not in  the stock");
}

let marks = 30;
if(marks >=33){
    console.log("Pass");

    if( marks >= 85){
        console.log("Grade : O");
    }
    else{
      console.log("Grade : A")  
    }
}
else{
    console.log("better luck next time!");
}

let str = "tpple";
if((str[0] === 'a') && (str.length > 3)){
    console.log("A string is Good String!");
}
else{
    console.log("A string is not Good String!");
}

let color = "blue";

switch(color){
    case "red":
        console.log("stop!");
        brack;

    case "yellow":
        console.log("Slow down!");
        brack;
       
    case "green":
        console.log("Go!");
        brack;

    default :
    console.log("Broken Light!");
}

let day = 6;

switch(day) {
    case 1:
        console.log("Monday!");
        break;

    case 2:
        console.log("Tuesday!");
        break;

    case 3:
        console.log("Wednesday!")
        break;

    case 4:
        console.log("Thursday!")
        break;

    case 5:
        console.log("Friday!")
        breck;

    case 6:
        console.log("Saturday!")
        break;

    case 3:
        console.log("Sunday!")
        break;

    default :
    console.log("End of days!");
}

let time = 22;

if(time < 10 ){
    console.log("Good Morning!");
}
else if(time < 20){
    console.log("Good Day!")
}
else {
    console.log("Good evening!")
}

//alert("Something  is worng!");
//alert('This is simple alert!')
//console.log("This is simple log!");

//let firstName = prompt("enter your first name!");
//let lastName = prompt("enter your last name!");
//console.log(firstName + lastName);

//Practice Questions

//let num = 35;
// //if( num % 10 == 0){
//     console.log("Good");

// }
// else{
//     console.log("Not good!");
// }

// let userName = prompt("enter user name :");
// let age = prompt("enter your age :");
// alert(`${userName} is ${age} years old. 11`);


//let msg = "    hello    ";

//   let password = prompt("Set your password");
//   let newPass = password.trim();
//   console.log(password);
 
// let name ="Apna college";
// console.log(name.toUpperCase());

// 

// let msg = "   hello    ";
// let newMsg = msg.trim();
// console.log("After Trim :", newMsg);
// newmsg =newMsg.toUpperCase();
// console.log("After Uppercase :", newmsg);

// let name = "ILoveCoding";
// let newName = name.replace("Love","Learn");
// console.log(newName);

//Practice Qs 

let msg = "help";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let name = "ApnaCollge";
console.log(name.slice(4,10));
console.log(name.indexOf("e"));
console.log(name.replace("Apna","there"));

