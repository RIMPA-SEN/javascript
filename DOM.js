
let heading=document.getElementById("heading");
console.log(heading);


let result = document.getElementsByClassName("abc");
console.log(result);

let para = document.getElementsByTagName("p");
console.log(para);

let elements = document.querySelector("p");
console.log(elements);

let allelements = document.querySelectorAll("p");
console.log(allelements);
//Above returns 3 <p> elements as nodelist. change the style of 1st <p>
allelements[0].style.color = "green";

let idheading = document.querySelector("#heading");
console.log(idheading);

let allClass= document.querySelectorAll(".abc");
console.log(allClass);


//properties of dom

console.log(heading.tagName);
console.dir(document.body.firstChild);


//InnerText

let div = document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
console.dir(div.innerHTML);
console.dir(div.textContent);


//Attributes
let value =heading.getAttribute("id");
console.log(value);
heading.setAttribute("id","changeHeading");
console.log(heading.getAttribute("id"))





