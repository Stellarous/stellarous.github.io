document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const output = document.getElementById('markdown-output');

    // List of markdown files
    const posts = ['TEST.md', 'post2.md', 'post3.md']; // Add your post filenames here

    // Create list items for each post
    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.replace('.md', '');
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => {
            fetch(`posts/${post}`)
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
        fetch(`posts/${posts[0]}`)
            .then(response => response.text())
            .then(markdownText => {
                output.innerHTML = marked(markdownText);
            })
            .catch(error => console.error('Error fetching the markdown file:', error));
    }
});
