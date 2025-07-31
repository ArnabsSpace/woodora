import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'; // adjust path if needed
import CartBtn from '../../assets/icons/cartbtn.svg'; // assuming it's an SVG

export default function CraftedProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems?.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className="p-6 rounded-xl text-center relative group cursor-pointer bg-[#fefefe]">
      <img
        src={product.thumbnail}
        alt={product.name}
        className="mx-auto w-full max-w-full object-contain mb-4 relative z-10"
      />
      <h4 className="font-semibold text-gray-800 relative z-10">{product.name}</h4>
      <p className="text-black font-bold relative z-10">${product.newPrice}</p>

      {/* Hover Cart Button */}
      <div
        onClick={handleAddToCart}
        className={`absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10 cursor-pointer`}
      >
        <img src={CartBtn} alt="cart btn" className="w-4 h-4" />
      </div>

      {/* Hover Background Effect */}
      <div className="absolute rounded-xl bg-[#fef6f2] lightBg w-full opacity-0 group-hover:opacity-100 h-1/2 bottom-0 left-0 transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1 z-0"></div>
    </div>
  );
}

CraftedProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
