import { useSelector } from "react-redux";
import OrderItemCard from "./OrderItemCard"; // adjust path as needed

export default function OrderSummary() {
  const reduxCart = useSelector((state) => state.cart?.items);
  const localCart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cart = reduxCart?.length ? reduxCart : localCart;

  const total = cart.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);

  return (
    <div className="w-full max-w-sm border rounded p-4">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <OrderItemCard key={item.id} item={item} />
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </>
      )}
    </div>
  );
}
