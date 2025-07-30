// components/DeleteCartItemButton.jsx
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";
import deleteIcon from '../assets/icons/deleteIcon.svg';

export default function DeleteCartItemButton({ productId, className = "" }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeFromCart(productId));
  };

  return (
    <button
      onClick={handleDelete}
      className={`text-red-500 hover:text-red-700 transition ${className}`}
      title="Remove from cart"
    >
      <img src={deleteIcon} alt="deleteIcon" className="w-6 h-6" />
    </button>
  );
}
