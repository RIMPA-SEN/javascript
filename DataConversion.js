let age ="33";
let valueInNum = Number(age);
console.log(typeof age); //String
console.log(typeof valueInNum); //Number

let age ="33abc";
let valueInNum = Number(age);
console.log(typeof age); //String
console.log(typeof valueInNum); //Number
console.log(valueInNum); //NaN --->Not a number

let age =null;
let valueInNum = Number(age);
console.log(valueInNum); //0

let age =undefined;
let valueInNum = Number(age);
console.log(typeof valueInNum); //Number
console.log(valueInNum); //NaN

let age =false;
let valueInNum = Number(age);
console.log(typeof age); //String
console.log(typeof valueInNum); //Number
console.log(valueInNum); //0  if true then 1

let age ="Rimpa";
let valueInNum = Number(age);
console.log(typeof age); //String
console.log(typeof valueInNum); //Number
console.log(valueInNum); //NaN



let isLoggedIn =1;
let booleanValue = Boolean(isLoggedIn)
console.log(nooleanValue); //true

let isLoggedIn ="";
let booleanValue = Boolean(isLoggedIn)
console.log(nooleanValue); //false

let isLoggedIn ="Anil";
let booleanValue = Boolean(isLoggedIn)
console.log(booleanValue); //true


let someNumber=44;
let stringValue = String(someNumber);
console.log(stringValue); //33
console.log(typeof stringValue); //String





