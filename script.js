document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
    const output = document.getElementById('markdown-output');
    const categoryLinks = document.querySelectorAll('nav ul li a');

    // List of posts with category
    const posts = [
        { title: 'First Tech Post', path: 'posts/tech/post1.md', category: 'tech' },
        { title: 'First Life Post', path: 'posts/life/post1.md', category: 'life' },
        // Add more posts as needed
    ];

    // Function to display posts based on category
    function displayPosts(category) {
        postList.innerHTML = '';
        const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
        filteredPosts.forEach(post => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = post.title;
            a.href = '#';
            a.addEventListener('click', () => {
                fetch(post.path)
                    .then(response => response.text())
                    .then(markdownText => {
                        output.innerHTML = marked(markdownText);
                    })
                    .catch(error => console.error('Error fetching the markdown file:', error));
            });
            li.appendChild(a);
            postList.appendChild(li);
        });

        // Load the first post by default if available
        if (filteredPosts.length > 0) {
            fetch(filteredPosts[0].path)
                .then(response => response.text())
                .then(markdownText => {
                    output.innerHTML = marked(markdownText);
                })
                .catch(error => console.error('Error fetching the markdown file:', error));
        }
    }

    // Add event listeners to category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            displayPosts(category);
        });
    });

    // Load all posts by default
    displayPosts('all');
});
