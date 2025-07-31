import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function RelatedProduct({ title = "Related Products", category, limit = 4 }) {
  const related = products
    .filter(p => p.category === category)
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="w-full bg-white py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-xl md:text-3xl font-bold text-primary mb-10 text-center">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
