var db = require('./models');

// create a post ...
db.post.create({
  title: 'What I Like About You',
  content: '404 not found',
  authorId: 1
}).then(function(post) {
  console.log('created post', post.get());

    // create a comment on that post ...
  post.createComment({
    name: 'Paul Allen',
    content: 'This is really neat! Thanks for posting.'
  }).then(function(comment) {
    console.log('created comment', comment.get());
  });
});
