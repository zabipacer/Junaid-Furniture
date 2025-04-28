import React from 'react';

const BestSeller = () => {
  // Sample data - replace with your actual data source
  const bestSellers = [
    {
      id: 1,
      name: 'Classic Bed set sheesham design',
      price: 110000,
      originalPrice: 195000,
      imageUrl: 'bestbed.jpeg',
      isBestSeller: true,
    },
    {
      id: 2,
      name: 'classic bed set design (sheesham + sheet)',
      price: 110000,
      originalPrice: 155000,
      imageUrl: 'bestbed2.jpeg',
      isBestSeller: true,
    },
    // Add more items as needed
  ];

  return (
    <section className="w-full my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {bestSellers.map((item) => (
          <div onClick={() => window.open('https://wa.me/923288768783', '_blank')} key={item.id} className="border rounded-lg shadow-md cursor-pointer p-4 relative hover:scale-105">
            {item.isBestSeller && <span className="text-white bg-yellow-500 px-2  py-1 rounded-full text-xs absolute top-2 left-2">Best Seller</span>}
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

export default BestSeller;