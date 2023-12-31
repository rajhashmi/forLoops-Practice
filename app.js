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
    let arr = [[1,2],[2,3],[11,3,101],[5,4],[100,7],[10,1]];
    let maxNum = -Infinity;
    for(let i = 0; i<arr.length;i++){     // find min
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] > maxNum ){
                maxNum = arr[i][j]
            }
        }
    }
    return maxNum
}
console.log(findMaxNumIn2DArr());


// Q38.  Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function SevenBoom(arr){
   for(let i=0;i<arr.length;i++){
    if(arr[i] === 7){
        return "Boom!"
    }
   }
   return "there is no 7 in the array"
}
console.log(SevenBoom([1, 2, 3, 4, 5, 6, 7]));

// Q39. Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

function ordered2DArray(a,b){
    let matrix = [];
    let counter = 0;   // remove
    for(let i =0;i<a;i++){
        matrix[i] = [];
        for(let j=0;j<b;j++){
            matrix[i][j] = counter
            counter++
        }
    }
    return matrix

}
console.log(ordered2DArray(5,5));

// Q40. Create a function which returns the number of true values there are in an array.

function returnNumberOfTrueVal(val){
    let counter = 0;
    for(let i = 0;i<val.length;i++){
        if(val[i]){
            counter++
        }
    }
    return counter
}
console.log(returnNumberOfTrueVal([1,2,3]));


// Q41. Concatenate Variable Number of Input Arrays

function concatenateVariableEl(...arr){
    let concatenatedArray = [];
    for(let i =0;i<arr.length;i++){                 // without spread operator
        concatenatedArray.push(...arr[i])
    }
    return concatenatedArray
}
console.log(concatenateVariableEl([1, 2, 3], [4, 5], [6, 7]));

// Q42. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num,length){
    let result = [];
    for(let i = num; i<=num*length;i+=num){
        result.push(i)
    }
    return result
}
console.log(arrayOfMultiples(5,5));

// Q43. Reverse the Odd Length Words

function reverseOddLengthWords(arr){
    let convertToArr = arr.split(" ");
    let result = ""
    for(let i = 0;i<convertToArr.length;i++){
       if(convertToArr[i].length%2!=0){
        result +=  " "+convertToArr[i].split("").reverse().join("")+ " "
       }else{
            result += convertToArr[i]
       }
    }
    return result.trim();
}
console.log(reverseOddLengthWords(" Reverse the Odd Length Words four"));



// Q44. Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function SpecialArray(arr){
    for(let i = 0;i<arr.length;i++){
        if(i % 2 == 0 && arr[i] % 2 !== 0){
            return false;
        }else if(i % 2 !== 0 && arr[i] % 2 === 0){
            return false;
        }
    }
    return true
}
console.log(SpecialArray([2,1,4,3,6,7,8,9,10]));


// Q45. Mirror Array
function MirrorArray(arr){
    let Mirror = [...arr]
   for(let i = arr.length - 1;i>=0;i--){
    Mirror.push(arr[i])
   }
    return Mirror
}
console.log(MirrorArray([1,2,3,4,5]));

// Q46. Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

function FindingCommonElement(arr1,arr2){
    let result = [];
    for(let i = 0;i<arr1.length;i++){
        for(let j =0;j<arr2.length;j++){
          if(arr1[i]===arr2[j]){
            result.push(arr1[i])
          }   
        }
    }
    return result
}
console.log(FindingCommonElement([-1, 3, 4, 6, 7, 9], [1, 3]));

// Q47. Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

 function NumberInString(arr){
    let result = [];
    for(let i =0;i<arr.length;i++){
       for(let j =0;j<arr[i].length;j++){
        if(!isNaN(parseInt(arr[i][j]))){
            result.push(arr[i])
        }
       }
    }
    return result
 }
 console.log(NumberInString(["1a", "a", "2b", "b"]));

//  Q48. Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

