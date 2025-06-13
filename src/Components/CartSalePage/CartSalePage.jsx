import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Casual T-Shirt',
    price: 799,
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 2,
    title: 'Running Shoes',
    price: 2499,
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 3,
    title: 'Denim Jacket',
    price: 1799,
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
  {
    id: 4,
    title: 'Summer Dress',
    price: 1299,
    image: 'src/Components/Cardslider/Image_9.jpg',
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = subtotal * 0.18;
  const totalAmount = subtotal + gst;

  const placeOrder = () => {
    alert('Your order has been placed!');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <div className="relative">
          <ShoppingCart className="w-8 h-8 text-pink-600" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-pink-600 font-medium mb-3">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="max-w-xl mx-auto bg-white mt-12 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Cart Summary</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {cartItems.map((item, index) => (
              <li key={index} className="border-b pb-2 flex justify-between">
                <span>{item.title}</span>
                <span className="text-pink-600">₹{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4 space-y-2 text-gray-800 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST (18%)</span>
              <span>₹{gst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
