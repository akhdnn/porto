document.addEventListener('DOMContentLoaded', () => {
    // --- Kode untuk Navigasi Header Utama (sudah ada) ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length && navLinks.length) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 
        };

        const observer = new IntersectionObserver((entries) => {
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
    }

    // --- Kode BARU untuk Navigasi Sidebar Artikel ---
    const articleSections = document.querySelectorAll('main section[id]');
    const articleNavLinks = document.querySelectorAll('.article-nav-link');

    if (articleSections.length > 0 && articleNavLinks.length > 0) {
        // Set link pertama sebagai aktif secara default
        articleNavLinks[0].classList.add('text-gray-900', 'font-semibold');
        articleNavLinks[0].classList.remove('text-gray-500');

        const articleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    articleNavLinks.forEach(link => {
                        link.classList.remove('text-gray-900', 'font-semibold');
                        link.classList.add('text-gray-500');

                        if (link.getAttribute('data-navlink') === id) {
                            link.classList.add('text-gray-900', 'font-semibold');
                            link.classList.remove('text-gray-500');
                        }
                    });
                }
            });
        }, { 
            rootMargin: '-30% 0px -70% 0px' // Opsi ini membantu menyorot link saat bagiannya berada di sepertiga atas layar
        });

        articleSections.forEach(section => {
            articleObserver.observe(section);
        });
    }
});