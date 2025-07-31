import { Navigate, useLocation } from 'react-router-dom';

export default function RequireOrder({ children }) {
  const location = useLocation();
  const orderHistory = localStorage.getItem('orderConfirmationHistory');

  const hasOrder = orderHistory && JSON.parse(orderHistory)?.length > 0;

  if (!hasOrder) {
    return <Navigate to="/products" replace state={{ from: location }} />;
  }

  return children;
}
