import React from 'react';

const SideBySideImages = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full h-auto bg-gray-100 p-4 gap-4">
      {/* Left Image with Hover Effect */}
      <div   onClick={() => window.open('https://wa.me/923288768783', '_blank')} className="relative w-full lg:w-[48%] overflow-hidden group cursor-pointer">
        <img 
          src="/SoFas.png" 
          alt="Sofas" 
          className="w-full h-auto object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay and Button on Hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
        <button className="absolute inset-x-0 bottom-8 mx-auto px-6 py-3 bg-[#b08d57] text-white font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Buy Now
        </button>
      </div>

      {/* Right Image with Hover Effect */}
      <div   onClick={() => window.open('https://wa.me/923288768783', '_blank')} className="relative w-full lg:w-[48%] overflow-hidden group cursor-pointer">
        <img 
          src="/Chinioti.png" 
          alt="Chinioti" 
          className="w-full h-auto object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay and Button on Hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-md"></div>
        <button className="absolute inset-x-0 bottom-8 mx-auto px-6 py-3 bg-[#b08d57] text-white font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default SideBySideImages;
