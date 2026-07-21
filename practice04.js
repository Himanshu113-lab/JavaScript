 //write a JS program to delete all occurrences of element 
 // `num` in a given array . Example: if arr=[1,2,3,4,5,6,2,3],
 //  Result should be arr=[1,3,4,5,6,3]

 let arr = [1,2,3,4,5,6,2,3];
 let num = 2;

 for(let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i, 1);
    }
 }

 console.log(arr);

 //write a JS program to find the no of digits in a number. 
 // Example : if number = 287152, count = 6

 let number = 287152;
 let count = 0;

 while(number > 0){
    count++;


    number = Math.floor(number/10);
    
 }
 console.log(count);

 //write a JS program to find the sum of digits in a number.
 //  Example : if number = 287152, sum = 25 

 let numbers = 287152;
 let sum = 0;

 while(numbers > 0){
    sum += numbers % 10;
    numbers = Math.floor(numbers/10);
 }
 console.log(sum);

 //Print the factorial of a number n. [Factoril of a number n is the product of all positive integers less than or equal to given positive integer and denotsd by that integer. ]
//Example:  7! (factoril of 7) = 1*2*3*4*5*6*7=5040
             //  5! (factoril of 5) =1*2*3*4*5=120
               // 3! (factoril of 3) =1*2*3=6
                //0! Is always 1   
                
//    let n =7;
//    let factorial = 1;
//    for(let i=1; i<=n; i++){
//     factorial *= i;
//    }               
//    console.log(`factorial of ${n} is ${factorial}`);

   
              
//    let n =5;
//    let factorial = 1;
//    for(let i=1; i<=n; i++){
//     factorial *= i;
//    }               
//    console.log(`factorial of ${n} is ${factorial}`);

              
//    let n =3;
//    let factorial = 1;
//    for(let i=1; i<=n; i++){
//     factorial *= i;
//    }               
//    console.log(`factorial of ${n} is ${factorial}`);

              
   let n =0;
   let factorial = 1;
   for(let i=1; i<=n; i++){
    factorial *= i;
   }               
   console.log(`factorial of ${n} is always ${factorial}`);


   //Find the largest number in an array with only positive numbers.
    
   let arrs = [1,2,3,4,5,6,7,8,9,];

   let largest = 0;

   for(let i=0; i<=arrs.length; i++){
    if(largest < arrs[i]){
        largest = arrs[i];
    }
   }
   console.log(largest);