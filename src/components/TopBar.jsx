import { useState } from "react";
import deliveryTop from "../assets/icons/Delivery.svg";
import closewhite from "../assets/icons/closeWhite.svg";

export default function TopBar() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="bg-primary-90 text-white text-base py-2 px-4 sm:flex justify-between items-center font-montserrat">
      <div className="container w-full mx-auto relative px-4 py-2">
        <p className="flex items-start justify-center text-center text-base text-white">
          <img src={deliveryTop} alt="delivery" className="mr-2 w-6 h-6" />
          <span>
            Free delivery on all orders over $50 with code easter checkout
          </span>
        </p>
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <img src={closewhite} alt="closeicon" className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
