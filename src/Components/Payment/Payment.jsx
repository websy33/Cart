import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaCreditCard, 
  FaPaypal, 
  FaGooglePay, 
  FaApplePay, 
  FaShieldAlt, 
  FaCheckCircle,
  FaLock,
  FaMoneyBillWave,
  FaUser,
  FaHome,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowLeft
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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

const Payment = ({ onPaymentSuccess = () => {} }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Destructure with defaults
  const { 
    totalAmount = 0,
    cartTotal = 0,
    deliveryCharge = 0,
    gstAmount = 0,
    totalDiscount = 0,
    totalItems = 0,
    orderId = `ORD-${Date.now()}`,
    deliveryAddress = {},
    cartItems = []
  } = location.state || {};

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  
  // Address state
  const [address, setAddress] = useState({
    name: deliveryAddress.name || '',
    street: deliveryAddress.street || '',
    city: deliveryAddress.city || '',
    state: deliveryAddress.state || '',
    zipCode: deliveryAddress.zipCode || '',
    phone: deliveryAddress.phone || '',
    email: deliveryAddress.email || ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Va3SXYZhJ81YRi6Ry');
  }, []);

  // Price validation function
  const validatePaymentTotals = () => {
    if (!location.state) return true;
    
    // Recalculate values to ensure consistency
    const calculatedDeliveryCharge = cartTotal > 2000 ? 0 : 50;
    const taxableAmount = cartTotal - totalDiscount;
    const calculatedGstAmount = Math.round(taxableAmount * 0.18);
    const calculatedTotalAmount = taxableAmount + calculatedGstAmount + calculatedDeliveryCharge;
    
    const discrepancy = Math.abs(calculatedTotalAmount - totalAmount);

    if (discrepancy > 1) {
      console.error(`Price mismatch detected:
        Cart Total: ₹${cartTotal.toLocaleString('en-IN')}
        - Discount: ₹${totalDiscount.toLocaleString('en-IN')}
        + GST: ₹${calculatedGstAmount.toLocaleString('en-IN')}
        + Delivery: ₹${calculatedDeliveryCharge.toLocaleString('en-IN')}
        = Calculated Total: ₹${calculatedTotalAmount.toLocaleString('en-IN')}
        vs Stated Total: ₹${totalAmount.toLocaleString('en-IN')}
        Difference: ₹${discrepancy.toLocaleString('en-IN')}`);
      return false;
    }
    return true;
  };

  // Validate on component mount
  useEffect(() => {
    if (!validatePaymentTotals()) {
      alert('There was a discrepancy in the order totals. Redirecting you back to cart.');
      navigate('/cart');
    }
  }, []);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces every 4 digits
    if (name === 'number') {
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } 
    // Format expiry date with slash
    else if (name === 'expiry') {
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{0,2})/, '$1/$2')
        .substring(0, 5);
      setCardDetails(prev => ({ ...prev, [name]: formattedValue }));
    } 
    // For other fields
    else {
      setCardDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateAddress = () => {
    const requiredFields = ['name', 'street', 'city', 'state', 'zipCode', 'phone'];
    const missingFields = requiredFields.filter(field => !address[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Please fill in: ${missingFields.join(', ')}`);
    }

    if (!/^\d{10}$/.test(address.phone)) {
      throw new Error('Enter valid 10-digit phone number');
    }

    if (!/^\d{6}$/.test(address.zipCode)) {
      throw new Error('Enter valid 6-digit ZIP code');
    }
  };

  const validateCard = () => {
    if (paymentMethod === 'creditCard') {
      if (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv) {
        throw new Error('Please fill all card details');
      }
      
      const rawCardNumber = cardDetails.number.replace(/\s/g, '');
      
      if (!/^\d{16}$/.test(rawCardNumber)) {
        throw new Error('Enter valid 16-digit card number');
      }

      if (!/^\d{3,4}$/.test(cardDetails.cvv)) {
        throw new Error('Enter valid CVV');
      }
      
      if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(cardDetails.expiry)) {
        throw new Error('Enter valid expiry date (MM/YY)');
      }
      
      const [month, year] = cardDetails.expiry.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      
      if (
        parseInt(year) < currentYear || 
        (parseInt(year) === currentYear && parseInt(month) < currentMonth)
      ) {
        throw new Error('Card has expired');
      }
    }
  };

  const sendConfirmationEmail = async () => {
    try {
      const response = await emailjs.send(
        'service_bdm6dl3',
        'template_jr1dnto',
        {
          order_id: orderId,
          customer_name: address.name,
          customer_email: address.email,
          customer_phone: address.phone,
          delivery_address: `${address.street}, ${address.city}, ${address.state} - ${address.zipCode}`,
          payment_method: paymentMethod.toUpperCase(),
          total_amount: `₹${totalAmount.toLocaleString('en-IN')}`,
          order_date: new Date().toLocaleString(),
          items_list: cartItems.map(item => 
            `${item.name} (Qty: ${item.quantity}) - ₹${(item.price?.current || item.price).toLocaleString('en-IN')}`
          ).join('\n'),
          order_summary: `
            Subtotal: ₹${cartTotal.toLocaleString('en-IN')}
            Discount: -₹${totalDiscount.toLocaleString('en-IN')}
            Delivery: ₹${deliveryCharge.toLocaleString('en-IN')}
            GST: ₹${gstAmount.toLocaleString('en-IN')}
            Total: ₹${totalAmount.toLocaleString('en-IN')}
          `
        }
      );

      if (response.status !== 200) {
        throw new Error('Email failed to send');
      }
      return response;
    } catch (error) {
      console.error('Email error:', error);
      throw new Error('Failed to send confirmation email');
    }
  };

  const processPayment = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() < 0.9;
        isSuccess ? resolve() : reject(new Error('Payment declined by bank'));
      }, 1500);
    });
  };

  const handlePaymentSubmit = async () => {
    if (!validatePaymentTotals()) {
      setPaymentError('Order amounts are inconsistent. Please try again.');
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    try {
      validateAddress();
      if (paymentMethod !== 'cod') validateCard();

      await processPayment();
      await sendConfirmationEmail();

      setPaymentSuccess(true);
      onPaymentSuccess();

      navigate('/order-success', { 
        state: { 
          orderId,
          totalAmount,
          deliveryAddress: address,
          paymentMethod,
          cartItems
        } 
      });
    } catch (error) {
      setPaymentError(
        error.message.includes('insufficient authentication scopes') ? 
        'Email service needs reconfiguration. Please contact support.' :
        error.message
      );
    } finally {
      if (!paymentSuccess) setIsProcessing(false);
    }
  };

  const paymentOptions = [
    { id: 'creditCard', icon: <FaCreditCard />, label: 'Credit/Debit Card' },
    { id: 'paypal', icon: <FaPaypal />, label: 'PayPal' },
    { id: 'googlePay', icon: <FaGooglePay />, label: 'Google Pay' },
    { id: 'applePay', icon: <FaApplePay />, label: 'Apple Pay' },
    { id: 'cod', icon: <FaMoneyBillWave />, label: 'Cash on Delivery' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 mb-4"
        >
          <FaArrowLeft className="mr-2" />
          Back to Cart
        </button>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold">Complete Your Payment</h1>
            <div className="mt-2 flex justify-between items-center">
              <span>Order #{orderId}</span>
              <span className="font-semibold text-lg">
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-500" />
              Delivery Address
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <FaUser className="text-gray-500 mr-2" />
                    <input
                      type="text"
                      name="name"
                      value={address.name}
                      onChange={handleAddressChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <FaPhone className="text-gray-500 mr-2" />
                    <input
                      type="tel"
                      name="phone"
                      value={address.phone}
                      onChange={handleAddressChange}
                      className="w-full outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <FaHome className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    name="street"
                    value={address.street}
                    onChange={handleAddressChange}
                    className="w-full outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={address.state}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={address.zipCode}
                    onChange={handleAddressChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (for receipt)
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <FaEnvelope className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    name="email"
                    value={address.email}
                    onChange={handleAddressChange}
                    className="w-full outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaLock className="mr-2 text-blue-500" />
              Select Payment Method
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {paymentOptions.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  className={`p-3 border-2 rounded-lg flex items-center justify-center transition-all ${
                    paymentMethod === method.id 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => setPaymentMethod(method.id)}
                  disabled={isProcessing}
                >
                  <span className={`text-lg mr-2 ${
                    paymentMethod === method.id ? 'text-blue-500' : 'text-gray-600'
                  }`}>
                    {method.icon}
                  </span>
                  <span className={
                    paymentMethod === method.id ? 'font-medium text-blue-600' : 'text-gray-700'
                  }>
                    {method.label}
                  </span>
                </button>
              ))}
            </div>

            {paymentMethod === 'creditCard' && (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium mb-3">Card Details</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="number"
                      value={cardDetails.number}
                      onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-lg p-2"
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Name on Card</label>
                    <input
                      type="text"
                      name="name"
                      value={cardDetails.name}
                      onChange={handleCardChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        value={cardDetails.expiry}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            <OrderSummary 
              totalItems={totalItems}
              cartTotal={cartTotal}
              deliveryCharge={deliveryCharge}
              gstAmount={gstAmount}
              totalDiscount={totalDiscount}
              totalAmount={totalAmount}
            />
            <div className="mt-4">
              {paymentError && (
                <div className="text-red-500 mb-4 text-center animate-shake">
                  {paymentError}
                </div>
              )}

              <button 
                onClick={handlePaymentSubmit}
                disabled={isProcessing || paymentSuccess}
                className={`w-full py-3 rounded-lg font-medium transition-all flex items-center justify-center ${
                  isProcessing ? 'bg-blue-400' :
                  paymentSuccess ? 'bg-green-500' :
                  'bg-blue-600 hover:bg-blue-700'
                } text-white shadow-md`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing Payment...
                  </>
                ) : paymentSuccess ? (
                  <>
                    <FaCheckCircle className="mr-2" />
                    Payment Successful! Redirecting...
                  </>
                ) : (
                  paymentMethod === 'cod' ? 
                    `Place Order (₹${totalAmount.toLocaleString('en-IN')})` : 
                    `Pay Securely ₹${totalAmount.toLocaleString('en-IN')}`
                )}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <FaShieldAlt className="mr-1 text-blue-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <FaLock className="mr-1 text-blue-500" />
                  <span>256-bit Encryption</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="mr-1 text-blue-500" />
                  <span>PCI DSS Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;