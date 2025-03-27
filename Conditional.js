//if statement

let age =17;
if(age>=18){
    console.log("You can vote");
}
//if-else
else{
    console.log("You cannot vote")
}


//if-else if-else
let marks = 87;
if(marks>=90)
{
    console.log("Pass");
}
else if(marks>=80 && marks<90)
{
    console.log("Good")
}
else{
    console.log("fail")
}
    

//Ternary Operators

age>=18?console.log("Adult"):console.log("Not Adult");


//Switch Statement
let fruit = "mango";
switch(fruit){
    case("apple"):{
        console.log("apple");
        break;
    }
    case("papaya"):{
        console.log("papaya");
        break;
    }
    default:{
        console.log("Nothing");
    }

}
    


//take user input

let num = prompt("Enter a number:");
if(num%5==0)
{
    console.log("divisible by 5");

}
else{
    console.log("not divisible by 5");
} 


//truthy values = "0" ,'false', " ", [], {},function(){}
//falsy values = false, 0, -0,BigInt0n, "",null , undefined, Nan

//Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10;
let val2 = null ?? 20;
let val3 = undefined ?? 15;
let val4 = null ?? 30 ?? 40;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
