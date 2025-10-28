import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

const HeroAnimation = ({ stickers }) => {
  const heroRef = useRef(null);
  const stickersRef = useRef([]);
  const [initialRotations, setInitialRotations] = useState([]);

  useEffect(() => {
    const stickerElements = stickersRef.current;
    
    if (initialRotations.length === 0 && stickerElements.length > 0) {
      const rotations = stickerElements.map(el => {
        const transform = el.style.transform;
        const match = transform.match(/rotate\(([^)]+)\)/);
        return match ? parseFloat(match[1]) : 0;
      });
      setInitialRotations(rotations);
    }

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const progress = Math.min(1, scrollY / 400);

        stickerElements.forEach((sticker, index) => {
            const isLeft = index < Math.floor(stickerElements.length / 2);
            const moveX = isLeft ? -1 : 1;
            const initialRotation = initialRotations[index] || 0;

            gsap.to(sticker, {
                x: progress * 400 * moveX,
                y: progress * -400,
                rotation: initialRotation + (progress * (isLeft ? -45 : 45)),
                duration: 0.8,
                ease: 'power3.out',
                overwrite: 'auto'
            });
        });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialRotations]);

  return (
    <div ref={heroRef} className="relative">
      <h1 className="text-4xl md:text-6xl font-bold tracking-normal text-gray-900 leading-tight">
        I'm helping digital founders create unique, empathic product{' '}
        <span className="relative inline-block whitespace-nowrap">
          experiences.
          
          {stickers.map((sticker, index) => (
            <div
              key={index}
              ref={(el) => (stickersRef.current[index] = el)}
              className="absolute w-28 h-auto"
              style={sticker.style}
            >
              <img src={sticker.src} alt={`Sticker ${index + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </span>
      </h1>
    </div>
  );
};

export default HeroAnimation;