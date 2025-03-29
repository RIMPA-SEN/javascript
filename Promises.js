const promiseOne= new Promise(function(resolve,reject){

    setTimeout(() => {
       console.log("Task completed"); 
       resolve()
    }, 1000);

});

promiseOne.then(function(){
    console.log("Promise Consumed");
})

//shortcut

new Promise(function(resolve,reject){

    setTimeout(() => {
       console.log("Task completed 2"); 
       resolve()
    }, 1000);

}).then(function(){
    console.log("Promise Consumed 2");
})

//promise with parameter

new Promise(function(resolve,reject){

    setTimeout(() => {
       console.log("Task completed 3"); 
       resolve({username:"rimpa", age:"27"})
    }, 1000);

}).then(function(user){
    console.log(user);
})

//promise with error

const promiseFour =new Promise(function(resolve,reject){
       setTimeout( function(){
        let error=false
          if(!error){
            resolve({username:"Rimpa", password:"123"});
          }
          else{
            reject("ERROR:Something went wrong");
          }

       },1000)
})

//promise chaining the return of first then goes to second then
promiseFour.then().catch((user)=>{
      console.log(user);
      return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Promise resolved or rejected");
})

//Async await

const promiseFive =new Promise(function(resolve,reject){
    setTimeout( function(){
     let error=true
       if(!error){
         resolve({username:"Javascript", password:"abc"});
       }
       else{
         reject("ERROR:Something went wrong");
       }

    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch(error)
    {
        console.log(error)
    }
}

consumePromiseFive()



//fetch to make an api call and handle reposne
async function fetchUserData() {
    try {
        //  Making an API request
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        //  Checking if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        //  Parsing the response as JSON
        let user = await response.json();
        console.log("User Data:", user);

        //  Fetch user posts
        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        
        //  Checking for errors
        if (!postsResponse.ok) {
            throw new Error(`HTTP Error! Status: ${postsResponse.status}`);
        }

        //  Parsing the posts data
        let posts = await postsResponse.json();
        console.log("User Posts:", posts);

    } catch (error) {
        // Handling errors
        console.error("Error fetching data:", error.message);
    }
}

// Calling the function
fetchUserData();


//fetch with promise
function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users/1") //  Fetching user data
        .then((response) => {
            if (!response.ok) { //  Check if response is OK (status 200-299)
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            return response.json(); //  Convert response to JSON
        })
        .then((user) => {
            console.log("User Data:", user);

            // 🔵 Fetching user posts based on user ID
            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then((postsResponse) => {
            if (!postsResponse.ok) {
                throw new Error(`HTTP Error! Status: ${postsResponse.status}`);
            }
            return postsResponse.json(); //  Convert posts response to JSON
        })
        .then((posts) => {
            console.log("User Posts:", posts); //  Log user posts
        })
        .catch((error) => {
            console.error("Error fetching data:", error.message); //  Handling errors
        });
}

// Call the function
fetchUserData();







