document.addEventListener('DOMContentLoaded', () => {
        const navbar = document.querySelector('.navbar');
    
        // Example: Change background color on scroll
        window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                        navbar.style.background = 'black';
                } else {
                        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
                }
        });
});
    