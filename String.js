let str = "Rimpa Sen";
console.log(str.length);
console.log(str);
console.log(typeof str);
console.log(str[2]);

//Template literals

let obj={
    item: "Pen",
    price :10,

};
//console.log("The cost of",obj.item,"is",obj.price,"rupees"); -- Traditional way
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

//Escape Characters
console.log("Rimpa\nSen");
console.log("Rimpa\tSen");

//String Methods
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str); //strings are immutable
console.log(str.slice(1,4))
console.log(str.charAt(3));
console.log(str.concat("is beautiful"));
let str2= str.replace("R","P");
console.log(str2);

//Another way to define string
let str3 = new String("Rimpa");
