//function definition and call --->arguments vs parameters

function myFunction(){
    console.log("This is my function");
}
myFunction();

function myMessage(msg){
    console.log(msg);
}
myMessage("I love Javascript");


//return statement-->no statement executes after return. if you do not pass any value then result will be undefined

function sum(x,y){
    sum = x+y; 
    return sum;
}
let result = sum(9,6);
console.log(result);


//rest operator ... when we don't know number of arguments
function calculatePrice(...num){
     return num; 
}
console.log(calculatePrice(100,200,300));
// This will convert arguments in array and then you can add all elements of array

function calculatePrice2(val1, val2, ...num){

}
console.log(calculatePrice2(100,200,300,600,500));
//val1:100, val2:200 and num:rest all


//Pass Object to function
const user={
    username:"rimpa",
    price:199
};
function handleObject(anyObject)
{
console.log('Username is ${anyObject.username}');
}
handleObject(user);


//Arrow functions

const arrowSum = (a,b)=>{
    console.log(a+b);
};
arrowSum(8,9);

// if you use () instead of {} then no use of return keyword

const addTwo=(num1,num2)=> (num1 + num2)
addTwo(5,6);

const vowelsCount=(str)=>{
    let count=0;
    for(let i of str){
        if(i=="a"|| i=="e"|| i=="o"|| i=="i"|| i=="u")
        {
            count++;
        }

    }
    console.log(count);

};
vowelsCount("Hello");


//forEach Loop
let arr1 = [3,4,5,6];
arr1.forEach(function printElements (val){
    console.log(val);
});

let arr2 = ["Rimpa","Anil"]
arr2.forEach((val)=>{
    console.log(val);

});


//Map,filter,reduce

let marks = [23,98,45,96,78];
let count= marks.filter((val)=>{
    return val>90;
}
);
console.log(count);



const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);


const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

const userNames = users.map(user => user.name);

console.log(userNames);

//map and filter chaining

const numbers1 = [1, 2, 3, 4, 5, 6];

const doubledEvens = numbers
    .filter(num => num % 2 === 0)  // Step 1: Keep only even numbers
    .map(num => num * 2);          // Step 2: Double them

console.log(doubledEvens);




let num = prompt("Enter a number");
let arr=[];
for(let i=1 ; i<=num;i++)
{
    arr[i-1]=i;
}
console.log (arr);
let sum = arr.reduce((prev,curr)=>
{
return prev+curr;
});
console.log(sum);



//IIFE -->An Immediately Invoked Function Expression (IIFE) is a function that executes immediately after being defined.
(function() {
    console.log("IIFE executed!");
})();


(function() {
    let message = "Hello from IIFE!";
    console.log(message);
})();


(() => {
    console.log("Arrow function IIFE");
})();

(function(name) {
    console.log(`Hello, ${name}!`);
})("John");




