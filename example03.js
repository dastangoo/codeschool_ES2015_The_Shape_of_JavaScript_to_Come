let recentPosts = new Map();

createPost(newPost, (data) => {
  recentPosts.set(data.author, data.message);
});


socket.on('new post', function (data) {
  recentPosts.set(data.author, data.message);
});


const POST_PER_PAGE = 15;

let userSettings = {
  perPage: POST_PER_PAGE,
  showRead: true
};