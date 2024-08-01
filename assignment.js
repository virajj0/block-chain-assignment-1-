function isAnagram(str1, str2) {
    // Remove any non-alphabetic characters and convert both strings to lowercase
    str1 = str1.replace(/[^\w]/g, '').toLowerCase();
    str2 = str2.replace(/[^\w]/g, '').toLowerCase();
  
    // If the lengths of the strings are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort the characters in both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world'));   // false

  
  function calculateTotalSpentByCategory(transactions) {
    // Create an empty object to store the total spent by each category
    const categoryTotals = {};
  
    // Iterate through each transaction
    for (const transaction of transactions) {
      // Destructure the transaction to get the category and price
      const { category, price } = transaction;
  
      // If the category is not yet in the categoryTotals object, add it with the initial price
      if (!categoryTotals[category]) {
        categoryTotals[category] = price;
      } else {
        // If the category is already in the categoryTotals object, add the price to the existing total
        categoryTotals[category] += price;
      }
    }
  
    // Convert the categoryTotals object into an array of objects with category and totalSpent properties
    const result = [];
    for (const category in categoryTotals) {
      result.push({ category, totalSpent: categoryTotals[category] });
    }
  
    return result;
  }
  
  // Example usage:
  const transactions = [
    { category: 'Groceries', price: 50 },
    { category: 'Entertainment', price: 100 },
    { category: 'Groceries', price: 75 },
    { category: 'Utilities', price: 200 },
    { category: 'Entertainment', price: 50 },
  ];
  
  console.log(calculateTotalSpentByCategory(transactions));
  // Output:
  // [
  //   { category: 'Groceries', totalSpent: 125 },
  //   { category: 'Entertainment', totalSpent: 150 },
  //   { category: 'Utilities', totalSpent: 200 }
  // ]

  

  function findLargestElement(numbers) {
    // Initialize a variable to store the largest number, starting with the smallest possible number
    let largest = -Infinity;
  
    // Iterate through each number in the array
    for (const number of numbers) {
      // Update the largest number if the current number is greater than the current largest
      if (number > largest) {
        largest = number;
      }
    }
  
    // Return the largest number found
    return largest;
  }
  
  // Example usage:
  const numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
  console.log(findLargestElement(numbers)); // Output: 12

  


  function isPalindrome(str) {
    // Remove any non-alphabetic characters and convert the string to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    // Initialize pointers for the start and end of the string
    let left = 0;
    let right = cleanedStr.length - 1;
  
    // Compare characters from the start and end moving towards the center
    while (left < right) {
      if (cleanedStr[left] !== cleanedStr[right]) {
        return false; // If characters don't match, it's not a palindrome
      }
      left++;
      right--;
    }
  
    return true; // If all characters match, it's a palindrome
  }
  
  // Example usage:
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false

  


  function calculateTime(n) {
    // Get the start time using the performance.now() method
    const startTime = performance.now();
  
    // Calculate the sum from 1 to n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    // Get the end time using the performance.now() method
    const endTime = performance.now();
  
    // Calculate the time difference in milliseconds and convert to seconds
    const timeTaken = (endTime - startTime) / 1000;
  
    // Return the time taken in seconds
    return timeTaken;
  }
  
  // Example usage:
  const n = 1000000;
  console.log(`Time taken to calculate sum from 1 to ${n}: ${calculateTime(n)} seconds`);

  



  function countVowels(str) {
    // Define a string of vowels
    const vowels = 'aeiouAEIOU';
    
    // Initialize a counter to keep track of the number of vowels
    let count = 0;
  
    // Iterate through each character in the input string
    for (const char of str) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    // Return the total count of vowels
    return count;
  }
  
  // Example usage:
  console.log(countVowels("Hello, World!")); // Output: 3
  console.log(countVowels("JavaScript"));    // Output: 3
  console.log(countVowels("AEIOU"));         // Output: 5

  








  function sumArray(numbers) {
    // Initialize a variable to keep track of the sum
    let sum = 0;
  
    // Iterate through each number in the array and add it to the sum
    for (const number of numbers) {
      sum += number;
    }
  
    // Return the total sum
    return sum;
  }
  
  // Example usage:
  const number = [1, 2, 3, 4, 5];
  console.log(sumArray(number)); // Output: 15



  function filterEvenNumbers(numb) {
    // Use the filter method to create a new array with only even numbers
    return numb.filter(number => number % 2 === 0);
  }
  
  // Example usage:
  const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(filterEvenNumbers(numb)); // Output: [2, 4, 6, 8, 10]







  function findSmallestElement(num) {
    // Check if the array is empty and return undefined if it is
    if (num.length === 0) {
      return undefined;
    }
  
    // Initialize the smallest number with the first element of the array
    let smallest = numb[0];
  
    // Iterate through each number in the array
    for (const number of num) {
      // Update the smallest number if the current number is smaller
      if (number < smallest) {
        smallest = number;
      }
    }
  
    // Return the smallest number found
    return smallest;
  }
  
  // Example usage:
  const num = [5, 3, 8, 1, 2];
  console.log(findSmallestElement(num)); // Output: 1
  
  



  function reverseString(str) {
    // Convert the string to an array of characters
    const charArray = str.split('');
    
    // Reverse the array of characters
    const reversedArray = charArray.reverse();
    
    // Join the reversed array of characters back into a string
    const reversedString = reversedArray.join('');
    
    // Return the reversed string
    return reversedString;
  }
  
  // Example usage:
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"

  


  function fibonacci(n) {
    // Handle base cases
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    // Initialize the first two numbers in the Fibonacci sequence
    let a = 0;
    let b = 1;
  
    // Compute the Fibonacci number iteratively
    for (let i = 2; i <= n; i++) {
      let next = a + b; // Compute the next Fibonacci number
      a = b; // Update 'a' to the previous 'b'
      b = next; // Update 'b' to the new Fibonacci number
    }
  
    // Return the nth Fibonacci number
    return b;
  }
  
  // Example usage:
  console.log(fibonacci(0)); // Output: 0
  console.log(fibonacci(1)); // Output: 1
  console.log(fibonacci(5)); // Output: 5
  console.log(fibonacci(10)); // Output: 55

  



  function removeDuplicates(arr) {
    // Use a Set to store unique values
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
    
    // Return the array with duplicates removed
    return uniqueArray;
  }
  
  // Example usage:
  const nu = [1, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicates(nu)); // Output: [1, 2, 3, 4, 5]
  
  const words = ['apple', 'banana', 'apple', 'orange', 'banana'];
  console.log(removeDuplicates(words)); // Output: ['apple', 'banana', 'orange']
  
  



  function countOccurrences(str, char) {
    // Split the string by the character and calculate the number of parts
    const parts = str.split(char);
    
    // The number of occurrences is the number of parts minus 1
    return parts.length - 1;
  }
  
  // Example usage:
  console.log(countOccurrences("hello world", 'o')); // Output: 2
  console.log(countOccurrences("javascript", 'a')); // Output: 2
  console.log(countOccurrences("apple", 'p')); // Output: 2

  


  function findCommonElements(arr1, arr2) {
    // Convert the second array to a Set for faster lookups
    const set2 = new Set(arr2);
    
    // Filter elements in the first array that are also in the Set
    const commonElements = arr1.filter(element => set2.has(element));
    
    // Return the array of common elements
    return commonElements;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];
  console.log(findCommonElements(array1, array2)); // Output: [4, 5]
  
  const array3 = ['apple', 'banana', 'cherry'];
  const array4 = ['banana', 'cherry', 'date'];
  console.log(findCommonElements(array3, array4)); // Output: ['banana', 'cherry']

  



  function sortStrings(arr) {
    // Use the sort method to sort the array in alphabetical order
    return arr.sort();
  }
  
  // Example usage:
  const fruits = ['banana', 'apple', 'cherry', 'date'];
  console.log(sortStrings(fruits)); // Output: ['apple', 'banana', 'cherry', 'date']
  
  const names = ['Zach', 'Alice', 'Bob', 'Charlie'];
  console.log(sortStrings(names)); // Output: ['Alice', 'Bob', 'Charlie', 'Zach']

  
  