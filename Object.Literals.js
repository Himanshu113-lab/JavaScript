 const student = {
    name : "Himanshu",
    age : 21,
    marks : 85,
    city : "Agra" 
 };

 console.log(student);

 let student2 = ["Hiamnshu", 23, 84, "Agra"];
 console.log(student2);

 const family = {
    father : " Satyanarayan Pal",
    mother : "Ramwanti Devi",
    sister : "Mala Pal",
    siblings : ["Mala Pal" ,"Himanhu Pal" ]
 };

 console.log(family);

 const item = {
    price : 199.99,
    discount : 50,
    color : ["red", "pink"]
 };

 console.log(item);
 

 const post ={
    username : "@himanshu_pal",
    contect : "himanshupalmzp@gmail.com",
    likes : 350,
    comments : ["good post", "nice post", "keep it up"],
    reposts : 59,
    tags : ["@dimanshu_pal", "@riya_yadav", "@sahil_ahmad"]
 };

 console.log(post);
 let prop = "reposts";
 console.log(post[prop]);

 let obj = {
    1 : "a",
    2 : "b",
    null : "c",
    true : "d",
    undefined : "e"
 };

 console.log(obj);

 const student3 = {
    name: "hiamnshu",
    age:21,
    marks :85,
    city : "Agra"

 };

 console.log(student3);

 //Object of Object 

 const classInfo = {
    sahil : {
        grade : "A+",
        city : "Mirzapur"

    },

    dipanshu : {
        grade : "A",
        city : "Agra"
    },

    hiamnshu : {
        grade : "O",
        city : "Khandari"
    }
 };

 console.log(classInfo);

 // Array of aboject 

 const classInfo2 = [
    {
        name : "sahil",
        grade : "A+",
        city : "Mirzapur"

    },

    {
        name : "dipanshu",
        grade : "A",
        city : "Agra"
    },

 {
        name : "himanshu",
        grade : "O",
        city : "Khandari"
    }
];

 console.log(classInfo2);

 let step1 = Math.random();

 console.log(step1);

 let step2 = step1 * 10

 console.log(step2);

 let step3 = Math.floor(step2)

 console.log(step3);

 //Qs. Generate a random number between 1 to 100

 let num = Math.floor(Math.random()*100) + 1;
 console.log(num);

 //Qs. Generate a random number between 1 and 5.

 let num2 = Math.floor(Math.random()*5) + 1
 console.log(num2);

 // Guessing Game

//  const max = prompt("enter the max number");

//  const random = Math.floor(Math.random() * max) +1;
 
//  let guess = prompt("guess the number");

//  while(true){
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess == random){
//         console.log("you are right! congurats!! random number was ", random);
//         break;
//     }

//     else if(guess < random){
//         guess = prompt("hint : your guess was to small . please tey again");
//     }

//     else {
//        guess = prompt("hint : your guess was too large. please try again");
//     }


//     //else{
//       //  guess = prompt ("your guess was worng . please tey again");

//     //}
//  }


 //Qs1. Create a program that generates a random number representing a dice roll. 
 // [The number should be between 1 to 6].

 let dice = Math.floor(Math.random() * 6) +1;
 console.log(dice);

 

 //Qs2. create an object representing a car that stores the following properties for the car: name, model, color.
 //  Print the car's name.

 const car ={
    name : "Maruti Suzuki",
    model : "Maruti Suzuki Dzire",
    color : "white "
 };

 console.log(car.name);

 //Create an object person with their name , age and city.
 //  Edit their city's original value to change it to "New york ".
 //  Add a new property country and set it to the united states.

 const Person = {
    name : "Himanshu Pal",
    age : 21,
    city : "Agra"

 };
 Person.city = "New York";
 Person.country = "united States";
 console.log(Person);


 