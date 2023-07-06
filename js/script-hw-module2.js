// -----------#1
// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
  
//     return "You are a minor";
//   }


// ---------------#2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     } 
//     return "Access denied, wrong password!";
   

//     // Change code above this line
//   }
  

// ------------#3
// function checkStorage(available, ordered) {
//     // Change code below this line

    
  
//     if (ordered === 0) {
//         return  "Your order is empty!";
//     } 
//      if (ordered > available) {
//         return  "Your order is too large, not enough goods in stock!";
//     } 
//         return "The order is accepted, our manager will contact you";
    
  
    
//     // Change code above this line
//   }
  
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// -----------#4
// const fruits = ["apple", "plum", "pear", "orange"];

// ----------#5
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];

// -------#6
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// --------#7
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);



// ---------#8 
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;

// const lastElement = fruits[lastElementIndex];



// --------- #9
// function getExtremeElements(array) {
//   return [array[0], array[array.length -1]];

//   }

// ----------#10
// function splitMessage(message, delimiter) {
//     let words;
//     // Change code below this line
//   words = message.split(delimiter);
//     // Change code above this line
//     return words;
//   }
  
//   console.log(splitMessage("Mango hurries to the train", " "));
//   console.log(splitMessage("Mango", ""));
//   console.log(splitMessage("best_for_week", "_"));
  

// ----------#11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//   message = message.split(" ").length;
//  let totalPrice = message * pricePerWord;
//  return totalPrice;
 
//     // Change code above this line
//  }
  
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ---------#12
// function makeStringFromArray(array, delimiter) {
//     let string;
//     // Change code below this line
  
//   string = array.join(delimiter);
  
//     // Change code above this line
//     return string;
//   }

//   console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

// ---------#13

// function slugify(title) {
//     // Change code below this line
  
//     let slug = title.toLowerCase().split(" ").join("-");
//     return slug;

//     // Change code above this line
//   }

//   console.log(slugify("Arrays for begginers"));

// --------#14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(fruits.length - 3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// ----------#15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// -----------#16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line

// const allArrays = firstArray.concat(secondArray);

// if (allArrays.length >= maxLength) {
//     return allArrays.slice(0, maxLength);
// }
// return allArrays.length;

//     // Change code above this line
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


// ---------#17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }



// --------#18
// function calculateTotal(number) {
//     let sum = 0;
  
//     for(let i = 1; i <= number; i+=1){
//       sum += i;
//     }
  
//     return sum;
//   }
//   console.log(calculateTotal(1))
//   console.log(calculateTotal(3))

// ---------#19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



// ------- #20
// function calculateTotalPrice(order) {
//     let total = 0;
  
//     for(let i = 0; i <= order.length-1; i+=1){
//         total += order[i];
//     }
  
//     return total;
//   }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));


 // ---------- #21
// function findLongestWord(string) {
//     // Change code below this line
//   let arrayWords = string.split(" ");
//     let longestWord = arrayWords[0];
//     for (let i = 1; i < arrayWords.length; i += 1) {
//       if (longestWord.length <= arrayWords[i].length) {
//         longestWord = arrayWords[i];
//       }
      
//     }
    
//   return longestWord;
  
//     // Change code above this line
//   }
  
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// ---------- #22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//   for (let i = min; i <= max; i +=1 ) {
//       numbers.push(i);
    
//   }
//     // Change code above this line
//     return numbers;
//   }
  
//   console.log(createArrayOfNumbers(1, 3));



// ---------- #23
// function filterArray(numbers, value) {
//     // Change code below this line
//    const newArray = [];
//    for (let i = 0; i < numbers.length; i+=1) {
//        if (value < numbers[i]) {
//          newArray.push(numbers[i]);
//        }
   
//    }
//  return newArray;
//    // Change code above this line
//  }
//  console.log(filterArray([1, 2, 3, 4, 5], 3));


// ---------- #24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
  
// for (let i = 0; i < fruits.length; i+=1) {
//     const hasFruit = fruits.includes(fruit);

//     if (hasFruit) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }

//   }
//   console.log(checkFruit("plum"));
//   console.log(checkFruit("mandarin"));

// ---------- #25
// function getCommonElements(array1, array2) {
//     // Change code below this line
  
// let newArray = [];
// for (let i = 0; i < array1.length;  i +=1) {
// if (array2.includes(array1[i])) {
//   newArray.push(array1[i]);  
// }
   
    
// }


// return newArray;
  
  
//    // Change code above this line
//   }

//   console.log(getCommonElements([1, 2, 3], [2, 4]));

// ---------- #26
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let orders of order) {
//      total += orders;   
//     }
  
//     // Change code above this line
//     return total;
// }
  
//   console.log(calculateTotalPrice([12, 85, 37, 4]));


// ---------- #27
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  

// for (const number of numbers) {
//     if (number > value) {
//         filteredNumbers.push(number);
//       }
// }

//     return filteredNumbers;
//     // Change code above this line
//   }
  

//   console.log(filterArray([1, 2, 3, 4, 5], 3));

// -------- #28
// Change code below this line
// const a = 3 % 3 ;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6 ;



// ------- #29
// function getEvenNumbers(start, end) {
//     // Change code below this line
//  let arr = [];

//  for (let i = start; i <= end; i +=1) {
    
//     if (i % 2 === 0) {
//         arr.push(i);
//     }


//  }
 
 
//      return arr;// Change code above this line
//    }

//    console.log(getEvenNumbers(8, 8));


// --------- #30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


//------- #31
// refactoring cod
// function findNumber(start, end, divisor) {
//     // Change code below this line
//     let number;
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         number = i;
//         return number;
//       }
//     }
  
//     // Change code above this line
//   }
  

// --------#32
// function includes(array, value) {
//     // Change code below this line
// for (const arr of array) {

//     if (arr === value) {
//         return true;
//     }
// }
// return false;

//     for (let i = 0; i < array.length; i+=1) {
//            if (value === array[i]) {
//                  return true;
//                } 
//     }
//     return false;
//     // Change code above this line
//   }
 

//   console.log(includes([1, 2, 3, 4, 5], 3));