import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutButton({ className = "", onAfterLogout }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("orderConfirmationHistory");
    localStorage.removeItem("orderConfirmation");
    if (onAfterLogout) onAfterLogout(); // e.g. close dropdown
    navigate(0); // hard refresh to reset app state
  };

  return (
    <button
      onClick={handleLogout}
      className={`px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition ${className}`}
    >
      Logout
    </button>
  );
}
