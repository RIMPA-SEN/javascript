//Create array

let marks = [98,67,78,34];
let str =["rimpa","anil","shiwang","anubhav"];
let arr = ["rimpa",67,"anil",98]; //can be created but not preferred
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[2]);
console.log(marks[7]); //undefined
marks[2]=66;
console.log(marks);


let num = new Array(1,2,3);
// arrays copy using shallow copy not deep copy


//looping arrays

for(let i of str){
    console.log(i);
}

for(let i in marks){
    console.log(marks[i]);
}

for(let i=0;i<=str.length-1;i++){
    console.log(str[i]);
} 
    

//Array Methods
marks.push(90,87,43);
console.log(marks);
let num =marks.pop();
console.log(num);
console.log(marks);
console.log(str.toString()); 
let str2 = ["Rohini","Richa","Abhijeet"];
console.log(str.concat(str2));
console.log(str);
unshift(marks);
console.log(marks); 

//Some more methods --> unshift,shift, includes,indexOf,join,slice vs splice

let methods = ["apple", "guava","banana","pineapple","papaya"];
console.log(methods.shift());
console.log(methods);
console.log(methods.includes("watermelon")); //false
console.log(methods.indexOf("guava")); //1

//join method converts array to String or join with another separator-->converts words to sentence or convert array to query string
let joinmethod =  methods.join();
console.log(joinmethod);
console.log(methods);
let queryString=methods.join("&");
console.log(queryString);

//slice vs splice -->slice doesnot modify original array and gives copy of array and end is not inclusive. splice modifies original array and used to add or remove elements.end is inclusive

console.log(methods);
console.log(methods.slice(1,3));
console.log(methods);

//splice(start, deleteCount, item 1, item 2.....)
console.log(methods.splice(1,2,"watermelon","grapes"));
console.log(methods);


//spread and flat methods

let marvel = ["thor","hulk","vision","captain america"];
let dc = ["superman", "batman","aqua"];
marvel.push(dc);
console.log(marvel); // ['thor','hulk','vision','captain amarica',['superman','batman','aqua']]
let spreadarray = [...marvel, ...dc];
console.log(spreadarray); //  ['thor','hulk','vision','captain amarica','superman','batman','aqua']

let flatexample = [1,2,3,[6,7],[9,0],6,8];
console.log(flatexample.flat());

//Convert any data to array
console.log(Array.isArray("Rimpa")); //false
console.log(Array.from("Rimpa")); //[ r, i , m,p,a]
let score1 =100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1, score2,score3)); //[ 100,200,300]

console.log(Array.from({name:"Rimpa"}); //[] because whose array key or value












