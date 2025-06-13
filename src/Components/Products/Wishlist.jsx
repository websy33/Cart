// Wishlist.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';


const Wishlist = () => {
  const location = useLocation();
  const wishlistItems = location.state?.wishlistItems || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        wishlistCount={wishlistItems.length} 
        cartCount={0} // You might want to pass actual cart count here
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Wishlist ({wishlistItems.length})</h1>
        
        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <FaHeart className="mx-auto text-gray-300 text-5xl mb-4" />
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md font-medium text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex items-center">
                    <span className="text-lg font-bold mr-2">Rs. {product.price}</span>
                    <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;