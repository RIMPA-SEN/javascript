//let keyword

let fullName = "Rimpa Sen"
console.log(fullName);
let age = 27;
console.log(age);
//let age = 28; redeclaration not allowed but update allowed
age=28;


//var keyword - redecalation allowed -global scope

var number = 89;
var number =90;
console.log(number);


//const keyword - cannot redeclared and update
const pi = 3.14;
console.log(pi);
//pi=34;
//give error on console = let_const_var.js:21 Uncaught TypeError: Assignment to constant variable.

//undefined
let a;
console.log(a)
//const b; will give error as constants must be initialised


//let and const are block scoped
{
    let num=10;
    console.log(num);
}
let num =20;
console.log(num);


//To display all logs without using multiple log statements
console.table([fullName,age,number]);




