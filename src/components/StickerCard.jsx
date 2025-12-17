const StickerCard = ({
  mainImage,
  stickers = []
}) => {
  const mainSrc = mainImage?.src || mainImage;

  const stickerConfigs = [
    {
      stack: { top: '42%', left: '38%', rot: '-12deg' },
      dest: { top: '-30%', left: '-30%', rot: '-25deg' }
    },
    {
      stack: { top: '38%', left: '50%', rot: '4deg' },
      dest: { top: '-35%', left: '50%', rot: '10deg' }
    },
    {
      stack: { top: '42%', left: '62%', rot: '10deg' },
      dest: { top: '40%', left: '130%', rot: '25deg' }
    },
    {
      stack: { top: '55%', left: '42%', rot: '-6deg' },
      dest: { top: '130%', left: '-25%', rot: '-15deg' }
    },
    {
      stack: { top: '55%', left: '55%', rot: '6deg' },
      dest: { top: '135%', left: '55%', rot: '15deg' }
    },
  ];

  return (
    <div className="group w-full h-full bg-[#F0F2F6] rounded-2xl overflow-hidden relative">

      <style>{`
        @keyframes mainSeq {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          35% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          65% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          85% {
            transform: translate(-50%, -50%) scale(1.12);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes stickerSeq {
          0% {
            top: -220px;
            left: 50%;
            transform: translate(-50%, -200%);
          }
          35% {
            top: var(--stack-top);
            left: var(--stack-left);
            transform: translate(-50%, -50%) rotate(var(--stack-rot));
          }
          65% {
            top: var(--stack-top);
            left: var(--stack-left);
            transform: translate(-50%, -50%) rotate(var(--stack-rot));
          }
          100% {
            top: var(--dest-top);
            left: var(--dest-left);
            transform: translate(-50%, -50%) rotate(var(--dest-rot));
          }
        }

        .main {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 80%;
          max-width: 480px;
          transform: translate(-50%, -50%) scale(1);
          will-change: transform;
          z-index: 10;
        }

        .sticker {
          top: -220px;
          left: 50%;
          transform: translate(-50%, -200%);
          pointer-events: none;
          will-change: transform, top, left;
        }

        /* HOVER TRIGGER TANPA CURSOR */
        .group:hover .main {
          animation: mainSeq 1.6s cubic-bezier(0.2,0.8,0.2,1);
        }

        .group:hover .sticker {
          animation: stickerSeq 1.4s cubic-bezier(0.34,1.56,0.64,1);
        }
      `}</style>

      {/* GAMBAR UTAMA */}
      <img
        src={mainSrc}
        alt="main"
        className="main object-contain"
      />

      {/* STICKER */}
      {stickers.map((sticker, index) => {
        const conf = stickerConfigs[index % stickerConfigs.length];
        const delay = index * 0.12;

        return (
          <img
            key={index}
            src={sticker?.src || sticker}
            alt="sticker"
            style={{
              '--stack-top': conf.stack.top,
              '--stack-left': conf.stack.left,
              '--stack-rot': conf.stack.rot,
              '--dest-top': conf.dest.top,
              '--dest-left': conf.dest.left,
              '--dest-rot': conf.dest.rot,
              animationDelay: `${delay}s`
            }}
            className="
              sticker
              absolute z-20
              w-28 h-28 md:w-32 md:h-32
              object-contain
              drop-shadow-xl
            "
          />
        );
      })}
    </div>
  );
};

export default StickerCard;
