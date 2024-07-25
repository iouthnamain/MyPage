window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.reveal').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}
