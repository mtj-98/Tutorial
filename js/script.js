// -------- #1

// const productName = "Droid";

// const pricePerItem = 2000;

// console.log (productName);
// console.log(pricePerItem);





// --------- #2
// let pricePerItem = 2000;
// pricePerItem = 3500;

// let productName = "Droid";
// productName = "Repair droid";

// console.log(pricePerItem);
// console.log (productName);


// -------- #3
// const topSpeed = 160;

// let distance = 617.54;

// const login = "mango935";

// const isOnline = true;

// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// colsole.log(isOnline);
// console.log(isAdmin);


// -------- #4

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = (pricePerItem * orderedQuantity);

// console.log(totalPrice);


// ------- #5
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);


// -------- #6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;

// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// console.log(totalPrice);

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// ------ #7
// function sayHi() {
//     console.log('Hello, this is my first function!');
// }

// sayHi();

// ------- #8

// function add(a, b, c) {
//     console.log(`Addition result equals ${a + b + c}`);
//   }

//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

// ------ #9
// function add(a, b, c) {
  
//     return a + b + c;
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

// ------ #10
// function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };
  
//   console.log(makeMessage('Radar', 6150));
//   console.log(makeMessage('Scanner', 3500));
//   console.log(makeMessage('Reactor', 8000));
//   console.log(makeMessage('Engine', 4070));


// ------ #11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = (orderedQuantity * pricePerItem);
  
//     // Change code above this line
//     return totalPrice;
//   };


// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));


// -------- #12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line

//     const totalPrice = (orderedQuantity * pricePerDroid + deliveryFee);
  
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
//     // Change code above this line
//     return message;
//   }

//   console.log(makeOrderMessage(2, 100, 50));
//   console.log(makeOrderMessage(4, 300, 100));
//   console.log(makeOrderMessage(10, 70, 200));


// -------- #13
// function isAdult(age) {
//     // Change code below this line
//     const passed = (age>=18);
  
//     // Change code above this line
//     return passed;

//   }
  
//   console.log(isAdult(20));
//   console.log(isAdult(14));
//   console.log(isAdult(8));
//   console.log(isAdult(37));
  

// -------- #14
// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'jqueryismyjam';
//     // Change code below this line
//     const isMatch = (SAVED_PASSWORD === password);
  
//     // Change code above this line
//     return isMatch;
//   }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// ----- #15
// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { // Change this line
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }
  
//   console.log(checkAge(20));
//   console.log(checkAge(8));
//   console.log(checkAge(14));
//   console.log(checkAge(38));


// -------- #16
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  

//     if (available < ordered) { 
//        message = 'Not enough goods in stock!';
//     } else {
//        message = 'Order is processed, our manager will contact you.';
//     }

//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));

// ------- #17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// ---------- #18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     // Change code below this line
//     const totalPric = (pricePerDroid * orderedQuantity);
    
    
//     if (totalPric > customerCredits) { 
//         message = 'Insufficient funds!';
//     } else {
//         message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPric} credits left`;
//     }

  
//     // Change code above this line
//     return message;
//   }
  
//   console.log (makeTransaction(3000, 5, 23000));
//   console.log (makeTransaction(1000, 3, 15000));
//   console.log (makeTransaction(5000, 10, 8000));
//   console.log (makeTransaction(2000, 8, 10000));
//   console.log (makeTransaction(500, 10, 5000));

// ---------- #19
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (ADMIN_PASSWORD === password) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }

//   console.log(checkPassword("mangohackzor"));
//   console.log(checkPassword(null));
//   console.log(checkPassword("polyhax"));
//   console.log(checkPassword("jqueryismyjam"));


// -------- #20
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line


//     if (ordered === 0) { // Change this line
//       message =  'There are no products in the order!';
//     } else if (available < ordered) { // Change this line
//       message = 'Your order is too large, there are not enough items in stock!';
//     } else {
//       message = 'The order is accepted, our manager will contact you';
//     }
  

  
//     // Change code above this line
//     return message;
//   }
  

//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(70, 0));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 250));
//   console.log(checkStorage(150, 0));


// --------- #21
// function isNumberInRange(start, end, number) {
//     const isInRange = (number >= start && number <= end); // Change this line
  
//     return isInRange;
//   }

//   console.log(isNumberInRange(10, 30, 17));
//   console.log(isNumberInRange(10, 30, 5));
//   console.log(isNumberInRange(20, 50, 24));
//   console.log(isNumberInRange(20, 50, 76));

// ------ #22
// function checkIfCanAccessContent(subType) {
//     const canAccessContent = ("pro" === subType || "vip" === subType); // Change this line
  
//     return canAccessContent;
//   }

//   console.log(checkIfCanAccessContent("pro"));
//   console.log(checkIfCanAccessContent("starter"));
//   console.log(checkIfCanAccessContent("vip"));
//   console.log(checkIfCanAccessContent("free"));


// ------ #23
// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }

//   console.log(isNumberNotInRange(10, 30, 17));
//   console.log(isNumberNotInRange(10, 30, 5));
//   console.log(isNumberNotInRange(20, 50, 24));
//   console.log(isNumberNotInRange(20, 50, 76));


// ------------- #24
// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
  
//     if (totalSpent === 50000 || totalSpent >= 50000) { // Change this line
//     discount =  GOLD_DISCOUNT;
//     } else if (totalSpent === 50000 || totalSpent >= 20000) { // Change this line
//         discount = SILVER_DISCOUNT;
//     } 
//      else if (totalSpent === 20000 || totalSpent >= 5000) { // Change this line
//     discount = BRONZE_DISCOUNT;
//     }
//     else {
//         discount = BASE_DISCOUNT;
//     }
          



//     // Change code above this line
//     return discount;
//   }
  
// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// ---------- #25
// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

  
//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkStorage(100, 50));
//   console.log(checkStorage(100, 130));
//   console.log(checkStorage(200, 20));
//   console.log(checkStorage(200, 150));
//   console.log(checkStorage(150, 180));


// --------- #26
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line


//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";


  
//     // Change code above this line
//     return message;
//   }
  
//   console.log(checkPassword("jqueryismyjam"));
//   console.log(checkPassword("angul4r1sl1f3"));
//   console.log(checkPassword("r3actsux"));

// ------- #27