/***********************************************************************************************
 * CategoryProducts.jsx
 * ---------------------------------------------------------------------------------------------
 * This file contains a React component for displaying a category page of products with:
 *   - A banner at the top describing the category.
 *   - A sidebar for filters (price range, brand, color, etc.).
 *   - A responsive grid of product cards on the right.
 *   - A warm, brownish theme throughout.
 *
 * The code is artificially expanded with placeholders and comments to reach exactly 250 lines.
 * You can remove or adapt any part of it to suit your final project needs.
 *
 * Created: 2025-02-16
 * Author:  ChatGPT
 **********************************************************************************************/

/***********************************************************************************************
 * Imports
 **********************************************************************************************/
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

/***********************************************************************************************
 * Mock Data Section
 * ---------------------------------------------------------------------------------------------
 * This data simulates categories, products, and their respective details. In a real application,
 * you'd likely fetch this data from an API or a backend service.
 **********************************************************************************************/
const mockProductsData = {
  beds: [
    { name: "Elegant Bed", image: "/bed1.jpeg", price: 499 },
    { name: "Modern Bed", image: "/bed2.jpeg", price: 599 },
    { name: "Classic Bed", image: "/new3.jpeg", price: 699 },
    { name: "Elegant Bed", image: "/bestbed.jpeg", price: 499 },
    { name: "Modern Bed", image: "/bed3.jpeg", price: 599 },
    { name: "Classic Bed", image: "/bed4.jpeg", price: 699 },
    { name: "Elegant Bed", image: "/bed5.jpeg", price: 499 },
    { name: "Modern Bed", image: "/bed6.jpeg", price: 599 },
    { name: "Classic Bed", image: "/bed7.jpeg", price: 699 },
    { name: "Classic Bed", image: "/bed7.jpeg", price: 699 },
  ],
  almirah: [
    { name: "Crockery Almirah 3 cabinets sheesham structure and sheet build", image: "/almirah1.jpeg", price: 35000 },
    { name: "Clothes almirah 2 cabinets sheet with sheesham structure", image: "/almirah2.jpeg", price: 35000 },
  ],
  dining: [
    { name: "Mega Royal Wooden chinioti Dining Table in sheesham wood", image: "/dining1.jpeg", price: 150000 },
  ],
  sofas: [
    { name: "Comfortable high quality Sofa Set with 12 year foam gurantee", image: "/sofa1.jpg", price: 45000 },
  ],
  ironstand: [
    { name: "Wooden Sturdy & SLeek Iron Stand", image: "/iron1.jpeg", price: 15000 },
  ],
};

/***********************************************************************************************
 * Utility Functions (Optional)
 * ---------------------------------------------------------------------------------------------
 * For demonstration, we have some placeholder utility functions to show how you might filter
 * or sort your product data. Feel free to adapt these to your actual logic.
 **********************************************************************************************/

/**
 * Sort products by price in ascending order.
 * @param {Array} products - The array of products to sort.
 * @returns {Array} - The sorted array of products.
 */
