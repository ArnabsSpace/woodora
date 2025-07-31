import { useState } from 'react';
import products from '../../data/products';
import ProductCard from '../ProductCard';

export default function HomePageProductSection() {
  const categories = [...new Set(products.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = products
    .filter(p => p.category === selectedCategory)
    .slice(0, 4);

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Best Selling Product
        </h2>

        {/* Dynamic Pills */}
        <div className="flex justify-start sm:justify-center flex-nowrap gap-8 sm:gap-3 mb-10 bg-lightBg rounded-full w-full sm:w-fit mx-auto p-4 overflow-x-auto scrollbar-none scroll-smooth scrollbar-hide">
          {categories.map((item, idx) => (
            <button
                key={idx}
                onClick={() => setSelectedCategory(item)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition delay-100 hover:bg-white hover:text-black ${
                  selectedCategory === item ? 'bg-white text-primary' : 'text-primary bg-lightBg'
                }`}
              >
                {item}
            </button>
          ))}
</div>


        {/* Filtered Product Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All (Optional) */}
        {/* <div className="text-center mt-10">
          <button className="text-primary text-sm font-medium underline hover:text-primary-dark transition">
            View All
          </button>
        </div> */}
      </div>
    </section>
  );
}
