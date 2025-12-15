import { useEffect } from 'react';

export default function VideoManager() {
  useEffect(() => {
    // Fungsi untuk inisialisasi hover
    const initHover = () => {
      const projectCards = document.querySelectorAll('.group');

      projectCards.forEach((card) => {
        const video = card.querySelector('.project-video');

        if (video) {
          // Pastikan video pause di awal
          video.pause();

          // Event: Mouse Masuk -> Play
          const handleMouseEnter = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log("Autoplay dicegah browser:", error);
              });
            }
          };

          // Event: Mouse Keluar -> Pause
          const handleMouseLeave = () => {
            video.pause();
            // video.currentTime = 0; // Aktifkan jika ingin reset video ke awal
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);

          // Cleanup listener saat komponen di-unmount (untuk performa/pindah halaman)
          return () => {
            card.removeEventListener('mouseenter', handleMouseEnter);
            card.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      });
    };

    // Jalankan inisialisasi
    initHover();

  }, []); // Array kosong [] artinya dijalankan sekali saat komponen dimuat

  return null; // Komponen ini tidak merender elemen HTML apa pun
}