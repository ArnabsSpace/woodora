// File: src/components/QuantitySelector.jsx
import { useDispatch } from 'react-redux';
import { incrementQty, decrementQty } from '../redux/features/cartSlice';

export default function QuantitySelector({ productId, quantity, setQuantity, isInCart }) {
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (isInCart) {
      dispatch(decrementQty(productId));
    } else {
      setQuantity(prev => Math.max(1, prev - 1));
    }
  };

  const handleIncrease = () => {
    if (isInCart) {
      dispatch(incrementQty(productId));
    } else {
      setQuantity(prev => Math.min(9, prev + 1));
    }
  };

  return (
    <div className="flex items-center w-32 border border-gray-300 rounded-full overflow-hidden">
      <button
        onClick={handleDecrease}
        className="w-10 h-10 text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        –
      </button>
      <div className="flex-1 text-center font-medium">{quantity}</div>
      <button
        onClick={handleIncrease}
        className="w-10 h-10 text-lg font-bold text-gray-700 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
}
