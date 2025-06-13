import { FaTrash, FaShoppingCart, FaArrowLeft, FaHeart, FaRegHeart, FaStar, FaExchangeAlt, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Wishlist = ({ 
  wishlistItems, 
  removeFromWishlist, 
  addToCart,
  toggleWishlist 
}) => {
  const navigate = useNavigate();

  const handleMoveToCart = (product) => {
    addToCart({
      ...product,
      selectedVariant: 0,
      price: product.variants[0].price,
      color: product.variants[0].color
    });
    removeFromWishlist(product.id);
  };

  const handleQuickView = (productId) => {
    // Implement quick view modal logic here
    alert(`Quick view for product ${productId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with Gradient Background */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-black mr-4 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Your Wishlist <span className="text-blue-600">({wishlistItems.length})</span>
            </h1>
            <p className="text-gray-600 mt-1">
              {wishlistItems.length > 0 
                ? "Your favorite items are waiting for you!" 
                : "Start saving your favorite items"}
            </p>
          </div>
        </div>
      </div>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="mx-auto w-40 h-40 bg-gradient-to-br from-pink-50 to-blue-50 rounded-full flex items-center justify-center mb-6 p-8">
            <FaHeart className="text-5xl text-pink-400 animate-pulse" />
          </div>
          <h3 className="text-2xl font-medium text-gray-700 mb-2">Your wishlist feels lonely</h3>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Save items you love by clicking the heart icon. We'll keep them here for you.
          </p>
          <button 
            onClick={() => navigate('/Tshirt')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all text-lg font-medium shadow-md hover:scale-105 transform"
          >
            Start Exploring
          </button>
        </div>
      ) : (
        <>
          {/* Wishlist Controls */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-gray-600 flex items-center">
              <FaHeart className="text-pink-500 mr-2" />
              {wishlistItems.length} {wishlistItems.length === 1 ? 'saved item' : 'saved items'}
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => {
                  wishlistItems.forEach(item => handleMoveToCart(item));
                }}
                className="bg-white border border-gray-200 hover:border-blue-400 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-all flex items-center text-sm font-medium"
              >
                <FaShoppingCart className="mr-2" />
                Move all to cart
              </button>
            </div>
          </div>
          
          {/* Product Grid with Enhanced Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => {
              const firstVariant = product.variants[0];
              const discountPercentage = Math.round(
                (1 - firstVariant.price.current / firstVariant.price.original) * 100
              );

              return (
                <div key={product.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image Container with Hover Effects */}
                  <div className="relative overflow-hidden h-72">
                    {/* Main Product Image */}
                    <img
                      src={firstVariant.src}
                      alt={firstVariant.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Image Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => navigate(`/Tshirt/${product.id}`)}
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-2">
                      {discountPercentage > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {discountPercentage}% OFF
                        </span>
                      )}
                      {product.stock < 10 && product.stock > 0 && (
                        <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          Only {product.stock} left
                        </span>
                      )}
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                        title="Remove from wishlist"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickView(product.id);
                        }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        title="Quick view"
                      >
                        <FaEye className="text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 relative">
                    {/* Floating Add to Cart Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMoveToCart(product);
                      }}
                      className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center whitespace-nowrap opacity-0 group-hover:opacity-100"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                    
                    <h3 
                      className="text-md font-semibold text-gray-800 mb-1 cursor-pointer hover:text-blue-600 line-clamp-2"
                      onClick={() => navigate(`/Tshirt/${product.id}`)}
                    >
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i}
                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">
                          Rs. {firstVariant.price.current.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          Rs. {firstVariant.price.original.toLocaleString()}
                        </span>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        <FaHeart className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced Wishlist Summary */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-inner">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <FaHeart className="text-pink-500 mr-3" />
              Wishlist Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100">
                <div className="text-sm text-gray-500 mb-1 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-2">
                    {wishlistItems.length}
                  </span>
                  Total Items
                </div>
                <p className="text-2xl font-bold text-blue-600">{wishlistItems.length}</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-green-100">
                <div className="text-sm text-gray-500 mb-1 flex items-center">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2">
                    ₹
                  </span>
                  Total Savings
                </div>
                <p className="text-2xl font-bold text-green-600">
                  Rs. {wishlistItems.reduce((total, item) => 
                    total + (item.variants[0].price.original - item.variants[0].price.current), 0
                  ).toLocaleString()}
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-purple-100">
                <div className="text-sm text-gray-500 mb-1 flex items-center">
                  <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mr-2">
                    ∑
                  </span>
                  Total Value
                </div>
                <p className="text-2xl font-bold text-purple-600">
                  Rs. {wishlistItems.reduce((total, item) => 
                    total + item.variants[0].price.original, 0
                  ).toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button 
                onClick={() => navigate('/Tshirt')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all font-medium shadow-md hover:scale-105 transform flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;