const RevealCard = ({ 
  image, 
  title = "View Project", 
  imageClass = "w-full h-full",
  startPositionClass = "translate-y-full",
  endPositionClass = "group-hover:translate-y-0",
}) => {
  const imgSrc = image?.src || image;

  return (
    <div className="w-full h-full bg-[#F0F2F6] rounded-2xl overflow-hidden relative group">

      {/* INITIAL CONTENT */}
      <div className="absolute inset-0"></div>

      {/* IMAGE CONTAINER */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          ${startPositionClass} ${endPositionClass}
          transition-transform duration-375 ease-in-out
          z-10 px-8 py-8
          pointer-events-none
        `}
      >
        <img 
          src={imgSrc} 
          alt={title} 
          className={`${imageClass} object-contain drop-shadow-xl`} 
        />
      </div>

    </div>
  );
};

export default RevealCard;
