function addLanguage(langName){
    let listItem=document.createElement("li");
    listItem.innerHTML= `${langName}`;
    document.querySelector(".language").
    appendChild(listItem)
}

addLanguage("python");
addLanguage("typescript");

//otimised approach to add elements

function addLanguage2(langName){
    let listItem=document.createElement("li");
    listItem.appendChild(document.createTextNode(langName));
    document.querySelector(".language").
    appendChild(listItem)
}
addLanguage2("spring");
addLanguage2("React");


//Edit element
let secondLang=document.querySelector("li:nth-child(2)");
let newList =document.createElement("li");
newList.textContent="Ruby";
secondLang.replaceWith(newList);

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML='<li>Go</li>';

//Remove element

const lastlang=document.querySelector("li:last-child");
lastlang.remove();



