let readPosts = new WeakSet();

// ...when post is clicked on
postList.addEventListener('click', (event) => {
  // ...
  readPosts.add(post);
});

for(let post of postArray){
  if (!readPosts.has(post)) {
    _addNewPostClass(post.element);    
  }
}

function _addNewPostClass(element) {
  
}

