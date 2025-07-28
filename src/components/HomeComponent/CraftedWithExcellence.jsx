import ProdImage from '../../assets/prodImages/prod1.png';
import ProdImage2 from '../../assets/prodImages/prod3.png';
import ProdImage3 from '../../assets/prodImages/prod5.png';

export default function CraftedWithExcellence() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1 max-w-[400px] text-center sm:text-left">
          <p className="text-sm text-primary font-medium uppercase mb-2 tracking-widest">
            Namkeit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Crafted with <br className="hidden md:block" />
            <span className="text-primary">Excellence.</span>
          </h2>
          <p className="text-gray-600 mb-6">
            From premium oak to eco-friendly fabrics, every Namkeit piece is built to last —
            blending timeless design with reliable durability.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary-dark transition">
            Explore Now
          </button>
        </div>

        {/* Product Cards Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
          
          {/* Product 1 with hover effect */}
          <div className="p-6 rounded-xl text-center relative group cursor-pointer">
            <img
              src={ProdImage}
              alt="Nordic Chair"
              className="mx-auto w-full max-w-full object-contain mb-4 relative z-10"
            />
            <h4 className="font-semibold text-gray-800 relative z-10">Nordic CHAIR</h4>
            <p className="text-black font-bold relative z-10">$50.00</p>

            {/* Hover Plus Button */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10 cursor-pointer">
              +
            </div>
            <div className='absolute rounded-xl bg-[#fef6f2] lightBg w-full opacity-0 group-hover:opacity-100 h-1/2 bottom-0 left-0 transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1 z-0'></div>
          </div>

          {/* Product 2 */}
          <div className="p-6 rounded-xl text-center relative group cursor-pointer">
            <img
              src={ProdImage2}
              alt="Nordic Chair"
              className="mx-auto w-full max-w-full object-contain mb-4 relative z-10"
            />
            <h4 className="font-semibold text-gray-800 relative z-10">Nordic CHAIR</h4>
            <p className="text-black font-bold relative z-10">$50.00</p>

            {/* Hover Plus Button */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10 cursor-pointer">
              +
            </div>
            <div className='absolute rounded-xl bg-[#fef6f2] lightBg w-full opacity-0 group-hover:opacity-100 h-1/2 bottom-0 left-0 transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1 z-0'></div>
          </div>

          {/* Product 3 */}
          <div className="p-6 rounded-xl text-center relative group cursor-pointer">
            <img
              src={ProdImage3}
              alt="Nordic Chair"
              className="mx-auto w-full max-w-full object-contain mb-4 relative z-10"
            />
            <h4 className="font-semibold text-gray-800 relative z-10">Nordic CHAIR</h4>
            <p className="text-black font-bold relative z-10">$50.00</p>

            {/* Hover Plus Button */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-white text-lg opacity-0 group-hover:opacity-100 transition duration-300 z-10 cursor-pointer">
              +
            </div>
            <div className='absolute rounded-xl bg-[#fef6f2] lightBg w-full opacity-0 group-hover:opacity-100 h-1/2 bottom-0 left-0 transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1 z-0'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
