document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('markdown-input');
    const output = document.getElementById('markdown-output');

    input.addEventListener('input', () => {
        const markdownText = input.value;
        output.innerHTML = marked(markdownText);
    });
});
