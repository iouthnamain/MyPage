window.addEventListener('DOMContentLoaded', (event) => {
    // Add reveal animation for each header letter
    document.querySelectorAll('.reveal').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});