function positiveDominant(arr){
    const uniqueEl = Array.from(new Set(arr));
    let positive = 0
    let negative = 0
    for(let i =0;i<uniqueEl.length;i++){
       if(uniqueEl[i] > 0){
        positive++
       }else if(uniqueEl[i] < 0){
        negative++
       }
    }
    return positive > negative
}
console.log(positiveDominant([1, 2, 3, 1, -3, -4]));

// Q49. Word to Bitstring to Boolean Array
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

function convertWordToBitstring(str){
    let alfa = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    for(let i =0;i<str.length;i++){
        for(let j =0;j<alfa.length;j++){
            if(str[i] === alfa[j] && j%2==0){
               result.push(false)
            }else if(str[i] === alfa[j] && j%2!==0){
                result.push(true)
            }
        }
    }
    return result
}

 console.log(convertWordToBitstring("cash"));

//  Q50. Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

function BrokenKeyboard(correct,Input){
    let result = [];
  
    for(let j =0;j<Input.length;j++){
        if(correct[j]!==Input[j]){
             const brokenKey = correct[j];
            if(!result.includes(brokenKey)){
                result.push(brokenKey)
            }
        }
    }
    return result

}
console.log(BrokenKeyboard("beethoven", "affthoif5"));


// Q51. All Rotations of a String
// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

function LeftRotationsOfString(str){
    let result = [];
  
    for(let i =0;i<str.length;i++){
      const rotatedStr = str.slice(i) + str.slice(0,i)
      result.push(rotatedStr);
    }
 return result
}
console.log(LeftRotationsOfString("abc"));

// Q52. for Right rotation

function RightRotationsOfString(str){
    let result = [];
    for(let i = 0;i<str.length;i++){
        const rotatedStr = str.slice(-i) + str.slice(0,-i);
        result.push(rotatedStr)
    }
    return result
}
console.log(RightRotationsOfString("abc"));


// Q53. Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
function sumOfSmallestEl(arr) {
    let sum = 0;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 0) {
        if (arr[i] < smallest) {
          secondSmallest = smallest;
          smallest = arr[i];
        } else if (arr[i] < secondSmallest) {
          secondSmallest = arr[i];
        }
      }
    }
  
    sum = smallest + secondSmallest;
    return sum;
  }
  
  console.log(sumOfSmallestEl([10, 343445353, 3453445, 3453545353453])); 

// Q54. Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function PositiveCountAndNegativeSum(arr){
    let negativeSum = 0;
    let positiveCounter = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i]< 0){
            negativeSum+=arr[i]
        }else{
            positiveCounter++
        }
    }
    return Array(positiveCounter,negativeSum)
}
console.log(PositiveCountAndNegativeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
  

// Q55.Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

function SumOfFoundIndexes(arr,target){
    let sum = 0
    for(let i =0;i<arr.length;i++){
        if(arr[i]=== target){
            sum += i
        }
    }
    return sum

}
console.log(SumOfFoundIndexes([0,2, 3, 3, 0, 0, 3],2 ));


// Q56. Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.


function SumOfGivenNum(arr,target){
    let result = [];
    for(let i = 0;i<arr.length;i++){
        for(let j =0;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                result.push([arr[i],arr[j]])
                arr.splice(i,1)
            }
        }
    }
    return result
}
console.log(SumOfGivenNum([2,9,8,7,4,3,6],9));

// Q57. Mutations Only: Zeroes to the End
// Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

function moveZeroToEnd(arr){
  let zeroes = [];
  for(let i = 0;i<arr.length;i++){
    if(arr[i]===0){
        zeroes.push(arr[i]);
       arr.splice(i, 1);
       i--;
    }   
}
  arr = arr.concat(zeroes)
  return arr
}
console.log(moveZeroToEnd([0, 0]));


 
//Q58. Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

function countBoomerangs(arr){
    let counter = 0;
    for(let i =0;i<arr.length - 2;i++){
        if(arr[i]==arr[i+2] && arr[i]!==arr[i+1]){
            counter++
        }
    }
    return counter
}
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));



