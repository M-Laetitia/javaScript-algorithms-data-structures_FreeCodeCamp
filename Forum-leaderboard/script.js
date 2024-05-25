const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

//  request the data from an API >  asynchronous operation, which means that tasks execute independently of the main program flow.
const fetchData = async () => {
  // use a try...catch statement instead. to handle errors
  const fetchData = async () => { 
    try {
        // await keyword to handle the asynchronous nature of the fetch() method. The await keyword waits for a promise to resolve and returns the result.
        const res = await fetch(forumLatest);
        // get the response body as a JSON object. The .json() method of your res variable returns a promise, which means you will need to await it.
        const data = await res.json();
        console.log(data);
        showLatestPosts(data);
    
    } catch (err) {
      console.log(err);
    }
  }
}
fetchData();

// display the data on the page
const showLatestPosts = (data) => {
    //  use destructuring to get the topic_list and users properties from the data object.
    const {topic_list, users } = data;
    const {topics} = topic_list;

    // populating the data inside the postsContainer.
    postsContainer.innerHTML = topics.map((item)=>{
        // destructure  properties from the item object:
        const {
            id,
            title,
            views,
            posts_count,
            slug,
            posters,
            category_id,
            bumped_at,
          } = item; 
        
        return `
        <tr>
        <td>
            <p class="post-title">${title}</p>
        </td>
        <td></td>
        <td>${posts_count - 1}</td>
        <td>${views}</td>
        <td></td>
        </tr>`;
        
    }).join("")
   
};