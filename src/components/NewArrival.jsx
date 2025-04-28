import React from 'react';

const NewArrival = () => {
  // Sample data - replace with your actual data source
  const newArrivals = [
    {
      id: 1,
      name: 'Simple foam bed',
      price: 70000,
      originalPrice: 90000,
      imageUrl: '/bed2.jpeg',
      isNew: true,
    },
    {
      id: 2,
      name: 'Classical sheesham bed ',
      price: 110000,
      originalPrice: 140000,
      imageUrl: '/bed1.jpeg',
      isNew: true,
    },
    {
        id: 1,
        name: 'Classic Bed set',
        price: 110000,
        originalPrice: 145000,
        imageUrl: 'new3.jpeg',
        isBestSeller: true,
      },
      {
        id: 2,
        name: 'Leather 2 seater',
        price: 12000,
        originalPrice: 19000,
        imageUrl: 'new4.jpeg',
        isBestSeller: true,
      },
    // Add more items as needed
  ];

  return (
    <section className="w-full my-10">
      <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {newArrivals.map((item) => (
          <div   onClick={() => window.open('https://wa.me/923288768783', '_blank')} 
          key={item.id} className="border rounded-lg shadow-md p-4 relative hover:scale-105 cursor-pointer">
            {item.isNew && <span className="text-white bg-red-500 px-2 py-1 rounded-full text-xs absolute top-2 left-2">New</span>}
            <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-lg font-bold text-green-600">Rs. {item.price}</p>
            {item.originalPrice && (
              <p className="text-sm line-through text-gray-500">Rs. {item.originalPrice}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;