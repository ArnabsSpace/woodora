import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const paymentInfo = JSON.parse(localStorage.getItem("paymentInfo"));
  const cartItems = JSON.parse(localStorage.getItem("cartItems")); // fallback if not from Redux

  const newOrder = {
    shippingInfo,
    paymentInfo,
    cartItems,
    createdAt: new Date().toISOString(),
  };

  // Get existing order history or start new
  const existingOrders = JSON.parse(localStorage.getItem("orderConfirmationHistory")) || [];

  // Add the new order
  existingOrders.push(newOrder);

  // Save updated list back
  localStorage.setItem("orderConfirmationHistory", JSON.stringify(existingOrders));

  // Optional: also save latest order separately if needed for confirmation page
  localStorage.setItem("orderConfirmation", JSON.stringify(newOrder));

  // Navigate to confirmation page
  navigate("/confirmation");
};


  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between w-full">
      <div className="w-full md:w-2/3">
        <PaymentMethod onConfirm={handleCompleteOrder} />
      </div>
      <div className="w-full md:w-1/3">
        <OrderSummary />
      </div>
    </div>
  );
}
