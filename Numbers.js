const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

//Number have few properties than String 

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const account = 23.8966;
console.log(account.toPrecision(3));
//try with 123.8966 = 124 and 1123.8966 = 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString);
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths Library

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.9));
console.log(Math.min(2,3,5));

//Math Random from 0 -1

console.log(Math.random());
console.log((Math.random()*10)+1);

//define random values between min and max
const min =10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1))+min);












