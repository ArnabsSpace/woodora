// components/CartGuard.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CartGuard({ children }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  if (!cartItems || cartItems.length === 0) {
    return <Navigate to="/products" replace />;
  }

  return children;
}
