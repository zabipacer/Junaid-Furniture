// beds.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const bedsData = [
  {
    id: 1,
    name: "Modern Bed",
    price: "$499",
    image: "https://via.placeholder.com/300x200?text=Bed+1",
    description: "Experience modern luxury and comfort with clean lines and sleek design."
  },
  {
    id: 2,
    name: "Classic Bed",
    price: "$399",
    image: "https://via.placeholder.com/300x200?text=Bed+2",
    description: "Timeless elegance meets functionality in our classic design."
  },
  {
    id: 3,
    name: "Luxury Bed",
    price: "$699",
    image: "https://via.placeholder.com/300x200?text=Bed+3",
    description: "Indulge in opulence and superior comfort with this luxurious masterpiece."
  },
  {
    id: 4,
    name: "King Size Bed",
    price: "$799",
    image: "https://via.placeholder.com/300x200?text=Bed+4",
    description: "Spacious and majestic, perfect for a regal night's sleep."
  },
  {
    id: 5,
    name: "Queen Bed",
    price: "$599",
    image: "https://via.placeholder.com/300x200?text=Bed+5",
    description: "A perfect blend of comfort and style for your bedroom sanctuary."
  },
  {
    id: 6,
    name: "Bunk Bed",
    price: "$299",
    image: "https://via.placeholder.com/300x200?text=Bed+6",
    description: "Fun and functional bunk bed ideal for kids or multi-use spaces."
  },
  {
    id: 7,
    name: "Single Bed",
    price: "$199",
    image: "https://via.placeholder.com/300x200?text=Bed+7",
    description: "Compact design that doesn’t compromise on comfort."
  },
  {
    id: 8,
    name: "Double Bed",
    price: "$349",
    image: "https://via.placeholder.com/300x200?text=Bed+8",
    description: "Cozy double bed perfect for small spaces and serene nights."
  },
  {
    id: 9,
    name: "Storage Bed",
    price: "$449",
    image: "https://via.placeholder.com/300x200?text=Bed+9",
    description: "Innovative design with hidden storage to keep your space clutter-free."
  },
  {
    id: 10,
    name: "Foldable Bed",
    price: "$249",
    image: "https://via.placeholder.com/300x200?text=Bed+10",
    description: "Space-saving foldable bed that's perfect for versatile living."
  },
  {
    id: 11,
    name: "Loft Bed",
    price: "$399",
    image: "https://via.placeholder.com/300x200?text=Bed+11",
    description: "Elevate your room with a stylish loft bed design."
  },
  {
    id: 12,
    name: "Adjustable Bed",
    price: "$899",
    image: "https://via.placeholder.com/300x200?text=Bed+12",
    description: "Customize your comfort with our innovative adjustable bed."
  },
  {
    id: 13,
    name: "Eco-friendly Bed",
    price: "$549",
    image: "https://via.placeholder.com/300x200?text=Bed+13",
    description: "Sustainable style and comfort combined for the eco-conscious sleeper."
  }
];

const Beds = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Sleep in Style: Explore Our Premium Beds Collection
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Discover unparalleled comfort and craftsmanship designed to elevate your sleep experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bedsData.map((bed) => (
          <div
            key={bed.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={bed.image}
              alt={bed.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{bed.name}</h2>
              <p className="text-gray-600 mt-1 font-medium">{bed.price}</p>
              <p className="text-gray-500 mt-2 text-sm">{bed.description}</p>
              <a
                href={`https://wa.me/923288768783?text=Hi, I'm interested in the ${encodeURIComponent(bed.name)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 animate-pulse">
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beds;
