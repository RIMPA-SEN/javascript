//create object literals
/*const Student= {
    fullName: "Anil",
    age:23,
    Marks:78.8,
    isPass:true,
    greeting: function(){
        console.log("Hello "+ this.fullName);
    }
};
console.log(Student);
console.log(typeof Student);
//object

//access fields in object
console.log(typeof Student.fullName);
console.log(Student["fullName"]);
console.log(Student.fullName);

//update fields of object
Student.fullName = "Rimpa Sen";
console.log(Student.fullName)
//Object.freeze(Student);
Student.age = 27;
console.log(Student["age"]);

// function in object and this keyword

Student.greeting(); */


//symbols as key in object
const mySym = Symbol("key1")
const user={
    name :"juju",
    [mySym]= "myvalue"
}
console.log(user[mySym]); //myvalue
//Create Singleton Object

const tinderUser=new Object();
tinderUser.id = "123";
tinderUser.name = "Anil";
console.log(tinderUser);

//Objects in objects
const user = {
    email : "user@gmail.com",
    fullName:{
        firstname:"rimpa",
        lastname:"sen"
    }

};
console.log(user.fullName.firstname);

//assign. Object.keys(), Object.values(), Object.entries(), Student.hasOwnProperty("fullName")


//Destructuring objects
const course={
    coursename :"Javascript",
    price :"999",
    courseInstructor : "hitesh"
}
const{courseInstructor:instructor}=course;
console.log(instructor);
