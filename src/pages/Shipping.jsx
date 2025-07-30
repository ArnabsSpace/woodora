import ShippingForm from "../components/ShippingForm";
import OrderSummary from "../components/OrderSummary";

export default function Shipping() {
  return (
    <div className="min-h-fit mt-24 mb-8 px-4 flex justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShippingForm />
        <OrderSummary />
      </div>
    </div>
  );
}
