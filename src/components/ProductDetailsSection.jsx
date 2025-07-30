import { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuantitySelector from './QuantitySelector';

export default function ProductDetailsSection() {
  const navigate = useNavigate();
  const { id } = useParams();

  const product = products.find((prod) => prod.id === id);
  const cartItems = useSelector((state) => state.cart?.cartItems || []);
  const isInCart = product && cartItems.some(item => item.id === product.id); // ✅ Safe

  if (!product) {
    return <p className="text-center py-10">Product not found.</p>;
  }

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.gallery[0]);
  const [activeTab, setActiveTab] = useState('details');

 
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    };

 

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top section with image and details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Gallery */}
        <div className='relative'>
          <img src={`${mainImage}`} alt={product.name} className="w-full h-auto rounded-lg border" />
          <div className="flex gap-2 mt-4 absolute bottom-4 left-1/2 -translate-x-1/2 w-fit">
            {product.gallery.map((img, index) => (
              <img
                key={index}
                src={`${img}`}
                alt=""
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover rounded border cursor-pointer ${mainImage === img ? 'border-black' : 'border-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-2">{product.name}</h2>
          <div className="flex items-center mb-6">
            <span className="text-yellow-400">★</span>
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.ratingCount} reviews)
            </span>
          </div>
          <p className='w-full mb-4 text-lg font-semibold'>{ product.additionalInfo.dimensions }</p>
          <p className='w-full mb-4 text-lg font-semibold'>{ product.additionalInfo.material }</p>
          <p className='w-full mb-4 text-lg font-semibold'>{ product.additionalInfo.returnPolicy }</p>
          <p className="mt-4 text-3xl font-bold text-gray-800">${product.newPrice.toFixed(2)}</p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block mb-2 text-sm font-medium">Quantity:</label>
           
            
            <QuantitySelector
              productId={product.id}
              quantity={
                isInCart
                  ? cartItems.find(item => item.id === product.id)?.quantity || 1
                  : quantity
              }
              setQuantity={setQuantity}
              isInCart={isInCart}
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            {isInCart ? (
            <button
                onClick={() => navigate('/cart')}
                className="bg-amberGold text-primary px-6 py-2 rounded-full hover:bg-secondary border border-amberGold font-semibold transition w-1/2 h-12"
            >
                Go to Cart
            </button>
            ) : (
            <button
                onClick={handleAddToCart}
                className="bg-primary border border-primary text-white px-6 py-2 rounded-full hover:bg-white hover:text-primary font-semibold  transition w-1/2 h-12"
            >
                Add to Cart
            </button>
            )}
            <button className="bg-white text-praimary px-6 py-2 rounded-full hover:bg-primary hover:text-white font-semibold border border-primary transition w-1/2 h-12">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="mt-12">
            {/* Tab Buttons */}
            <div className="flex gap-10 border-b pb-2 text-gray-700 font-semibold">
                <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 border-b-2 ${activeTab === 'details' ? 'border-black text-black' : 'border-transparent'}`}
                >
                Product Detail
                </button>
                <button
                onClick={() => setActiveTab('delivery')}
                className={`pb-2 border-b-2 ${activeTab === 'delivery' ? 'border-black text-black' : 'border-transparent'}`}
                >
                Delivery and Return
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                {activeTab === 'details' && (
                <>
                    <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p>{product.description}</p>
                    </div>
                    <div>
                    <h4 className="font-medium mb-2">Features</h4>
                    <ul className="list-disc ml-5">
                        {product.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                        ))}
                    </ul>
                    </div>
                </>
                )}

                {activeTab === 'delivery' && (
                <>
                    <div>
                    <h4 className="font-medium mb-2">Return Policy</h4>
                    <p>{product.additionalInfo.returnPolicy}</p>
                    </div>
                    <div>
                    <h4 className="font-medium mb-2">Shipping Info</h4>
                    <p>Delivery usually takes 4-7 business days. Local delivery options available.</p>
                    </div>
                </>
                )}
            </div>
           </div>
    </div>
  );
}
