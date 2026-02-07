const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //Number:100

//Number have few properties than String 

console.log(balance.toString().length); //3
console.log(balance.toFixed(2));  //100.00 for e-commerce application


const account = 23.8966;
console.log(account.toPrecision(3));  //23.9
//try with 123.8966 = 124 and 1123.8966 = 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString); //1,000,000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths Library

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(5.9)); //5
console.log(Math.min(2,3,5)); //2

//sqrt,pow

//Math Random from 0 -1

console.log(Math.random()); //0.567, 0.90876 random values from 0 to 1
console.log((Math.random()*10)+1); //random values from  1- 10 , we do +1 to ignore 0 values

//define random values between min and max
const min =10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1))+min);












