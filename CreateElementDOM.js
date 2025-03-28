let parent = document.querySelector(".parent");
console.log(parent);

console.log(parent.children); //returns html collection
console.log(parent.children[0].innerHTML); //Monday
for(let i=0;i<parent.children.length;i++)
{
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color="orange";

//properties
console.log(parent.firstElementChild); //<div>Monday</div>
console.log(parent.lastElementChild); //<div>Thursday</div>

//move child to parent
const dayOne=document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

//nodes
console.log(parent.childNodes);

//create element 
const paragraph=document.createElement('p');
console.log(paragraph);
paragraph.classname="main";
paragraph.id = Math.round(Math.random()*10+1);
paragraph.setAttribute("title","title generated");
paragraph.style.backgroundColor="green";
//paragraph.inneText="This is newly created paragraph by javascript";
const addText= document.createTextNode("This is newly created paragraph by javascript");
paragraph.appendChild(addText); //It will not override but append any existing text if present

//show element on page
document.body.appendChild(paragraph);







