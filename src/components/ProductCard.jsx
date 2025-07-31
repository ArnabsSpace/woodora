import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
import { toggleWishlist } from '../redux/features/wishlistSlice';
import ProdImage1 from '../assets/prodImages/prod1.png';

import HeartFilled from '../assets/icons/heart-filled.svg';
import HeartOutline from '../assets/icons/heart-outline.svg';
import CartBtn from '../assets/icons/cartbtn.svg';

export default function ProductCard({ product }) {
  if (!product) return null;
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

     const cartItems = useSelector((state) => state.cart.cartItems); // ✅ get cart
    const isInCart = cartItems.some((item) => item.id === product.id); // ✅ check in cart

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
      <div className="bg-[#fef6f2] p-4 rounded-xl mb-4 relative">
        <img
          src={product.thumbnail || ProdImage1}
          alt={product.name || 'Product'}
          className="mx-auto max-h-full object-contain cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}
        />
        <div
          className={`absolute top-2 right-2 text-xl cursor-pointer ${
            isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
          }`}
          onClick={() => dispatch(toggleWishlist(product))}
        >
          {/* {isWishlisted ? '❤️' : '♡'} */}
          <img
            src={isWishlisted ? HeartFilled : HeartOutline}
            alt="wishlist icon"
            className="w-6 h-6 inline"
          />
        </div>
        {product.oldPrice && product.newPrice && (
        <div className="absolute bottom-2 right-2 bg-yellow-400 text-primary text-xs font-bold px-2 py-1 rounded-full">
            {Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100)}% OFF
        </div>
        )}
      </div>
      <p className="text-sm text-gray-500">{product.category || 'Category'}</p>
      <h3 className="font-semibold text-gray-800 text-base mb-1 cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>{product.name || 'Unnamed Product'}</h3>
      <div className="flex items-center mb-2">
        {'★★★★★'.split('').map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
      <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4">
        <p className="text-lg font-bold text-gray-800">${product.newPrice || '0.00'}</p>
        <div
          className={`w-10 sm:w-10 h-10 rounded-full transition delay-150 ${
            isInCart
              ? 'bg-amberGold text-primary cursor-default'
              : 'bg-primary hover:bg-primary-90 text-white cursor-pointer'
          } flex items-center justify-center text-xl shadow`}
          onClick={() => {
            if (!isInCart) {
              dispatch(addToCart(product));
            }
          }}
        >
          <img src={CartBtn} alt="cartbtn" className="w-6" />
        </div>

        {/* <div
          className={`w-8 h-8 rounded-full ${
            isInCart ? 'bg-green-500' : 'bg-primary'
          } text-white flex items-center justify-center text-xl shadow cursor-pointer`}
          onClick={() => dispatch(addToCart(product))}
          title={isInCart ? 'Already in Cart' : 'Add to Cart'}
        >
          {isInCart ? '✓' : '+'}
        </div> */}
      </div>
    </div>
  );
}
