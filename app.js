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

// Q21. find the largest element in array.

function largestElement(arr){
    let result = arr[0];
    for(let i = 0; i<arr;i++){
        if(arr[i]> result){
            result = arr[i]
        }
    }
    return result
}
console.log(largestElement(["javaScript","java","c++","kotlin"]));


// Q22. Write a for loop to find the maximum and minimum elements in an array.

function findMinAndMax(arr){
    let minimum = Infinity;
    let maximum = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(minimum > arr[i]){
            minimum = arr[i]
        }else if(maximum < arr[i]){
            maximum = arr[i]
        }
    }
    return `min = ${minimum}, max = ${maximum}`
}
console.log(findMinAndMax([4,3,2,5,1]));

// Q23. Write a for loop to convert each element in an array to uppercase.

function convertToUpperCase(arr){
    let converted = []
    for(let i = 0; i<arr.length; i++){
        converted.push(arr[i].toUpperCase())
    }
    return converted
}
console.log(convertToUpperCase(["javaScript","java","c++","kotlin"]));

// Q24. Write a for loop to concatenate all elements of an array into a single string.

function concatenateAllEl(arr){
    let string = "";
    for(let i=0;i<arr.length;i++){
        string += arr[i]+" ";
    }
    return string
}
console.log(concatenateAllEl(["javaScript","java","c++","kotlin"]));

// Q25. Write a for loop to find the number of words in a string.

function findTheNumOfWords(str){
    let counter = 0
    for(let i = 0;i<str.length;i++){
        counter++
    }
    return counter
}
console.log(findTheNumOfWords("this is str"));   //  11



// Q26. Write a for loop to find the number of uppercase letters in a string.

function findTheNumOfUpperWord(str){
    let newStr = "";
    let counter = 0
    for(let i = 0;i<str.length;i++){
        if(str[i]!==" " && str[i] === str[i].toUpperCase()){
            counter++
        } 
    }
    return counter
}
console.log(findTheNumOfUpperWord("This Is A String"));


// Q27. Write a for loop to find the product of all elements in an array.

function findTheProductOfAlEl(arr){
    let product = 1;
    for(let i =0;i<arr.length;i++){
        product *= arr[i]
    }
    return product
}
console.log(findTheProductOfAlEl([2,1,3,4,2,5,4]));

// Q28. Write a for loop to find the average of even numbers.   

function findTheAverageOfEvenNum(arr){
    let result = 0;
    for(let i =0; i< arr.length;i++){
        if(arr[i]%2 ==0){
            result += arr[i]
        }
    }
    return result/arr.length;
}
console.log(findTheAverageOfEvenNum([1,2,3,4,5,6,7,8,9,10]));

// Q29. find the missing number from an array 


function findTheMissingNumberFromArr(arr){
   let missingNum = [];
   for(let i = Math.min(...arr);i<Math.max(...arr);i++){
    if(!arr.includes(i)){
        missingNum.push(i)
    }
   }
   return missingNum
}
console.log(findTheMissingNumberFromArr([1,3,5,7,9,10]));

// Q30. Write a for loop to print the common characters between two strings.

function commonCharactersBetweenTewString(arr1,arr2){
    let commonEl = [];
    for(let i=0;i<arr1.length;i++){
        if(arr1.includes(arr2[i])){
            commonEl.push(arr1[i])
        }
    }
    return commonEl
}
console.log(commonCharactersBetweenTewString(["this","is","javaScript"],["this","is","js"]));


//  ============================================== Intermediate concepts Questions ========================================================================


// Q31. Write nested for loops to print a pattern of asterisks in the shape of a rectangle.

function rectangle(n){
    let string = ""
  for(let i= 0;i<=n;i++){
    for(let j =0;j<=n*3;j++){
        string += "* "
    }
    string += "\n"
  }
  return string
}
console.log(rectangle(3));

// Q32. Write nested for loops to print a pattern of numbers in a right-angled triangle.

function printRightAngleTriangleInNum(n){
    let triangle = "";
    for(let i = 1;i<=n;i++){
        for(let j = 1; j<= i;j++){
            triangle += `${j}`
        }
        triangle += "\n"
    }
    return triangle
}
console.log(printRightAngleTriangleInNum(5));

// Q33. Write nested for loops to print a pattern of letters in a pyramid shape.


function pyramidPattern(n){
    let pyramid = "";
    for(let i = 0;i<n;i++){
        
        for(let j = n-i;j>0;j--){
            pyramid += " "
        }
        for(let j = 0; j<= 2*i;j++){
            pyramid +="*"
        }
        for(let j = n-i;j>0;j--){
            pyramid += " "
        }

        pyramid += "\n";
    }
    return pyramid
}
console.log(pyramidPattern(5));


// Q34. Write nested for loops to print a multiplication table from 1 to 10.

function printMultiplication(n){
    let table = "";
    for(let i = 1; i<=10;i++){
       for(let j = 1;j<=n;j++){
        table += (i*j) + "\t"
       }
        table += "\n";
    }
    return table
}
console.log(printMultiplication(20));


// Q35. calculates the sum of consecutive elements in each subarray of the two-dimensional array

function sumOfTwoConsecutiveElements(){
    let arr = [[1,2],[2,3],[4,3],[5,4],[8,7],[5,1]];
    let result = [];

    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr[i].length - 1;j++){
            result.push(arr[i][j]+arr[i][j+1])
        }
    }
    return result
}
console.log(sumOfTwoConsecutiveElements()); //  [ 3, 5, 7, 9, 15, 6 ]

// Q36. Write nested for loops to calculate the sum of elements in a two-dimensional array.

function sumOfAllElInTwoDArray(){
    let arr = [[1,2],[2,3],[4,3],[5,4],[8,7],[5,1]];
    let sum = 0;
    for(let i =0;i<arr.length;i++){
        for(let j = 0;j < arr[i].length;j++){
            sum += arr[i][j]
        }
    }
    return sum
}
console.log(sumOfAllElInTwoDArray());

// Q37. Write nested for loops to find the maximum element in a two-dimensional array.

function findMaxNumIn2DArr(){
    let arr = [[1,2],[2,3],[11,3],[5,4],[100,7],[10,1]];
    let maxNum = -Infinity;
    for(let i = 0; i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] > maxNum ){
                maxNum = arr[i][j]
            }
        }
    }
    return maxNum
}
console.log(findMaxNumIn2DArr());


