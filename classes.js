/*parts of OOPS
- Object literal = collection of properties and methods
-Constructor Function
-Classes
-Instances (new,this)

4 pillars
-Abstraction = fecth
-Encapsulation
-Inheritance
-Polymorphism
*/

// 1. Object literal

const user={
    username:"Rimpa",
    age :27,
    getUserDetails: function(){
        //console.log(`${username}`); -->username not defined
        console.log(`${this.username}`);
        console.log(this);
    }
}
console.log(this);
console.log(user.getUserDetails());

//2. Constructor Function = to create multiple objects with similar properties and functions. Create with "new" keyword and create new isntance of each object

function Person(name, age) {
    this.name = name;   
    this.age = age;    

    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
person1.sayHello();
person2.sayHello();
console.log(person1.sayHello() === person2.sayHello());
//Each new person gets a duplicate copy of sayHello() function, consuming unnecessary memory.

//Prototype 
function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}


Car.prototype.startEngine = function () {
    console.log(`${this.brand} engine started!`);
};

const car1 = new Car("Toyota", "Red");
const car2 = new Car("BMW", "Black");

console.log(car1.startEngine === car2.startEngine); 
console.log(car1.__proto__ === Car.prototype);// true (Same function reference)

//new keyword Creates a new object and links its __proto__ to the constructor's prototype.Saves memory by sharing methods among instances.




//prototype in inheritance


const employee={
    fullname:"Rimpa",
    calcTax(){
       console.log("tax rate is 10%");
    },
};


const workers={
    salary:50000,
};

//workers.__proto__=employee;
Object.setPrototypeOf(employee,workers);

//another example
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise`);
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Setting up prototype inheritance
Dog.prototype = Object.create(Animal.prototype);

//  Fixing the constructor
Dog.prototype.constructor = Dog;

// Adding a new method to Dog prototype
Dog.prototype.bark = function() {
    console.log(`${this.name} barks`);
};

// Creating an instance
const dog1 = new Dog("Buddy", "Labrador");

console.log(dog1.constructor); //  Now it correctly refers to Dog
dog1.speak(); //  "Buddy makes a noise"
dog1.bark();  //  "Buddy barks"
