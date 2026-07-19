 console.log("1");
  console.log("2");
  
  console.log("3");
  
  console.log("4");
  
  console.log("5");
  
  for(let i=1; i<=5; i++){

  console.log(i);
  }
  

  for(let i=10; i>=1; i--){

  console.log(i);
  }

  
  for(let i=10; i>=1; i = i-2){

  console.log(i);
  }


  console.log("All odd numbers (1 to100)");
  for(let i=1; i<=100; i = i+2 ){
    console.log(i);
  }

  console.log("All even numbers (1 to 50)");
  for(let i=2; i<=50; i=i+2){
    console.log(i);
  }

  console.log("backward");
  for(let i=50; i>=2; i=i-2){
    console.log(i);
  }
  
console.log("print the multiplication table for 5");
for(let i=5; i<=50; i=i+5){
    console.log(i);
}

 
console.log("print the multiplication table for 5");
for(let i=4; i<=40; i=i+4){
    console.log(i);
}


// console.log("print the multiplication table! ");

// let n = prompt("write your number");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

console.log('Nested loop');

for(let i=1; i<=5; i++){
    for(let j=1; j<=5; j++){
        console.log(j);
    }
}


console.log("While loop");

let i = 1 ;
while (i<=5){

  if(i==3){
    break;
  }
    console.log(i);
    i++;
}

console.log("we used break at 3");

let fruits = ["mango", "apple", "banana", "litchi", " orange" ];

for(let i = 0; i<fruits.length; i++)
{
  console.log(i, fruits[i]);
}