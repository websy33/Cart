import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaHeart, FaRegHeart, FaShoppingCart, FaStar, 
  FaChevronLeft, FaChevronRight, FaTruck,
  FaShieldAlt, FaExchangeAlt
} from 'react-icons/fa';

const ProductDetail = ({ products, cartItems, wishlistItems, addToCart, toggleWishlist }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Find the current product
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-xl font-semibold text-gray-800">Product not found</h2>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ... rest of your component code remains the same ...

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Gallery */}
          <div className="lg:w-1/2 p-6">
            <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
              {product.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={() => setCurrentImageIndex(prev => 
                      prev === product.images.length - 1 ? 0 : prev + 1
                    )}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto py-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 p-6 border-l border-gray-200">
            {/* Product name and wishlist button */}
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
              <button 
                onClick={() => toggleWishlist(product.id)}
                className="text-2xl"
              >
                {wishlistItems.some(item => item.id === product.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-500 hover:text-red-500" />
                )}
              </button>
            </div>

            {/* Rating and stock */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.reviews} reviews</span>
              <span className="text-green-600 ml-4">
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
         // For price display
<div className="mb-6">
  <span className="text-3xl font-bold text-gray-800">
    Rs. {product.price?.current?.toLocaleString() || product.price?.toLocaleString()}
  </span>
  {product.originalPrice && (
    <span className="text-xl text-gray-500 line-through ml-2">
      Rs. {product.originalPrice.toLocaleString()}
    </span>
  )}
  {product.price?.discount && (
    <span className="text-xl text-green-600 ml-2">
      ({product.price.discount}% OFF)
    </span>
  )}
</div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size 
                          ? 'bg-black text-white border-black' 
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === color 
                          ? 'border-pink-400 ring-2 ring-offset-2 ring-gray-400' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase() === 'white' ? '#FFFFFF' :
                          color.toLowerCase() === 'blue' ? '#0000FF' :
                          color.toLowerCase() === 'black' ? '#000000' :
                          color.toLowerCase() === 'gray' ? '#808080' :
                          color.toLowerCase() === 'pink' ? '#FFC0CB' : '#FFFFFF'
                      }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center w-32">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 border-t border-b border-gray-300 text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                onClick={() => {
                  if ((product.sizes && !selectedSize) || (product.colors && !selectedColor)) {
                    alert('Please select all required options');
                    return;
                  }
                  addToCart({
                    ...product,
                    selectedSize,
                    selectedColor,
                    quantity
                  });
                  alert('Added to cart!');
                }}
                className="flex-1 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition flex items-center justify-center gap-2"
                disabled={product.stock <= 0}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                onClick={() => {
                  if ((product.sizes && !selectedSize) || (product.colors && !selectedColor)) {
                    alert('Please select all required options');
                    return;
                  }
                  addToCart({
                    ...product,
                    selectedSize,
                    selectedColor,
                    quantity
                  });
                  navigate('/cart');
                }}
                className="flex-1 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                disabled={product.stock <= 0}
              >
                Buy Now
              </button>
            </div>

            {/* Product Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaTruck className="text-gray-500 mr-2" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center">
                <FaShieldAlt className="text-gray-500 mr-2" />
                <span className="text-sm">1 Year Warranty</span>
              </div>
              <div className="flex items-center">
                <FaExchangeAlt className="text-gray-500 mr-2" />
                <span className="text-sm">10 Days Returns</span>
              </div>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="border-b">
                        <td className="py-2 font-medium text-gray-700">{key}</td>
                        <td className="py-2 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;