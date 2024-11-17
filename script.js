// Load the latest blog post
fetch('blog/post1.md')
    .then(response => response.text())
    .then(text => {
        document.getElementById('post-content').innerHTML = marked(text);
    })
    .catch(error => {
        console.error('Error loading the post:', error);
        document.getElementById('post-content').innerHTML = '<p>Failed to load post.</p>';
    });