// Q59. Converting One Binary String to Another
// Write a function that returns the minimum number of swaps to convert the first binary string into the second.

function convertOneBinaryStringToAnother(str1,str2){
    let swaoCounter = 0;
    if(str1.length !== str2.length){
        return "string is not equal"
    }
    for(let i =0;i<str1.length;i++){
        if(str1[i]!==str2[i]){
            swaoCounter++
        }
    }
    return swaoCounter/2;
}
console.log(convertOneBinaryStringToAnother("10011001", "01100110"));


// Q60. Frequency Distribution
// Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.

function FrequencyDistribution(arr){
    let result = {}
   for(const element of arr){
    result[element] = (result[element] || 0) + 1;
   }
   return result
}
console.log(FrequencyDistribution(["A", "B", "A", "A", "A"]));


// Q61 Disarium Number
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

function isDisariumNumber(arr){
    let convert = arr.toString()
    let sum = 0;
    for(let i =0;i<convert.length;i++){
        console.log(sum);
        sum += parseInt(convert[i]**(i+1))
    }if(sum==arr){
        return true
    }
    return false
}
console.log(isDisariumNumber(135));

// Q62. Convert "Zero" and "One" to "1" and "0"

function zeroAndOne(str){
    let arr = str.toLowerCase().split(" ");
    let result = ""
    console.log(arr);
    for(let i = 0 ;i<arr.length;i++){
        if(arr.length - 1 < 8 ){
            return result
        }else if(arr[i] == "one"){
            result+= 1
        }else{
            result += 0
        }
    }
    return result
}
console.log(zeroAndOne("zero one zero one zero one zero three"));

// Q63. Two Distinct Elements
// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

function DistinctElements(arr){
    let result = [];
 
    for(let i =0; i< arr.length;i++){
        let isDisarium = true;
        for(let j = 0;j<arr.length;j++){
            if(i !== j && arr[i] === arr[j]){
                isDisarium = false;
                break;
            }
        }
        if(isDisarium){
            result.push(arr[i])
        }
    }
    return result
}
console.log(DistinctElements([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));

// Q64. Vowel to Vowel Links
// Given a sentence as str, return true if any two adjacent words have this property: One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

function vowelToVowelLinks(str){
    let vowel = "aeiou";
    let arr = str.toLowerCase().split(" ");
    for(let i =0; i<arr.length - 1;i++){
        if( vowel.includes(arr[i].charAt(arr[i].length - 1)) &&
            vowel.includes(arr[i + 1].charAt(0))
            ){
                return true;
        }
    }
    return false
}
console.log(vowelToVowelLinks("a very large appliance"));


// Q65. Find First Character That Repeats
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

function findFirstLetter(str){
    for(let i = 0;i<str.length;i++){
        for(let j =0; j<str.length;j++){
            if(i!==j && str[i] === str[j]){
                
                return str[i]
            
            }
        }
    }
    return -1
}
console.log(findFirstLetter("Isildur"));


// Q66. Count the Lone Ones
// Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.
function CountTheLoneOnes(num) {
    let arr = num.toString().split("");
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        const currentDigit = arr[i];
        const previousDigit = arr[i - 1];
        const nextDigit = arr[i + 1];
        
        if (currentDigit === "1" && (previousDigit !== "1" && nextDigit !== "1")) {
            counter++;
        }
    }
    
    return counter;
}

console.log(CountTheLoneOnes(1211));


// Q67.What's the Missing Letter?
// Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

function findMissingLetter(str){
    let alfaArr = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
      ];
    let arr = str.split("");
    let StartIndex = alfaArr.indexOf(arr[0]);
    for(let i = 0;i< arr.length;i++){
        if(arr[i]!==alfaArr[StartIndex+i]){
        return alfaArr[StartIndex + i]
        }

    }
   
}
console.log(findMissingLetter("abdefg"));

// Q68.  Case and Index Inverter
// Write a function that takes a string input and returns the string in a reversed case and order.

