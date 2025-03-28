let btn = document.querySelector("#btn1");
/*console.log(btn);
btn.onclick=(e)=>{
console.log("Event button clicked");
console.log(e);
console.log(e.target);
};
*/

//Event Listener
btn.addEventListener("click", ()=>{
 console.log("Event button clicked handler 1");
});

btn.addEventListener("click", ()=>{
    console.log("Event button clicked handler 2");
   });

   const handler3 = ()=>{
    console.log("Event button clicked handler 3");
   };

   btn.addEventListener("click",handler3);

   btn.removeEventListener("click",handler3)


   //types of events, timestamps, defaultPrevented--->to prevent submit of form

   //The addEventListener method in JavaScript allows you to attach an event handler to an element. The third parameter (optional) can be either true or false, which determines the event propagation phase(false) or bubbling phase(true)
 


   //remove element

   document.getElementById("myList").addEventListener("click", function(event) {
    // Check if the clicked element is an <li>
    if (event.target.tagName === "LI") {
        event.target.parentNode.removeChild(event.target); // Remove the clicked element
    }
});

// or event.target.remove();