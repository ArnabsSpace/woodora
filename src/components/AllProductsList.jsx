import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function AllProductsList({ products }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
    setTimeout(() => {
      window.scrollBy({ top: 300, behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="MainProdSection py-4">
      <div className="container mx-auto">
        <h2 className="font-bold text-center py-8 text-3xl">Result For Furniture</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-90 transition mt-8 -mb-8 w-44 h-12"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