function reverseStrAndOrder(str){
    let uppercase = str.toUpperCase();
    let LowerCase = str.toLowerCase();
    let result = "";
    for(let i = str.length - 1;i>= 0;i--){
        if(str[i]=== uppercase[i]){
            result += LowerCase[i]
        }else if (str[i]=== LowerCase[i]){
            result += uppercase[i]
        }
    }
    return result
    
}
console.log(reverseStrAndOrder("heLLo hoW ArE"));

 
// Q69. All About Strings

function AllAboutString(str){
    let result = []
    let length = str.length;
    let middleEl;
    let secondOcur = ""
    
    if(length%2==1){
        const middleIndex = Math.floor(length/2);
        middleEl = str[middleIndex]
        
    }else {
        const middleIndex = length / 2 - 1;
        middleEl = str.slice(middleIndex,middleIndex + 2);
    }
    for(let i = 2;i<str.length;i++){
        if(str[1] === str[i]){
            secondOcur = `@ index ${i}`
        }else{
            secondOcur = "not found"
        }
    }
     result.push(length,str[0],str[str.length - 1],middleEl,secondOcur)
    return result
     
}
console.log(AllAboutString("LASA"));


//  Q70. Beginning and End Pairs
// Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.


function BeginningAndEndPair(arr) {
    let result = [];
    let reverseIndex = arr.length - 1;

    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        result.push([arr[i], arr[reverseIndex]]);
        reverseIndex--;
    }

    return result;
} 
// Q71. Write a function to find the sum of all elements in a 2D array. 

function sumOf2DArr(arr){
  let sum = 0;
  for(let i =0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
        sum += arr[i][j]
    }
  }
  return sum
}

console.log(sumOf2DArr([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));


// Q72. Given a matrix, find the sum of each row and store the results in an array.

function sumOfRow(arr){
    let sumOfRows = [];
    for(let i = 0;i<arr.length;i++){
        let sum = 0;
        for(let j = 0; j< arr[i].length;j++){
            sum+= arr[i][j]
        }
        sumOfRows.push(sum)
    }
    return sumOfRows
}
console.log(sumOfRow([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));

// Q73. Given a matrix, find the sum of each column and store the results in an array.

function findSumOfColums(arr){
    let sumOfColums = [];
    for(let i = 0; i<arr.length;i++){
        let sum = 0;
        for(let j =0;j<arr[i].length;j++){
            sum += arr[j][i]
     
        }
        sumOfColums.push(sum)
    }
    return sumOfColums
}
console.log(findSumOfColums([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));


// Q74. Given an array of arrays, flatten it into a single-dimensional array.

function flattenArray(arr){
    const flattened = [];

    function flattenHelper(array){
        for(let i = 0; i< array.length;i++){
            if(Array.isArray(array[i])){
                flattenHelper(array[i]);
            }else{
                flattened.push(array[i])
            }
        }
    }
    flattenHelper(arr)
    return flattened
}
console.log(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9, [1, 2, 3,[3,2,[4,3]]]]]));


// Q75. Given a 2D array, find the elements that are common in all rows.

function findCommonElAllRows(arr){
    let commonEl = [];
   for(let element of arr[0]){
    let isCommon = true
   
    for(let i = 1; i <arr.length;i++){
        if(!arr[i].includes(element)){
            isCommon = false;
            break;
        }
    }
    if(isCommon){
        commonEl.push(element)
    }
   }
   return commonEl
}
console.log(findCommonElAllRows([[1, 2, 3],[4, 5, 2],[2, 8, 9]]));

// Q76.  Write a function to find the second-largest element in a 2D array.

function secondLargest(arr){
    let result = [];
    for(let i =0;i<arr.length ;i++){
       let maxNum = -Infinity;
       for(let j =0;j< arr[i].length;j++){
       if(maxNum<arr[i][j]){
        maxNum = arr[i][j]
      
       }
       }
      
    }
    return result
}
console.log(secondLargest([[1, 2, 3],[4, 5, 2],[2, 8, 9]]));