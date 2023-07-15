// basic For Loops :->

// Q1.Write a for loop to print the numbers from 1 to 10.

for(let i=1;i<=10;i++){
    console.log(i);
}

// Q2. Write a for loop to print the even numbers from 2 to 20.

for(let i = 2;i<=20;i+=2){
    console.log(i);
}
// Q3. Write a for loop to calculate the sum of numbers from 1 to 100.
let sum = 0
for(let i = 1;i<=100;i++){
    sum += i
}
console.log(sum);

// Q4. Write a for loop to print the square of numbers from 1 to 5.

for(let i = 1;i<=5;i++){
    console.log(i*i);
}

// Q5. Write a for loop to print the factorial of a given number.

let factorial = 1;  // find the factorial of 5;
for(let i = 1;i<=6;i++){
    factorial *=i
}
console.log(factorial);

// Q6.  Write a for loop to find the largest element in an array.

let arr = [1,2,3,4,9,-3];

let maxNum = arr[0];

for(let i =0; i<arr.length;i++){
    if(maxNum < arr[i]){
        maxNum = arr[i]
    }
}
console.log(maxNum);
  
// Q7. Write a for loop to find the smallest element in an array.

let minNum = arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]< minNum){
        minNum = arr[i]
    }
}
console.log(minNum);



