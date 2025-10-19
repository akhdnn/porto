// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        // Ubah nilai threshold dari 0.5 menjadi 0.2
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('text-gray-900', 'bg-gray-200/50');
                    link.classList.add('text-gray-500');
                });

                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[data-navlink="${id}"]`);

                if (activeLink) {
                    activeLink.classList.add('text-gray-900', 'bg-gray-200/50');
                    activeLink.classList.remove('text-gray-500');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});