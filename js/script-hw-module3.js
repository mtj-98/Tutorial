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

// ------------ #22
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   const {yesterday,
//         today,
//         tomorrow,
//         icon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

// ------------ #23
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line

//   const {
//      yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
// icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// ------------ #24
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line

//   for (const {hex, rgb} of colors) {

//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }

// ------------ #25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// ------------ #26
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//       today: {
//         high: todayHigh,
//         low: todayLow},
//       tomorrow: {
//         high: tomorrowHigh,
//         low: tomorrowLow,
// },
//     } = forecast;

//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }
  
//   console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));


// ------------ #27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// ------------ #28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// ------------ #29
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};
  
// ------------ #30
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
  

//     return { ...{ category, priority, completed }, ...data };


//     // Change code above this line
//   }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));  


// ------------ #31
// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (let arg of args) {
//       sum += arg;
//     }
      
//       return sum;
//     }
//     console.log(add(15, 27))
  