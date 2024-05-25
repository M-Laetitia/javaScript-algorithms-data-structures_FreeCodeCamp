const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// make a GET request with the fetch() method
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
// Chain the .then() method to your fetch call
    // .then((res)=>console.log(res))
// To make the data usable, you can use the .json() method on the Response object to parse it into JSON. 
    .then((res) => res.json())
    //  to start working with the data,  use another .then() method.
    .then((data) => {
        console.log(data);
    })
    // use catch() to handle errors  in case the Promise gets rejected.
    .catch((err) => {
        console.error(`There was an error: ${err}`);
    }); // terminate the code with a semicolon. You couldn't do that in the previous steps because you'll signal to JavaScript to stop parsing your code, which will affect the fetch() syntax.