import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const saleProducts = [
  {
    id: 1,
    name: 'Designer Saree',
    originalPrice: 2999,
    salePrice: 1499,
    image: 'https://via.placeholder.com/400x300?text=Saree',
  },
  {
    id: 2,
    name: 'Men’s Blazer',
    originalPrice: 4999,
    salePrice: 2999,
   image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 3,
    name: 'Sports Shoes',
    originalPrice: 3499,
    salePrice: 1799,
    image: 'https://via.placeholder.com/400x300?text=Shoes',
  },
  {
    id: 4,
    name: 'Luxury Watch',
    originalPrice: 8999,
    salePrice: 5299,
    image: 'https://via.placeholder.com/400x300?text=Watch',
  },
];

const SaleSection = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product) => {
    alert(`🛍️ "${product.name}" added to cart!`);
  };

  return (
    <section className="bg-gradient-to-br from-rose-100 via-white to-amber-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-500 drop-shadow-lg mb-3 animate-fade-in-down">
          🎉 Mega Style Sale
        </h2>
        <p className="text-lg text-gray-600 mb-12">Grab your favorites before the deals disappear!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {saleProducts.map((product) => {
            const discount = Math.round(
              ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
            );
            const isWishlisted = wishlist.includes(product.id);

            return (
              <div
                key={product.id}
                className="relative group bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300"
              >
                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 z-10 p-1 bg-white/90 rounded-full shadow hover:scale-110 transition"
                >
                  <Heart
                    className={`w-6 h-6 transition duration-200 ${
                      isWishlisted ? 'fill-rose-500 text-rose-500 animate-ping-once' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />

                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                  {discount}% OFF
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <div className="flex justify-center items-center gap-3 mt-2">
                    <span className="text-rose-600 text-xl font-bold">₹{product.salePrice}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-5 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-rose-600 hover:to-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
