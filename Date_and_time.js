//Date is an object in js. javascript stores date as number of milliseconds since Januray 01 1970

const myDate = new Date();
console.log(myDate); 
console.log(typeof myDate); //Object

//Date methods
console.log(myDate.toString()); //Wed Mar 01 2023 12:05:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString()); 
console.log(myDate.toDateString()); //Wed Mar 01 2023
console.log(myDate.toLocaleString()); //3/1/2023 , 12:05:!9 pm
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getHours());

let myCreatedDate = new Date(2023,0,23)  //month starts from 0
console.log(myCreatedDate.toString()); //Mon Jan 23 2023

let myCreatedDate = new Date(2023,0,23,5,3)  //month starts from 0
console.log(myCreatedDate.toLocaleString()); //1/23/2023, 5:03:00 AM




//Temporal is coming to replace Date


