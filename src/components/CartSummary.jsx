// src/pages/CartSummary.jsx
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import QuantitySelector from './QuantitySelector';
import DeleteCartItemButton from "./DeleteCartItemButton";

export default function CartSummary() {
  const cartItems = useSelector((state) => state.cart?.cartItems ?? []);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item?.newPrice ?? item?.price ?? item?.oldPrice) * item.quantity,
    0
  );
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleContinue = () => {
    if (isLoggedIn) {
      navigate('/shipping');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cart Items List */}
      <div className="md:col-span-2 space-y-4">
        {cartItems.map((item) => (
  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
    
      <div className="flex items-center gap-4">
        <DeleteCartItemButton productId= {item.id} />
        <img src={item.thumbnail} alt={item.name} className="w-16 h-16 object-cover rounded" />
        <div>
          <h4 className="font-semibold text-base">{item.name}</h4>
          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
        </div>
      </div>
      
      <div className='flex flex-col'>
        <QuantitySelector productId={item.id} quantity={item.quantity} isInCart={true}/>
        

        <div className="text-right text-xl font-semibold text-gray-700 mt-4">
          ${(item?.newPrice ?? item?.price ?? item?.oldPrice) * item.quantity}
        </div>
      </div>
  </div>
))}

      </div>

      {/* Summary */}
      <div className="border p-6 rounded-lg shadow-md h-fit">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <p>Lorem ipsum is simple dummy textLorem ipsum is simple dummy textLorem ipsum is simple dummy text</p>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between font-semibold">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-red-500">
            <span>Discount (10%)</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-base border-t pt-3 mt-3">
            <span>Total</span>
            <span className="text-red">${total.toFixed(2)}</span>
          </div>
          <div className="w-full">
            <button onClick={handleContinue} className="flex w-full rounded-full bg-primary hover:bg-primary-90 transition-all delay-150 text-center items-center justify-center h-10 text-white">Continue to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
