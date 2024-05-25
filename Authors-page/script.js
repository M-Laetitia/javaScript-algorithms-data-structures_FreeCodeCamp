const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// add 8 authors at a time, and have a button to add 8 more until there's no more data to display
let startingIndex  = 0;
let endingIndex = 8;
let authorDataArr = [];

// make a GET request with the fetch() method
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
// Chain the .then() method to your fetch call
    // .then((res)=>console.log(res))
// To make the data usable, you can use the .json() method on the Response object to parse it into JSON. 
    .then((res) => res.json())
    //  to start working with the data,  use another .then() method.
    .then((data) => {
        authorDataArr = data; //  assign the author data to the empty authorDataArr array
        console.log("Author Data Array:", authorDataArr)
    })
    // use catch() to handle errors  in case the Promise gets rejected.
    .catch((err) => {
        console.error(`There was an error: ${err}`);
    }); // terminate the code with a semicolon. You couldn't do that in the previous steps because you'll signal to JavaScript to stop parsing your code, which will affect the fetch() syntax.


// function to populate the UI with the author data.
const displayAuthors =(authors)=>{
    // For the first parameter of the callback, destructure the author, image, url, and bio items. For the second parameter, pass in index. This will represent the position of each author, and will be useful for pagination later.
    authors.forEach(({ author, image, url, bio }, index)=>{
        //  start building the HTML for the page with your destructured data. 
        authorContainer.innerHTML += `
        <div id="${index}" class="user-card">
            <h2 class="author-name">${author}</h2>
        </div>
        `;
    });
}
