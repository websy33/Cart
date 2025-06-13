import { useState, useEffect } from 'react';
import { 
  FaHeart, FaRegHeart, FaShoppingCart, FaArrowLeft, 
  FaTruck, FaShieldAlt, FaExchangeAlt, FaStar,
  FaTrash, FaPlus, FaMinus
} from 'react-icons/fa';
import { useNavigate, Routes, Route } from 'react-router-dom';
import ProductDetail from '../ProductDetails/ProductDetail';
import Wishlist from '../ProductDetails/Wishlist';
import Payment from '../Payment/Payment';

// Import shirt images
import Design1Front from '../../assets/images/Design1Front.jpg';
import Design1Side from '../../assets/images/Design1Side.jpeg';
import Design1Back from '../../assets/images/Design1Back.jpeg';
import Design2Front from '../../assets/images/Design2Front.png';
import Design2Side from '../../assets/images/Design2Side.jpeg';
import Design2Back from '../../assets/images/Design2Back.jpg';
import Design3Front from '../../assets/images/Design3Front.jpg';
import Design3Side from '../../assets/images/Design3Side.jpg';
import Design3Back from '../../assets/images/Design3Back.jpg';

// Define our 5 color options with codes
const COLOR_OPTIONS = [
  { name: 'White', code: '#FFFFFF' },
  { name: 'Black', code: '#000000' },
  { name: 'Navy Blue', code: '#000080' },
  { name: 'Light Blue', code: '#ADD8E6' },
  { name: 'Pink', code: '#FFC0CB' }
];

// Array of all designs with their views
const shirtDesigns = [
  // Design 1 - Now with all color options
  {
    id: 'design1',
    baseName: 'Classic Formal Shirt',
    views: [
      { pose: 'front', alt: 'Front View' },
      { pose: 'side', alt: 'Side View' },
      { pose: 'back', alt: 'Back View' }
    ],
    basePrice: 1564,
    originalPrice: 2299,
    description: 'Premium quality formal shirt',
    colors: COLOR_OPTIONS.map(c => c.name) // All 5 colors available
  },
  
  // Design 2 - Navy Blue
  {
    id: 'design2',
    baseName: 'Slim Fit Shirt',
    views: [
      { pose: 'front', alt: 'Front View' },
      { pose: 'side', alt: 'Side View' },
      { pose: 'back', alt: 'Back View' }
    ],
    basePrice: 1699,
    originalPrice: 2399,
    description: 'Professional slim fit shirt',
    colors: COLOR_OPTIONS.map(c => c.name) // All 5 colors available
  },

  // Design 3 - Black Formal
  {
    id: 'design3',
    baseName: 'Formal Shirt',
    views: [
      { pose: 'front', alt: 'Front View' },
      { pose: 'side', alt: 'Side View' },
      { pose: 'back', alt: 'Back View' }
    ],
    basePrice: 1799,
    originalPrice: 2499,
    description: 'Elegant formal shirt',
    colors: COLOR_OPTIONS.map(c => c.name) // All 5 colors available
  },
];

// Header component
const Header = ({ wishlistCount, cartCount, showBackButton, onBackClick }) => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={onBackClick}
              className="mr-4 text-gray-600 hover:text-black"
            >
              <FaArrowLeft className="text-xl" />
            </button>
          )}
          <h1 
            className="text-xl font-bold text-gray-800 cursor-pointer"
            onClick={() => navigate('/SweatShirts')}
          >
            Fashion Store
          </h1>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => navigate('/SweatShirts/wishlist')}
            className="text-gray-600 hover:text-red-500 relative"
          >
            <FaHeart className="text-2xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => navigate('/SweatShirts/cart')}
            className="text-gray-600 hover:text-black relative"
          >
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

