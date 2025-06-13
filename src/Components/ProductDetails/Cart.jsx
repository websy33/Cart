import { useState } from 'react';
import { FaTrash, FaPlus, FaMinus, FaArrowLeft, FaCheck, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const OrderSummary = ({ 
  totalItems, 
  cartTotal, 
  deliveryCharge, 
  gstAmount, 
  totalDiscount, 
  totalAmount 
}) => (
  <div className="bg-gray-50 p-4 rounded-lg mb-6">
    <h3 className="font-semibold mb-2">Order Summary</h3>
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>Subtotal ({totalItems} items):</span>
        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
      </div>
      <div className="flex justify-between">
        <span>Discount:</span>
        <span className="text-green-600">-₹{totalDiscount.toLocaleString('en-IN')}</span>
      </div>
      <div className="flex justify-between">
        <span>Delivery Charge:</span>
        <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toLocaleString('en-IN')}`}</span>
      </div>
      <div className="flex justify-between">
        <span>GST (18%):</span>
        <span>₹{gstAmount.toLocaleString('en-IN')}</span>
      </div>
      <div className="border-t border-gray-200 my-2"></div>
      <div className="flex justify-between font-bold">
        <span>Total Amount:</span>
        <span>₹{totalAmount.toLocaleString('en-IN')}</span>
      </div>
    </div>
  </div>
);

const Cart = ({ 
  cartItems, 
  updateCartItemQuantity, 
  removeFromCart,
  calculateTotalDiscount,
  clearCart
}) => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');

  // Calculate order values
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.price?.current || item.price) * item.quantity, 
    0
  );
  const deliveryCharge = cartTotal > 2000 ? 0 : 50;
  const totalDiscount = calculateTotalDiscount();
  const taxableAmount = cartTotal - totalDiscount;
  const gstAmount = Math.round(taxableAmount * 0.18);
  const totalAmount = taxableAmount + gstAmount + deliveryCharge;
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const validatePriceMatch = () => {
    const calculatedTotal = cartTotal - totalDiscount + gstAmount + deliveryCharge;
    const discrepancy = Math.abs(calculatedTotal - totalAmount);

    if (discrepancy > 1) {
      console.error(`Price mismatch detected:
        Cart Total: ₹${cartTotal.toLocaleString('en-IN')}
        - Discount: ₹${totalDiscount.toLocaleString('en-IN')}
        + GST: ₹${gstAmount.toLocaleString('en-IN')}
        + Delivery: ₹${deliveryCharge.toLocaleString('en-IN')}
        = Calculated Total: ₹${calculatedTotal.toLocaleString('en-IN')}
        vs Stated Total: ₹${totalAmount.toLocaleString('en-IN')}
        Difference: ₹${discrepancy.toLocaleString('en-IN')}`);
      return false;
    }
    return true;
  };

  const handleProceedToCheckout = () => {
    if (!validatePriceMatch()) {
      alert('There was a calculation error. Please refresh the page and try again.');
      return;
    }

    navigate('/payment', {
      state: {
        cartItems,
        cartTotal,
        deliveryCharge,
        gstAmount,
        totalDiscount,
        totalAmount,
        totalItems,
        deliveryAddress: {
          name: "John Doe",
          street: "123 Main Street",
          city: "Mumbai",
          state: "Maharashtra",
          zipCode: "400001",
          phone: "9876543210",
          email: "john@example.com"
        }
      }
    });
  };

  const handlePlaceOrder = () => {
    setTimeout(() => {
      setOrderPlaced(true);
      clearCart();
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-green-500 text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your order #{Math.floor(Math.random() * 1000000)} has been confirmed.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
            <p className="text-gray-600">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} • ₹{totalAmount.toLocaleString('en-IN')}
            </p>
            <p className="text-gray-600 mt-1">Payment Method: {paymentMethod.toUpperCase()}</p>
          </div>
          <button 
            onClick={() => navigate('/Tshirt')}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-black mr-4"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-gray-800">
          Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
        </h1>
      </div>
      
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
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedVariant}`} className="border-b border-gray-200 last:border-b-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 p-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center mb-4 md:mb-0">
                      <div className="w-20 h-20 flex-shrink-0 mr-4">
                        <img 
                          src={item.variants?.[item.selectedVariant]?.src || item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.variants?.[item.selectedVariant]?.color || item.color}</p>
                        <p className="text-xs text-gray-400 mt-1">Size: {item.size || 'M'}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="col-span-2 text-center mb-4 md:mb-0">
                      <div className="font-medium text-gray-800">
                        ₹{(item.price?.current || item.price).toLocaleString('en-IN')}
                      </div>
                      {item.price?.original && (
                        <div className="text-sm text-gray-500 line-through">
                          ₹{item.price.original.toLocaleString('en-IN')}
                        </div>
                      )}
                    </div>
                    
                    {/* Quantity */}
                    <div className="col-span-2 flex justify-center mb-4 md:mb-0">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1, item.selectedVariant)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <FaMinus />
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1, item.selectedVariant)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="col-span-2 flex items-center justify-end">
                      <div className="text-right mr-4">
                        <div className="font-medium text-gray-800">
                          ₹{((item.price?.current || item.price) * item.quantity).toLocaleString('en-IN')}
                        </div>
                        {item.price?.original && (
                          <div className="text-xs text-green-600">
                            Saved ₹{((item.price.original - (item.price?.current || item.price)) * item.quantity).toLocaleString('en-IN')}
                          </div>
                        )}
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
            <OrderSummary 
              totalItems={totalItems}
              cartTotal={cartTotal}
              deliveryCharge={deliveryCharge}
              gstAmount={gstAmount}
              totalDiscount={totalDiscount}
              totalAmount={totalAmount}
            />
            
            <button 
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-medium"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
            <button 
              className="w-full bg-white border border-black text-black py-3 rounded-md hover:bg-gray-100 transition font-medium mt-4"
              onClick={() => navigate('/Tshirt')}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;