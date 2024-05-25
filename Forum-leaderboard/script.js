const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

// To display data in the Activity column, you need to use the bumped_at property of each topic, which is a timestamp in the ISO 8601 format. You need to process this data before you can show how much time has passed since a topic had any activity.
const timeAgo = (time) => {
    const currentTime = new Date();
    const lastPost = new Date(time);
    const timeDifference = currentTime - lastPost;
    // store the number of milliseconds in a minute
    const msPerMinute = 1000 * 60;
    // get the number of minutes ago the post was created.
    const minutesAgo = Math.floor(timeDifference / msPerMinute);
    // store the number of hours that have passed since the last post.
    const hoursAgo = Math.floor(minutesAgo / 60);
    //  store the number of days that have passed since the last post. 
    const daysAgo = Math.floor(hoursAgo / 24);

    if(minutesAgo < 60) {
        return `${minutesAgo}m ago`;
    }
    if (hoursAgo  < 24) {
        return `${hoursAgo}h ago`;
    }
    return `${daysAgo}d ago`;
    
};

//  function to convert view counts to a more readable format.  1000 >  1k,  100,000 > 100k.
const viewCount = (views) => {
    // get the number of thousands in the views variable rounded down to the nearest thousand.
    const thousands = Math.floor(views / 1000);
    if(views >= 1000){
        return `${thousands}k`;
    }
    return views;
};

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
        <td>
            ${timeAgo(bumped_at)}
        </td>
        </tr>`;

    }).join("")
   
};



