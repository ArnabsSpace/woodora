import ShippingForm from "../components/ShippingForm";
import OrderSummary from "../components/OrderSummary";
import CheckoutSteps from '../components/CheckoutSteps';

export default function Shipping() {
  return (
    <>
    <CheckoutSteps currentStep={2} />
    <div className="min-h-fit mt-24 mb-8 px-4 flex justify-center">
      <div className="w-full container flex">
        
        <div className="w-full md:w-2/3">
          <ShippingForm />
        </div>
        <div className="w-full md:w-1/3">
          <OrderSummary />
        </div>
        
      </div>
    </div>
    </>
  );
}
