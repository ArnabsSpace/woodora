import OrderSummary from './OrderSummary';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/features/cartSlice";

export default function OrderConfirmation() {
   const dispatch = useDispatch();

  useEffect(() => {
    // 1. Get order data from localStorage
    const orderData = JSON.parse(localStorage.getItem("orderConfirmation"));

    if (orderData) {
      // 2. Clear cart items from Redux
      dispatch(clearCart());

      // 3. Clear cart from localStorage
      localStorage.removeItem("cartItems");

      // Optional: remove order data too if you want a fresh page
      // localStorage.removeItem("orderData");
    }
  }, [dispatch]);
  const deliverySteps = [
    { label: "Order confirmed by Woodora", time: "16 Jul 2020 - 08:00 PM", done: true },
    { label: "Package received on Fedex", time: "16 Jul 2020 - 08:00 PM", done: true },
    { label: "Package send from Fedex", time: "16 Jul 2020 - 08:00 PM", done: true },
    { label: "Package arrive on Mother Hub", time: "16 Jul 2020 - 08:00 PM", done: true },
    { label: "Package will send to your home by our courier (James)", time: "16 Jul 2020 - 08:00 PM", done: false },
  ];

  const products = [
    { id: 1, name: "MODERN BLACK STANDING", price: 235.41, image: "🪑" },
    { id: 2, name: "MODERN BLACK STANDING", price: 235.41, image: "🪑" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 font-montserrat">
      {/* Left Section */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-[#2F265C]">Order Confirmed. Thank you!</h2>
          <p className="text-sm text-gray-600 mt-1">
            Will sent to <strong>2972 Westheimer Rd, Santa Ana, Illinois 85486</strong>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 pl-5 space-y-6">
          {deliverySteps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className={`w-3 h-3 rounded-full absolute -left-2.5 top-1 ${
                step.done ? "bg-green-500" : "bg-gray-500"
              }`} />

              {/* Content */}
              <div className="text-sm">
                <p className="font-medium text-gray-800">{step.label}</p>
                <p className="text-xs text-gray-500">{step.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Message */}
        <div className="pt-6 border-t">
          <p className="text-sm text-gray-700 font-medium">Have trouble on your package?</p>
          <p className="text-sm text-gray-500">You can call us. We can help solve your problem.</p>
        </div>

        {/* Button */}
        <button className="bg-[#2F265C] text-white px-6 py-2 rounded-full text-sm hover:opacity-90">
          Continue Shopping
        </button>
      </div>

      {/* Right Section: Order Summary */}
      
      <div className="w-full">
        <OrderSummary />
      </div>
    </div>
  );
}
