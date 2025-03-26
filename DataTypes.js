//Primitive 

let num = 67;
console.log(typeof num);
let fullName = "Rimpa";
console.log(typeof(fullName));
let boolean = true;
console.log(typeof boolean);
let a;
console.log(typeof a);
let b = null;
console.log(b);
//null
console.log(typeof b);
//Object
let bigint = BigInt("123")
console.log(bigint);
//123n
console.log(typeof bigint);
//bigint
let x = Symbol("Hello!");
console.log(x)
console.log(typeof x);

//Non Primitive=Object

const Student= {
    fullName: "Anil",
    age:23,
    Marks:78.8,
    isPass:true,
};
console.log(Student);
console.log(typeof Student);
//object
console.log(typeof Student.fullName);
console.log(Student["fullName"]);
console.log(Student.fullName);

//to update object values
Student["age"]= Student.age + 1;
console.log(Student.age);
Student.fullName = "Rimpa Sen";
console.log(Student.fullName)