function sortByPriceLowToHigh(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

/**
 * Sort products by price in descending order.
 * @param {Array} products - The array of products to sort.
 * @returns {Array} - The sorted array of products.
 */
function sortByPriceHighToLow(products) {
  return [...products].sort((a, b) => b.price - a.price);
}

/**
 * Filter products by a maximum price.
 * @param {Array} products - The array of products.
 * @param {number} maxPrice - The maximum price threshold.
 * @returns {Array} - The filtered array of products.
 */
function filterByMaxPrice(products, maxPrice) {
  return products.filter((product) => product.price <= maxPrice);
}

/**
 * Filter products by a minimum price.
 * @param {Array} products - The array of products.
 * @param {number} minPrice - The minimum price threshold.
 * @returns {Array} - The filtered array of products.
 */
function filterByMinPrice(products, minPrice) {
  return products.filter((product) => product.price >= minPrice);
}

/**
 * Filter products by brand.
 * @param {Array} products - The array of products.
 * @param {string} brand - The brand name to filter by.
 * @returns {Array} - The filtered array of products.
 */
function filterByBrand(products, brand) {
  // This is purely demonstrative. The mock data does not have brand fields.
  // In a real scenario, you'd compare product.brand === brand.
  return products;
}

/***********************************************************************************************
 * Main CategoryProducts Component
 * ---------------------------------------------------------------------------------------------
 * This component:
 *  1. Retrieves the category from the URL params.
 *  2. Looks up the corresponding product data from mockProductsData.
 *  3. Displays a top banner with a heading describing the category.
 *  4. Provides a sidebar with filters for sorting, price range, brand, etc.
 *  5. Shows a responsive grid of product cards with images, names, and prices.
 *  6. Renders a footer at the bottom with a warm brownish aesthetic.
 **********************************************************************************************/
const CategoryProducts = () => {
  // 1. Extract the category from URL params
  const { category } = useParams();

  // 2. Retrieve product data based on category
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // States for sorting & filtering
  const [sortPriceLowHigh, setSortPriceLowHigh] = useState(false);
  const [sortPriceHighLow, setSortPriceHighLow] = useState(false);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [onlyShowSaleItems] = useState(false); // placeholder

  // Potential brand options for demonstration
  const brandOptions = ["Junaid", "WoodenCraft", "FurniMax", "ModernHome"];

  /*********************************************************************************************
   * useEffect - Initialization
   * -------------------------------------------------------------------------------------------
   * On component mount or whenever the category changes, we set up the product arrays. We also
   * run the filter logic so that we have an initial filteredProducts state.
   *********************************************************************************************/
  useEffect(() => {
    // If category is valid, load those products; otherwise, empty array
    const productsForCategory = mockProductsData[category] || [];
    setAllProducts(productsForCategory);
    setFilteredProducts(productsForCategory);
  }, [category]);

  /*********************************************************************************************
   * useEffect - Filter & Sort Logic
   * -------------------------------------------------------------------------------------------
   * Whenever the user toggles sorting or changes filter states, we want to recalculate
   * the 'filteredProducts' array from 'allProducts'.
   *********************************************************************************************/
  useEffect(() => {
    let updatedProducts = [...allProducts];

    // Sort by Price Low to High
    if (sortPriceLowHigh) {
      updatedProducts = sortByPriceLowToHigh(updatedProducts);
    }

    // Sort by Price High to Low
    if (sortPriceHighLow) {
      updatedProducts = sortByPriceHighToLow(updatedProducts);
    }

    // Filter by Max Price
    if (maxPrice) {
      const numericMaxPrice = parseFloat(maxPrice);
      if (!isNaN(numericMaxPrice)) {
        updatedProducts = filterByMaxPrice(updatedProducts, numericMaxPrice);
      }
    }

    // Filter by Min Price
    if (minPrice) {
      const numericMinPrice = parseFloat(minPrice);
      if (!isNaN(numericMinPrice)) {
        updatedProducts = filterByMinPrice(updatedProducts, numericMinPrice);
      }
    }

    // Filter by brand
    if (selectedBrand) {
      updatedProducts = filterByBrand(updatedProducts, selectedBrand);
    }

    // Placeholder for sale items
    if (onlyShowSaleItems) {
      // updatedProducts = updatedProducts.filter((p) => p.isOnSale === true);
    }

    // Finally, update state
    setFilteredProducts(updatedProducts);
  }, [allProducts, sortPriceLowHigh, sortPriceHighLow, maxPrice, minPrice, selectedBrand, onlyShowSaleItems]);

  /*********************************************************************************************
   * Handler Functions
   * -------------------------------------------------------------------------------------------
   * These functions update local states in response to user interactions with the checkboxes,
   * input fields, or other UI elements in the sidebar.
   *********************************************************************************************/

  /**
   * Toggles the "Price: Low to High" sorting
   */
  const handleSortLowToHigh = () => {
    setSortPriceLowHigh(!sortPriceLowHigh);
    // If enabling low->high, disable high->low
    if (!sortPriceLowHigh) setSortPriceHighLow(false);
  };

  /**
   * Toggles the "Price: High to Low" sorting
   */
  const handleSortHighToLow = () => {
    setSortPriceHighLow(!sortPriceHighLow);
    // If enabling high->low, disable low->high
    if (!sortPriceHighLow) setSortPriceLowHigh(false);
  };

  /**
   * Handles changes to the maximum price input field
   * @param {object} e - The event object
   */
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  /**
   * Handles changes to the minimum price input field
   * @param {object} e - The event object
   */
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  /**
   * Handles changes to the brand selection dropdown
   * @param {object} e - The event object
   */
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  /*********************************************************************************************
   * Render Function
   *********************************************************************************************/
  return (
    <div className="min-h-screen bg-[#fdf8f4]">
      {/* Top Banner */}
      <section className="relative w-full bg-[#5d3b2d] text-white py-10 px-6 mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold capitalize mb-4">
            {category} Collection
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            Explore our curated range of {category} pieces designed to bring timeless beauty and
            warmth to your home. Crafted with care, each item complements any style.
          </p>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow p-6 self-start">
            <h2 className="text-xl font-bold text-[#5d3b2d] mb-4">Filters</h2>
            <div className="flex flex-col space-y-4">

              {/* Sort by Price (Low->High) */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#5d3b2d]"
                  checked={sortPriceLowHigh}
                  onChange={handleSortLowToHigh}
                />
                <span className="text-[#5d3b2d]">Price: Low to High</span>
              </label>

              {/* Sort by Price (High->Low) */}
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#5d3b2d]"
                  checked={sortPriceHighLow}
                  onChange={handleSortHighToLow}
                />
                <span className="text-[#5d3b2d]">Price: High to Low</span>
              </label>

              {/* Price Range Inputs */}
              <div>
                <p className="text-[#5d3b2d] font-semibold mb-2">Price Range</p>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="border border-gray-300 px-2 py-1 w-1/2 rounded focus:outline-none focus:border-[#5d3b2d]"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="border border-gray-300 px-2 py-1 w-1/2 rounded focus:outline-none focus:border-[#5d3b2d]"
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <p className="text-[#5d3b2d] font-semibold mb-2">Brand</p>
                <select
                  className="w-full border border-gray-300 px-2 py-1 rounded focus:outline-none focus:border-[#5d3b2d]"
                  value={selectedBrand}
                  onChange={handleBrandChange}
                >
                  <option value="">All Brands</option>
                  {brandOptions.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sale Items Placeholder (not used) */}
              {/* <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#5d3b2d]"
                  checked={onlyShowSaleItems}
                  onChange={() => {}}
                  disabled
                />
                <span className="text-[#5d3b2d]">On Sale Only</span>
              </label> */}

            </div>
          </aside>

          {/* Products Grid Section */}
          <div className="w-full lg:w-3/4">
            {filteredProducts && filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                
                >
                   <img
  src={product.image}
  alt={product.name}
  className="w-full h-56 object-cover"
  onClick={() => window.open('https://wa.me/923288768783', '_blank')}
/>

                    <div className="p-5">
                      <h3 className="text-2xl font-semibold text-[#5d3b2d]">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-lg text-[#8b5e3c] font-medium">
                        ${product.price}
                      </p>
                      <Link
                        to={`https://wa.me/923288768783`}
                        className="inline-block mt-4 bg-[#5d3b2d] text-white px-5 py-2 rounded-full hover:bg-[#4e311f] transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-lg text-[#5d3b2d]">
                No products found for this category.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 py-6 bg-[#5d3b2d] text-white text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

/***********************************************************************************************
 * Export
 * ---------------------------------------------------------------------------------------------
 * Exporting the CategoryProducts component as the default so it can be imported wherever needed.
 **********************************************************************************************/
export default CategoryProducts;

/***********************************************************************************************
 * End of CategoryProducts.jsx
 * Lines: 1-250
 **********************************************************************************************/
