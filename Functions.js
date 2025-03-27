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



