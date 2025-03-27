//for of loops -->iterate through array, strings ,sets and maps

const numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}


const message = "Hello";

for (const char of message) {
    console.log(char);
}


const userMap = new Map([
    ["name", "Alice"],
    ["age", 25],
    ["city", "New York"]
]);

for (const [key, value] of userMap) {
    console.log(`${key}: ${value}`);
}

//for-in loops -->used for looping over objects and its properties

const user = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}


//for Each 
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => console.log(fruit));

//Array of Objects
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

users.forEach(user => console.log(`${user.name} is ${user.age} years old.`));



