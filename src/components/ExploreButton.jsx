// components/ExploreButton.jsx
import { useNavigate } from "react-router-dom";

export default function ExploreButton({ label = "Explore Now", className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products"); // or your correct shop route
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-primary text-white px-6 py-2 h-12 max-w-[200px] w-full rounded-full hover:bg-primary-90 transition ${className}`}
    >
      {label}
    </button>
  );
}
