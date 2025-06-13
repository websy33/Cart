import React from 'react';

const OrderSummary = ({
  totalItems,
  cartTotal,
  deliveryCharge,
  gstAmount,
  totalDiscount,
  totalAmount,
  showImages = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
        
        {showImages && (
          <div className="flex -space-x-2 mb-6">
            <img 
              src="https://via.placeholder.com/40" 
              alt="Product" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src="https://via.placeholder.com/40" 
              alt="Product" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium">
              +{totalItems > 2 ? totalItems - 2 : 0}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal ({totalItems} items)</span>
            <span className="font-medium">₹{cartTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Discount</span>
            <span className="text-green-600">-₹{totalDiscount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery</span>
            <span className="font-medium">
              {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toLocaleString('en-IN')}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">GST (18%)</span>
            <span className="font-medium">₹{gstAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mb-6">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;