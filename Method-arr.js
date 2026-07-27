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

  let finalVal = numb.reduce((res, el) => res + el);
  console.log(finalVal);

  //Reduce 
  //Finding Maximum in an array

  let num3 = [2, 3, 4, 5, 3, 7, 8, 1, 2];

  let result = nums.reduce( (max, el) => {
     if(el > max){
        return el;
     }else{
        return max;
     }
  });

  console.log(result);
