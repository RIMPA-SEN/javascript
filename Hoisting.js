//Hoisting is a JavaScript mechanism where variables and function declarations are moved (hoisted) to the top of their scope before code execution.


console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10


console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ❌ ReferenceError: Cannot access 'c' before initialization
const c = 30;


greet(); // ✅ Works fine

function greet() {
    console.log("Hello, world!");
}


hello(); // ❌ TypeError: hello is not a function

var hello = function () {
    console.log("Hi!");
};


/*var is hoisted and initialized with undefined.
✔ let and const are hoisted but not initialized (TDZ applies).
✔ Function declarations are hoisted with their definition.
✔ Function expressions (including arrow functions) are NOT hoisted. */
