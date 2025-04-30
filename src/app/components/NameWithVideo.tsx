import React from 'react';

const NameWithVideo = () => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="https://www.youtube.com/embed/joiyb6c_Ry4?autoplay=1&mute=1&loop=1&playlist=joiyb6c_Ry4" 
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-white"
      >
        Azizova Rayhona.
      </h1>
    </div>
  );
};

export default NameWithVideo;
