
import ProdImage1 from '../../assets/prodImages/prod1.png';
import ProdImage2 from '../../assets/prodImages/prod3.png';
import ProdImage3 from '../../assets/prodImages/prod5.png';
import ProdImage4 from '../../assets/prodImages/prod8.png';


export default function HomePageProductSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Best Selling Product
        </h2>

        {/* Category Pills */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {["Chair", "Table", "Beds", "Sofa", "Lamp"].map((item, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-full border border-primary text-sm font-medium transition ${
                item === "Chair" ? "bg-primary text-white" : "bg-[#fdf4ec] text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Product 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
            <div className="bg-[#fef6f2] p-4 rounded-xl mb-4 relative">
              <img
                src={ProdImage1}
                alt="Blue Velvet Shell Armchair"
                className="mx-auto max-h-full object-contain"
              />
              <div className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer">♡</div>
              <div className="absolute bottom-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                50% OFF
              </div>
            </div>
            <p className="text-sm text-gray-500">Chair</p>
            <h3 className="font-semibold text-gray-800 text-base mb-1">Blue Velvet Shell Armchair</h3>
            <div className="flex items-center mb-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">$392</p>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow cursor-pointer">+</div>
            </div>
          </div>

          {/* Duplicate Product Cards - just change image & name */}
          {/* Product 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
            <div className="bg-[#fef6f2] p-4 rounded-xl mb-4 relative">
              <img
                src={ProdImage2}
                alt="Blue Velvet Shell Armchair"
                className="mx-auto max-h-full object-contain"
              />
              <div className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer">♡</div>
              <div className="absolute bottom-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                50% OFF
              </div>
            </div>
            <p className="text-sm text-gray-500">Chair</p>
            <h3 className="font-semibold text-gray-800 text-base mb-1">Blue Velvet Shell Armchair</h3>
            <div className="flex items-center mb-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">$392</p>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow cursor-pointer">+</div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
            <div className="bg-[#fef6f2] p-4 rounded-xl mb-4 relative">
              <img
                src={ProdImage3}
                alt="Blue Velvet Shell Armchair"
                className="mx-auto max-h-full object-contain"
              />
              <div className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer">♡</div>
              <div className="absolute bottom-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                50% OFF
              </div>
            </div>
            <p className="text-sm text-gray-500">Chair</p>
            <h3 className="font-semibold text-gray-800 text-base mb-1">Blue Velvet Shell Armchair</h3>
            <div className="flex items-center mb-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">$392</p>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow cursor-pointer">+</div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition relative">
            <div className="bg-[#fef6f2] p-4 rounded-xl mb-4 relative">
              <img
                src={ProdImage4}
                alt="Blue Velvet Shell Armchair"
                className="mx-auto max-h-full object-contain"
              />
              <div className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500 cursor-pointer">♡</div>
              <div className="absolute bottom-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                50% OFF
              </div>
            </div>
            <p className="text-sm text-gray-500">Chair</p>
            <h3 className="font-semibold text-gray-800 text-base mb-1">Blue Velvet Shell Armchair</h3>
            <div className="flex items-center mb-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold text-gray-800">$392</p>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow cursor-pointer">+</div>
            </div>
          </div>

        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="text-primary text-sm font-medium underline hover:text-primary-dark transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
