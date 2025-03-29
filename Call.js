//.call() is a built-in method of JavaScript functions that allows you to invoke a function with a specific this value and pass arguments individually

const car = {
    brand: "Toyota",
    getBrand: function() {
        console.log(`Car brand: ${this.brand}`);
    }
};

const bike = { brand: "Yamaha" };

// Borrowing `getBrand` method from `car`
car.getBrand.call(bike);  // Output: Car brand: Yamaha



function Animal(name) {
    this.name = name;
}

function Dog(name, breed) {
    Animal.call(this, name); // Inherit from Animal
    this.breed = breed;
}

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.name);  // Output: Buddy
console.log(myDog.breed); // Output: Labrador




const user = {
    firstName: "Alice",
    lastName: "Brown",
    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

const anotherUser = { firstName: "John", lastName: "Doe" };

// Borrowing fullName method
user.fullName.call(anotherUser);  // Output: John Doe
