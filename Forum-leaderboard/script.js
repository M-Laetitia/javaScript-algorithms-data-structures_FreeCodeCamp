const forumLatest = "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://sea1.discourse-cdn.com/freecodecamp";

const postsContainer = document.getElementById("posts-container");

// create a category object which holds all of the forum categories and classNames for the styling.
const allCategories = {
    299: { category: "Career Advice", className: "career" },
    409: { category: "Project Feedback", className: "feedback" },
    417: { category: "freeCodeCamp Support", className: "support" },
    421: { category: "JavaScript", className: "javascript" },
    423: { category: "HTML - CSS", className: "html-css" },
    424: { category: "Python", className: "python" },
    432: { category: "You Can Do This!", className: "motivation" },
    560: { category: "Backend Development", className: "backend" },
};

// create a function to retrieve the category name from the allCategories object.
const forumCategory = (id) => {
    //  store the category name and class name for each category
    let selectedCategory = {};
    if (allCategories.hasOwnProperty(id)) {
        const { className, category } = allCategories[id];
        selectedCategory.className = className;
        selectedCategory.category = category;
    } else {
        selectedCategory.className = "general";
        selectedCategory.category = "General";
        selectedCategory.id = 1;
    }
    // Every category will have a URL that points to the category on the freeCodeCamp forum.
    const url = `${forumCategoryUrl}${selectedCategory.className}/${id}`;
    const linkText = selectedCategory.category;
    const linkClass = `category ${selectedCategory.className}`;
    return `<a href="${url}" class="${linkClass}" target="_blank" >${linkText}</a>`;
};

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

// Each forum post will include a list of user avatar images which represent all of the users participating in the conversation for that topic.
const avatars = (posters, users) => {
    // loop through the posters array to get all of their avatars.
    return posters.map((poster) => {
        //  find the correct user in the users array
        const user = users.find((user)=> user.id === poster.user_id);
        // check if the user exists
        if (user) {
            // customize the avatar's size / assign it the result of using the replace method on user.avatar_template.
            const avatar = user.avatar_template.replace(/{size}/, 30);
            // construct the userAvatarUrl
            const userAvatarUrl = avatar.startsWith("/user_avatar/")  ? avatarUrl.concat(avatar) : avatar;
            // return the image for the user avatar.
            return `<img src="${userAvatarUrl}" alt="${user.name}">`
        }
    }).join("");
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
            ${forumCategory(category_id)}
        </td>
        <div class="avatar-container">
            ${avatars(posters,users)}
        </div>
        <td>${posts_count - 1}</td>
        <td>${viewCount(views)}</td>
        <td>
            ${timeAgo(bumped_at)}
        </td>
        </tr>`;

    }).join("")
   
};




