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



function calculateTotalPrice(order) {
    let total = 0;
  
    for(let i = 0; i <= order.length; i+=1){
         total += order[i];
    }
  
    return total;
  }
  
  console.log(calculateTotalPrice([12, 85, 37, 4]));


