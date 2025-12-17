const FlameAnimated = ({ size = 150 }) => {
  return (
    <div className="group col-span-1 row-span-1 flex items-center justify-center">

      <svg
        width={size}
        height={(size * 167) / 133}
        viewBox="0 0 133 167"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: "visible" // KUNCI UTAMA
        }}
      >
        <style>{`
          .flame-main,
          .flame-inner {
            transform-origin: 50% 90%;
            transform-box: fill-box; /* KUNCI UTAMA */
            animation-play-state: paused;
          }

          .group:hover .flame-main {
            animation: flamePulse 1.6s ease-in-out infinite;
            animation-play-state: running;
          }

          .group:hover .flame-inner {
            animation: flameInner 1.2s ease-in-out infinite;
            animation-play-state: running;
          }

          @keyframes flamePulse {
            0% {
              transform: scale(1) translateX(0);
            }
            50% {
              transform: scale(1.12) translateX(-3px);
            }
            100% {
              transform: scale(1) translateX(0);
            }
          }

          @keyframes flameInner {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }
        `}</style>

        {/* API UTAMA */}
        <path
          className="flame-main"
          d="M5.02637 135.024C-6.24764 114.538 13.1164 75.697 13.1164 75.697C13.1164 75.697 30.1373 87.7561 41.4315 87.832C51.3569 85.3143 54.5743 78.0082 54.9149 68.9553C55.323 58.1077 45.2319 54.3296 37.3865 47.3819C31.1961 40.7752 27.1062 36.094 26.5998 27.1568C26.0003 16.577 30.5107 12.2838 38.7348 2.88672C38.7348 2.88672 40.4015 7.40247 45.4765 17.7184C50.5516 28.0344 52.2185 32.5502 64.3533 32.5502C76.488 32.5502 80.9672 29.0326 85.9267 19.0668C92.9499 27.7953 96.3319 33.0214 100.758 43.3369C97.0965 52.344 94.017 54.1236 92.6684 63.5619C91.3198 73.0003 95.3653 74.3487 99.4101 77.0453C103.455 79.742 113.888 81.1261 118.287 68.9553C118.287 68.9553 125.379 80.7861 127.725 89.1804C130.989 100.855 132.259 108.496 129.074 120.192C126.155 130.91 121.966 136.48 114.242 144.462C104.885 154.132 97.5144 158.288 84.5783 161.991C68.8772 166.485 58.3744 165.494 42.7798 160.642C25.7666 155.349 13.6171 150.634 5.02637 135.024Z"
          fill="#35B5DA"
          stroke="#071012"
          strokeWidth="3"
        />

        {/* DETAIL DALAM */}
        <path
          className="flame-inner"
          d="M56.7659 123.749C55.3187 126.521 56.1671 129.986 58.7091 131.814C60.1843 132.875 62.0389 133.254 63.7987 132.759C64.6749 132.512 65.4958 132.073 66.2264 131.537C66.5269 131.317 67.9334 129.888 67.9767 129.896C68.1492 129.931 68.6451 130.633 68.8189 130.782C69.1321 131.049 69.4676 131.299 69.8193 131.513C70.4874 131.921 71.2421 132.231 71.9954 132.444C73.3806 132.835 74.7494 132.927 76.0772 132.329C79.5648 130.759 80.5048 127.104 78.761 123.834Z"
          fill="#071012"
        />

        {/* GARIS */}
        <path d="M27.6689 114.076H50.9683" stroke="#071012" strokeWidth="3" />
        <path d="M81.4715 114.076H104.771" stroke="#071012" strokeWidth="3" />
      </svg>

    </div>
  );
};

export default FlameAnimated;
