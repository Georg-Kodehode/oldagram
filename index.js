const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const container = document.querySelector("main");
let postNumber = 1;
// currentUserClickedPosts checks if the current user has already liked the post
let currentUserClickedPosts = [];// false, false, false


// Puts a post in the <main> tag for each object in the posts array
for (let i=0; i<posts.length; i++){
    container.innerHTML += `<section>
                                <div class="user-info-wrapper">
                                    <div class="user-info">
                                        <img src=${posts[i].avatar} alt="Profile picture of ${posts[i].name}" class="round-img">
                                        <div class="name-and-location-wrapper">
                                            <h4 class="name">${posts[i].name}</h4>
                                            <p class="location">${posts[i].location}</p>
                                        </div>
                                    </div>
                                </div>
                                <img src=${posts[i].post} alt="Selfie of ${posts[i].name}" class="post-img">
                                <div class="post-body">
                                    <div class="icon-wrapper">
                                        <img src="images/icon-heart.png" alt="heart-icon" class="icon" id="like-icon${postNumber}" onclick="incrementLikes(${postNumber})">
                                        <img src="images/icon-comment.png" alt="comment-icon" class="icon">
                                        <img src="images/icon-dm.png" alt="dm-icon" class="icon">
                                    </div>
                                    <p class="like-count"><span id="like-count${postNumber}">${posts[i].likes}</span> likes</p>
                                    <p class="post-text">${posts[i].username}<span> ${posts[i].comment}</span></p>
                                </div>
                            </section>`
    postNumber += 1;
    currentUserClickedPosts.push(false);
}

// Increments the number of likes for the post that user clicked liked on
// TODO: Can also add functionality to make the current user able to remove their like as well
function incrementLikes(postNumber){
    let numLikes = 0;
    let likes = document.getElementById("like-count" + postNumber).textContent;
    if (!currentUserClickedPosts[postNumber-1]){
        numLikes = parseInt(likes);
        numLikes += 1;
        likes = parseInt(likes) + 1;
        document.getElementById("like-count" + postNumber).textContent = String(numLikes);
        document.getElementById("like-icon" + postNumber).src = "images/icon-heart-red.png";
        currentUserClickedPosts[postNumber-1] = true;
    }
}

