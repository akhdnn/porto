// src/scripts/main.js

// Ambil semua elemen yang kita butuhkan
const projectCards = document.querySelectorAll('.project-card');
const spotlightOverlay = document.getElementById('spotlight-overlay');
const spotlightTitle = document.getElementById('spotlight-title');
const spotlightTagline = document.getElementById('spotlight-tagline');

projectCards.forEach(card => {
    // Event saat mouse masuk ke area kartu
    card.addEventListener('mouseenter', () => {
        // 1. Ambil judul & tagline dari data-attributes kartu
        const title = card.dataset.title;
        const tagline = card.dataset.tagline;

        // 2. Masukkan teks ke dalam elemen di overlay
        spotlightTitle.textContent = title;
        spotlightTagline.textContent = tagline;

        // 3. Tampilkan overlay dengan transisi
        spotlightOverlay.classList.remove('opacity-0');
        
        // 4. Jadikan kartu ini 'aktif' agar posisinya di atas overlay
        card.classList.add('is-active');
    });

    // Event saat mouse keluar dari area kartu
    card.addEventListener('mouseleave', () => {
        // 1. Sembunyikan lagi overlay
        spotlightOverlay.classList.add('opacity-0');

        // 2. Kembalikan kartu ke posisi normal
        card.classList.remove('is-active');
    });
});