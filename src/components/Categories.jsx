import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Reusable component for the circular items
const CircleItem = ({ text, imageSrcArray, to }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageSrcArray.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageSrcArray.length]);

  return (
    <Link to={to} className="flex flex-col items-center group" role="listitem">
      <div className="h-28 w-28 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full bg-gray-100 relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
        {imageSrcArray.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${text} example ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            aria-hidden={index !== currentImageIndex}
          />
        ))}
      </div>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl capitalize font-semibold text-[#5d3b2d] text-center max-w-[90%]">
        {text}
      </p>
    </Link>
  );
};

// Main Categories component
const Categories = () => {
  const items = [
    {
      text: "Beds",
      imageSrcArray: ["/bed1.jpeg", "/bed2.jpeg"],
      to: "/category/beds",
    },
    {
      text: "Almirah",
      imageSrcArray: ["almirah1.jpeg", "almirah2.jpeg"],
      to: "/category/almirah",
    },
    {
      text: "Dining",
      imageSrcArray: ["/dining1.jpeg", "/dining1.jpeg"],
      to: "/category/dining",
    },
    {
      text: "Sofas",
      imageSrcArray: ["/sofa1.jpg", "/sofa2.jpg"],
      to: "/category/sofas",
    },
    {
      text: "Iron Stand",
      imageSrcArray: ["iron1.jpeg", "iron1.jpeg"],
      to: "/category/ironstand",
    },
  ];

  return (
    <section className="w-full p-6 sm:p-10 lg:p-12" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="sr-only">Product Categories</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center gap-8 sm:gap-10">
        {items.map((item, index) => (
          <CircleItem key={`category-${index}`} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