// ProductGrid component
const ProductGrid = ({ products, addToCart, toggleWishlist, navigateToProductDetail }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      selectedVariant: 0,
      price: product.variants[0].price,
      color: product.variants[0].color
    });
    navigate('/SweatShirts/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => {
          const firstVariant = product.variants[0];
          return (
            <div key={product.id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative group">
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => navigateToProductDetail(product.id)}
                >
                  <img
                    src={firstVariant.src}
                    alt={firstVariant.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-10"
                >
                  {product.isWishlisted ? (
                    <FaHeart className="text-red-500 text-lg" />
                  ) : (
                    <FaRegHeart className="text-gray-500 text-lg" />
                  )}
                </button>
              </div>

              <div className="p-4">
                <h3 
                  className="text-md font-medium text-gray-800 mb-1 truncate cursor-pointer hover:text-blue-600"
                  onClick={() => navigateToProductDetail(product.id)}
                >
                  {product.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold">
                    Rs. {firstVariant.price.current.toLocaleString()}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    Rs. {firstVariant.price.original.toLocaleString()}
                  </span>
                  <span className="text-sm text-green-600 ml-2">
                    {firstVariant.price.discount}% OFF
                  </span>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Cart component
const Cart = ({ 
  cartItems, 
  updateCartItemQuantity, 
  removeFromCart,
  calculateCartTotal,
  calculateTotalDiscount
}) => {
  const navigate = useNavigate();
  
  const deliveryCharge = calculateCartTotal() > 2000 ? 0 : 50;
  const totalAmount = calculateCartTotal() + deliveryCharge;

  const calculateTotalItems = () => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-6">Your cart is empty</p>
          <button 
            onClick={() => navigate('/Tshirt')}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition text-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedVariant}`} className="border-b border-gray-200 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 p-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-5 flex items-center mb-4 md:mb-0">
                      <div className="w-20 h-20 flex-shrink-0 mr-4">
                        <img 
                          src={item.variants[item.selectedVariant].src} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.variants[item.selectedVariant].color}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-2 text-center mb-4 md:mb-0">
                      <div className="font-medium text-gray-800">
                        Rs. {item.price.current.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 line-through">
                        Rs. {item.price.original.toLocaleString()}
                      </div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-3 flex justify-center mb-4 md:mb-0">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1, item.selectedVariant)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus className={`text-sm ${item.quantity <= 1 ? 'text-gray-300' : ''}`} />
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1, item.selectedVariant)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <FaPlus className="text-sm" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="col-span-2 flex items-center justify-end">
                      <div className="text-right mr-4">
                        <div className="font-medium text-gray-800">
                          Rs. {(item.price.current * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-xs text-green-600">
                          Save Rs. {((item.price.original - item.price.current) * item.quantity).toLocaleString()}
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedVariant)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({calculateTotalItems()} items)</span>
                  <span className="font-medium">Rs. {calculateCartTotal().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>- Rs. {calculateTotalDiscount().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className={deliveryCharge === 0 ? "text-green-600" : ""}>
                    {deliveryCharge === 0 ? 'FREE' : `Rs. ${deliveryCharge}`}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>Rs. {totalAmount.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
            <button 
  className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
  onClick={() => navigate('/SweatShirts/Payment')}
>
  Proceed to Checkout
</button>
              <div className="mt-6 text-sm text-gray-500 space-y-3">
                <div className="flex items-center">
                  <FaShieldAlt className="mr-2 text-gray-400" />
                  <span>Secure checkout</span>
                </div>
                <div className="flex items-center">
                  <FaExchangeAlt className="mr-2 text-gray-400" />
                  <span>Easy returns within 30 days</span>
                </div>
                <div className="flex items-center">
                  <FaTruck className="mr-2 text-gray-400" />
                  <span>Delivery within 3-5 business days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Tshirt component
const SweatShirts = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateProducts = () => {
      return shirtDesigns.flatMap((design, index) => {
        return design.colors.map(color => {
          const colorData = COLOR_OPTIONS.find(c => c.name === color);
          const discount = Math.round((1 - design.basePrice/design.originalPrice) * 100);
          
          return {
            id: `${design.id}-${color.toLowerCase().replace(' ', '-')}`,
            designId: design.id,
            name: `${color} ${design.baseName}`,
            variants: design.views.map(view => ({
              src: getImageForDesign(design.id, view.pose),
              alt: `${color} ${design.baseName} - ${view.alt}`,
              pose: view.pose,
              color: color,
              colorCode: colorData.code,
              price: {
                current: design.basePrice,
                original: design.originalPrice,
                discount: discount
              }
            })),
            images: design.views.map(view => getImageForDesign(design.id, view.pose)),
            price: design.basePrice,
            originalPrice: design.originalPrice,
            description: design.description,
            detailedDescription: [
              '100% Premium Cotton',
              'Slim Fit Design',
              'Formal Collar Style',
              'Single Button Cuffs'
            ],
            specifications: {
              'Fabric': '100% Cotton',
              'Fit': 'Slim Fit',
              'Pattern': 'Solid',
              'Sleeve Length': 'Full Sleeve',
              'Collar': 'Spread Collar'
            },
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            colors: design.colors,
            rating: 4.5 - (index * 0.02),
            reviews: 128 + (index * 5),
            stock: 50 + index,
            isWishlisted: false
          };
        });
      });
    };

    setProducts(generateProducts());

    // Load cart and wishlist from localStorage
    const savedCart = localStorage.getItem('cartItems');
    const savedWishlist = localStorage.getItem('wishlistItems');
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [cartItems, wishlistItems]);

  // Helper function to get image for design and pose
  const getImageForDesign = (designId, pose) => {
    switch(designId) {
      case 'design1':
        return pose === 'front' ? Design1Front :
               pose === 'side' ? Design1Side : Design1Back;
      case 'design2':
        return pose === 'front' ? Design2Front :
               pose === 'side' ? Design2Side : Design2Back;
      case 'design3':
        return pose === 'front' ? Design3Front :
               pose === 'side' ? Design3Side : Design3Back;
      default:
        return Design1Front;
    }
  };

  const addToCart = (product) => {
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => 
      item.id === product.id && 
      item.selectedVariant === product.selectedVariant
    );
    
    if (existingItem) {
      // If exists, increase quantity
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.selectedVariant === product.selectedVariant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // If new, add to cart with quantity 1
      setCartItems([...cartItems, { 
        ...product, 
        quantity: 1,
        selectedVariant: product.selectedVariant || 0
      }]);
    }
  };

  const updateCartItemQuantity = (productId, newQuantity, variantIndex = 0) => {
    if (newQuantity < 1) {
      removeFromCart(productId, variantIndex);
      return;
    }
    
    setCartItems(cartItems.map(item => 
      item.id === productId && item.selectedVariant === variantIndex
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const removeFromCart = (productId, variantIndex = 0) => {
    setCartItems(cartItems.filter(item => 
      !(item.id === productId && item.selectedVariant === variantIndex)
    ));
  };

  const calculateCartTotal = () => {
    return cartItems.reduce((total, item) => 
      total + (item.price.current * item.quantity), 0
    );
  };

  const calculateTotalDiscount = () => {
    return cartItems.reduce((total, item) => 
      total + ((item.price.original - item.price.current) * item.quantity), 0
    );
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const toggleWishlist = (productId) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        const isWishlisted = !product.isWishlisted;
        if (isWishlisted) {
          setWishlistItems([...wishlistItems, product]);
        } else {
          setWishlistItems(wishlistItems.filter(item => item.id !== productId));
        }
        return { ...product, isWishlisted };
      }
      return product;
    }));
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/SweatShirts/${productId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route 
          index
          element={
            <>
              <Header 
                wishlistCount={wishlistItems.length} 
                cartCount={calculateTotalItems()} 
                showBackButton={false}
              />
              <ProductGrid 
                products={products}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
                navigateToProductDetail={navigateToProductDetail}
              />
            </>
          } 
        />
        <Route 
          path=":id"
          element={
            <>
              <Header 
                wishlistCount={wishlistItems.length} 
                cartCount={calculateTotalItems()} 
                showBackButton={true}
                onBackClick={() => navigate(-1)}
              />
              <ProductDetail 
                products={products}
                cartItems={cartItems}
                wishlistItems={wishlistItems}
                addToCart={addToCart}
                toggleWishlist={toggleWishlist}
              />
            </>
          } 
        />
        <Route 
          path="cart"
          element={
            <>
              <Header 
                wishlistCount={wishlistItems.length} 
                cartCount={calculateTotalItems()} 
                showBackButton={true}
                onBackClick={() => navigate(-1)}
              />
             <Cart 
        cartItems={cartItems}
        updateCartItemQuantity={updateCartItemQuantity}
        removeFromCart={removeFromCart}
        calculateCartTotal={calculateCartTotal}
        calculateTotalDiscount={calculateTotalDiscount}
      />
            </>
          }

        />
     <Route path="wishlist" element={
  <>
    <Header 
      wishlistCount={wishlistItems.length} 
      cartCount={calculateTotalItems()} 
      showBackButton={true}
      onBackClick={() => navigate(-1)}
    />
    <Wishlist 
      wishlistItems={wishlistItems}
      removeFromWishlist={(productId) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== productId));
        setProducts(products.map(product => 
          product.id === productId ? { ...product, isWishlisted: false } : product
        ))
      }}
      addToCart={addToCart}
      toggleWishlist={toggleWishlist}
    />
  </>
}/>

<Route path="Payment" element={
  <>
    <Header 
      wishlistCount={wishlistItems.length} 
      cartCount={calculateTotalItems()} 
      showBackButton={true}
      onBackClick={() => navigate(-1)}
    />
    <Payment 
      clearCart={() => setCartItems([])}
      cartItems={cartItems}
      calculateCartTotal={calculateCartTotal}
    />
  </>
}/>  </Routes>
    </div>
  );
};

export default SweatShirts;