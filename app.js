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


// Q8. Write a for loop to reverse an array.

let reverseArr = [];

for(let i = arr.length - 1 ;i>=0;i--){
    reverseArr.push(arr[i])
}
console.log(reverseArr);


// Q9. Write a for loop to calculate the average of numbers in an array.

function findAverage(arr){
    
let average = 0;
for(let i=0;i<arr.length;i++){
    average+= arr[i]
}
return average / arr.length
}
console.log(findAverage(arr));

// Q10. Write a for loop to count the number of vowels in a string.

function countVowels(arr){
let vowels = "aeiouAEIOU";
let count = 0;
for(let i = 0;i<arr.length;i++){
   if(vowels.includes(arr[i])){                         
    count++
   }
}
return count
}
console.log(countVowels("hello world"));


// Q11. Write a for loop to find the common elements between two arrays.

function findCommonEl(arr1,arr2){
    let commonEL = [];
    
    for(let i = 0; i<arr1.length;i++){
        for(let j = 0;j<arr1.length;j++){
            if(arr1[i]===arr2[j]){
                commonEL.push(arr1[i])
            }
        }
    }

    return commonEL
}
console.log(findCommonEl([1,2,3],[2,3,4]));

// Q12. Write a for loop to remove duplicate elements from an array.

function removeDuplicate(arr){
  let duplicate = []
    for(let i=0;i<arr.length;i++){
       for(let j = i + 1;j<arr.length;j++){
       if(arr[i]==arr[j]){
        duplicate.push(arr[i])
        break;
       }
       }
    }
    return duplicate
}
console.log(removeDuplicate([1,2,3,4,5,2,3,4,1,10,5]));

// Q13. Write a for loop to check if an array is sorted in ascending order.

function isSort(arr){
    let result = true;
    for(let i = 0;i<arr.length - 1;i++){
       if(arr[i]> arr[i+1]){
        result = false
       }
    }
    return result
}
console.log(isSort([1,4,3,4,5]));



// Q14. Write a for loop to check if a string is a palindrome.

function checkPalindrome(arr){
    let palindrome = "";
   for(let i = arr.length - 1;i>=0;i--){
    palindrome += arr[i]
   }
   if(palindrome === arr.toString()){
    return true
   }else{
    return false
   }
   
   
}
console.log(checkPalindrome("madam"))

// Q15. Write a for loop to find the sum of the digits of a number.

function sumOfDigits(Num){
    let sum = 0;
    let converting = Num.toString();
    for(let i = 0;i<converting.length;i++){
        sum += parseInt(converting[i])
    }
    return sum
}
console.log(sumOfDigits(12345));

// Q16. Write a for loop to generate a multiplication table for a given number.

function generateTabble(Num){
    let numTabble = [];
    for(let i = 1;i<=10;i++){
        console.log(i);
        numTabble.push(i*Num)
    }
    return numTabble
}
console.log(generateTabble(10));


// Q17. Write a for loop to find the index of a specific element in an array.

function findIndexUsingLoop(arr,target){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(findIndexUsingLoop([1,2,3,4,5],4));

// Q18.  Write a for loop to remove the last element from an array.

function removeLastEl(arr){
    for(let i =0;i<arr.length;i++){
        if(arr.length - 1 === i){
            arr.splice(i,1)
        }
    }
    return arr
}
console.log(removeLastEl([1,2,3,4,5,6]));


// Q19. Write a for loop to check if an array contains only positive numbers.

function containsAnyPositiveNum(arr){
    let result = false
    for(let i = 0;i<arr.length;i++){
        if(arr[i]>0){
            result = true;
        }
    }
    return result;
}
console.log(containsAnyPositiveNum([-1,-2,-3,-4,5]));


// Q20. Write a for loop to check if all elements in an array are even.

function checkIfAllElAreEven(arr){
    let result = true;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2!== 0){
            result = false
            return result
        }
    }
    return result
}
console.log(checkIfAllElAreEven([2,6,8,10]));