document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const output = document.getElementById('markdown-output');

    // List of markdown files with paths
    const posts = [
        { title: 'Post 1', path: 'blog/post1.md' },
        { title: 'My Second Post', path: 'blog/post2.md' },
        // Add more posts here
    ];

    // Create list items for each post
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            fetch(post.path)
                .then(response => response.text())
                .then(markdownText => {
                    output.innerHTML = marked(markdownText);
                })
                .catch(error => console.error('Error fetching the markdown file:', error));
        });
        postList.appendChild(li);
    });

    // Load the first post by default
    if (posts.length > 0) {
        fetch(posts[0].path)
            .then(response => response.text())
            .then(markdownText => {
                output.innerHTML = marked(markdownText);
            })
            .catch(error => console.error('Error fetching the markdown file:', error));
    }
});
