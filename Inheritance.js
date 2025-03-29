class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object (instance) of the class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet();  // Output: Hello, my name is Alice and I am 25 years old.
person2.greet();  // Output: Hello, my name is Bob and I am 30 years old.


class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // Calls the parent class constructor
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

const emp1 = new Employee("John", 28, "Software Engineer");

emp1.greet();  // Output: Hello, my name is John and I am 28 years old.
emp1.work();   // Output: John is working as a Software Engineer.


//static methods
class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

// Calling the static method directly from the class
console.log(MathUtil.add(5, 3));  // Output: 8

// Trying to access a static method from an instance
const mathInstance = new MathUtil();
console.log(mathInstance.add(2, 3));  //  Error: mathInstance.add is not a function

//static instances
class Counter {
    static count = 0;  // Static property

    static increment() {
        this.count++;
        console.log(`Count: ${this.count}`);
    }
}

// Accessing static property
console.log(Counter.count);  // Output: 0

// Calling the static method
Counter.increment();  // Output: Count: 1
Counter.increment();  // Output: Count: 2

// Trying to access the static property from an instance
const counterInstance = new Counter();
console.log(counterInstance.count);  // Undefined (Static properties are not accessible from instances)


//static methods and instances can be overidden in child classes
class Animal {
    static category = "Living Being";

    static speak() {
        console.log("Animals make sounds.");
    }
}

class Dog extends Animal {}

// Accessing static property and method from the parent class
console.log(Dog.category);  // Output: Living Being
Dog.speak();  // Output: Animals make sounds.


