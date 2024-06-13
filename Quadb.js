// Question 1. Implement a function that checks whether a given string is a palindrome or not.

function checkPalindrome(str) {
    var cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var start = 0;
    var end = cleanedStr.length - 1;

    while (start < end) {
        if (cleanedStr[start] !== cleanedStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}

console.log("Answer no 1"); 
console.log(checkPalindrome("madam")); 
console.log(checkPalindrome("Dean")); 

// Question 2. Given a sorted array of integers, implement a function that returns the index of the first occurrence of a given number.

function FirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; 
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

const sortedArray = [1,1,3,4,5,5,6,6];
const target = 3;
console.log("Answer no 2"); 
console.log(FirstOccurrence(sortedArray, target)); 

// Question 3. Given a string of words, implement a function that returns the shortest word in the string.

function findShortestWord(sentence) {
    
    const words = sentence.split(' ');
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }
    
    return shortestWord;
}

const sentence = "Show me your code";
console.log("Answer no 3"); 
console.log(findShortestWord(sentence)); 


// Question no 4. Implement a function that checks whether a given number is prime or not.

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Answer no 4"); 
console.log(isPrime(8));  
console.log(isPrime(5));  


// Quetion no 5. Given a sorted array of integers, implement a function that returns the median of the array.

function findMedian(sortedArray) {
    const length = sortedArray.length;
    
    if (length === 0) {
        throw new Error("The array is empty");
    }
    
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
}
const sortedArray1 = [1, 2, 3, 4, 5];
console.log("Answer no 5"); 
console.log(findMedian(sortedArray1)); 

const sortedArray2 = [1, 2, 3, 4, 5, ,8 ,5,6];
console.log(findMedian(sortedArray2)); 


// Question 6. Implement a function that finds the longest common prefix of a given set of strings.


function longestCommonPrefix(strings) {
    if (strings.length === 0) 
        return '';

    let prefix = strings[0];
    
    for (let i = 1; i < strings.length; i++) {
        while (strings[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') 
                return 'not find any common';
        }
    }
    
    return prefix;
}

const strings1 = ["code", "cold", "codex"];
console.log("Answer no 6"); 
console.log(longestCommonPrefix(strings1)); 

const strings2 = ["ram", "time", "clum"];
console.log(longestCommonPrefix(strings2)); 

// Question 7. Implement a function that returns the kth smallest element in a given array.


function SmallestElement(array, k) {
    if (k < 1 || k > array.length) {
        throw new Error("k is not found in the array");
    }
    array.sort((a, b) => a - b);
    return array[k - 1];
}
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
console.log("Answer no 7"); 
console.log(SmallestElement(array, k));



