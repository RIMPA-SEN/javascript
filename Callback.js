function getUserData(callback) {
    setTimeout(() => {
        let user = { id: 1, name: "John Doe" };
        console.log("User Data Fetched");
        callback(user);  // Call the callback with the user data
    }, 1000);
}

function getUserPosts(user, callback) {
    setTimeout(() => {
        let posts = [`Post 1 by ${user.name}`, `Post 2 by ${user.name}`];
        console.log("User Posts Fetched");
        callback(posts);  // Call the callback with posts data
    }, 1000);
}

// Function calls
getUserData((user) => {
    console.log("User:", user);

    // Fetch posts after getting the user
    getUserPosts(user, (posts) => {
        console.log("Posts:", posts);
    });
});


/* 

Explaination : Callback function is a function that is passed as an argument to another function.
Now flow of code :
getUserData is called with a callback arrow function with user as parameter and user is console logged and getPosts is called with user as parameter and returns console.log posts
getUserData is called with callback, it fetch user data and pass it to callback function (down) and console.log user

after that  getUserPosts is called and it gives callback posts and it returns down and console.log posts


*/


//Using promises
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let user = { id: 1, name: "John Doe" };
            console.log("User Data Fetched");
            resolve(user);  // Resolving Promise
        }, 1000);
    });
}

function getUserPosts(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let posts = [`Post 1 by ${user.name}`, `Post 2 by ${user.name}`];
            console.log("User Posts Fetched");
            resolve(posts);  // Resolving Promise
        }, 1000);
    });
}

// Using Promises
getUserData()
    .then((user) => {
        console.log("User:", user);
        return getUserPosts(user);
    })
    .then((posts) => {
        console.log("Posts:", posts);
    });


    /* 
    
    
    
    
    
    */


    //async-await

    async function fetchUserAndPosts() {
        let user = await getUserData();
        console.log("User:", user);
    
        let posts = await getUserPosts(user);
        console.log("Posts:", posts);
    }
    
    fetchUserAndPosts();
    