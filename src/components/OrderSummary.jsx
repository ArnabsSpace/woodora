import { useSelector } from "react-redux";
import OrderItemCard from "./OrderItemCard"; // adjust path as needed
import { useLocation } from "react-router-dom";


export default function OrderSummary() {
  const location = useLocation();
const isCheckout = location.pathname === "/checkout";
  const reduxCart = useSelector((state) => state.cart?.cartItems);
  const localCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cart = reduxCart?.length ? reduxCart : localCart;

  const total = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  return (
    <div className="w-full max-w-sm  p-4">
      <h3 className="font-bold text-2xl mb-4 text-primary w-full">Order Summary</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex h-full items-stretch justify-between flex-col w-full">
          <div>
          {cart.map((item) => (
            
              <OrderItemCard key={item.id} item={item} hideDelete={isCheckout} />
            
          ))}
          </div>
          <div className="flex h-fit flex-col pb-10">
            <hr className="my-2" />
            <div className="flex justify-between font-bold w-full">
              
              <span>Total:</span>
              <span className="text-red">₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
