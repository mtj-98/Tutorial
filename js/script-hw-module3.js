// ------------ #1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   } ;

// ------------ #2
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     }
//   };
  
// ------------ #3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
  

// ------------ #4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Change code above this line

// ------------ #5
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
//   // Change code above this line
  

// ------------ #6
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
// apartment.price =   5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ------------ #7
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city: "Kingston",
// }

// ------------ #8
// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     name,
//     price,
//     image,
//     tags,
// };

// ------------ #9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// [emailInputName]: "henry.carter@aptmail.com",
// [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };

// ------------ #10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line

//   for (const key in apartment) {
//        keys.push(key);
//        values.push(apartment[key]);      
//   }
//   console.log(keys);
//   console.log(values);

// ------------ #11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if (apartment.hasOwnProperty(key)) {
//   keys.push(key);
//   values.push(apartment[key]);  
// }
//    // Change code above this line
// }

// ------------ #12
// function countProps(object) {
//     let propCount = 0;
    
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)){
//           propCount += 1;
//         }
//       }



//     // Change code above this line
//     return propCount;
//   }
//   console.log(countProps({ name: 'Mango', age: 2 }));
  

// ------------ #13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
//   const keys = Object.keys(apartment);

//   for (const key of keys) {
//     values.push(apartment[key]);
//   }

//   console.log(values);
  
// ------------ #14
// function countProps(object) {
//     const propCount = Object.keys(object).length;
//     return propCount;
//   }

//   console.log(countProps({ name: "Mango", age: 2 }));
  

// ------------ #15
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  
// ------------ #16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     const values = Object.values(salaries);

// for (const value of values) {
//     totalSalary += value;
// }
//     // Change code above this line
//     return totalSalary;
//   }

  
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// ------------ #17
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

  
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
    
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

// ------------ #18
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     // Change code below this line
  
//   for (const product of products) {

//     if (product.name == productName) {
//         return product.price; 
//     }
//   }
//   return null; 
//     // Change code above this line
//   }
  
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));

// ------------ #19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  

//   function getAllPropValues(propName) {
//     // Change code below this line
//     let arr =[];

//     for (const product of products) {
//       if (propName in product) {
//         arr.push(product[propName]); 
//       }
      
      
        
//     }
  
//   return arr;
// }


  
//   console.log(getAllPropValues("name"));
//   console.log(getAllPropValues("category"));


// ------------ #20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {
//     // Change code below this line

//     let sum = 0;

//   for (const product of products) {

//     if (productName === product.name) {
//      sum =  product.price * product.quantity;
//     }
    
// }

// return sum;
//     // Change code above this line
//   }
  
// console.log(calculateTotalPrice("Grip"));


// ------------ #21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow}  = highTemperatures;
  
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
