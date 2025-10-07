// src/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active classes from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('text-gray-900', 'bg-gray-200/50');
                    link.classList.add('text-gray-500');
                });

                // Get the corresponding nav link
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-link[data-navlink="${id}"]`);

                // Add active classes to the current nav link
                if (activeLink) {
                    activeLink.classList.add('text-gray-900', 'bg-gray-200/50');
                    activeLink.classList.remove('text-gray-500');
                }
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});