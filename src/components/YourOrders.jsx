import { useEffect, useState } from 'react';
import YourOrderItemCard from './YourOrderItemCard';

export default function YourOrders() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('orderConfirmationHistory');
    if (stored) {
      setOrderHistory(JSON.parse(stored));
    }
  }, []);

  if (!orderHistory.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">No past orders found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Your Orders</h2>

      {orderHistory.map((order, idx) => (
        <div key={idx} className="mb-10 ">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm font-medium">Order #{idx + 1}</p>
              <p className="text-xs text-gray-500">
                Placed on {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {order.cartItems.map(item => (
            <YourOrderItemCard key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
