let post = { // ... }; 

// ...when post is clicked on
postList.addEventListener('click', (event) => {
  // ...
  post.isRead = true;
});


// ...rendering list of posts
for(let post of postArray){
  if (!post.isRead) {
    _addNewPostClass(post.element);
  }
}

function _addNewPostClass(element) {
  
}