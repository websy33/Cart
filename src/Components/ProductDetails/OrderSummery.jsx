// components/OrderSummary.jsx
import React from 'react';

const OrderSummary = ({
  totalItems,
  cartTotal,
  deliveryCharge,
  gstAmount,
  totalDiscount,
  totalAmount,
  showCodCharge = false
}) => {
  return (
    <div className="space-y-3 mb-6">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</span>
        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
      </div>
      
      <div className="flex justify-between">
        <span className="text-gray-600">Delivery</span>
        <span className={deliveryCharge === 0 ? "text-green-600 font-medium" : ""}>
          {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge.toLocaleString('en-IN')}`}
        </span>
      </div>
      
      {showCodCharge && (
        <div className="flex justify-between">
          <span className="text-gray-600">COD Charge</span>
          <span>₹50</span>
        </div>
      )}
      
      <div className="flex justify-between">
        <span className="text-gray-600">Tax (GST)</span>
        <span>₹{gstAmount.toLocaleString('en-IN')}</span>
      </div>
      
      {totalDiscount > 0 && (
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>- ₹{totalDiscount.toLocaleString('en-IN')}</span>
        </div>
      )}
      
      <div className="border-t border-gray-200 pt-3 mt-3">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{totalAmount.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;