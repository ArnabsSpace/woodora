import React from 'react';
import AboutBanner from '../assets/images/aboutRight.png';

export default function FounderBlock() {
  return (
    <section className="py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center w-full mb-1 inline-block pb-8">
          Who We Are
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Block */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Arnab Roy – FOUNDER</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Born with a deep passion for design and craftsmanship, Arnab Roy founded our company to bring timeless, high-quality furniture to homes and spaces across India and beyond. His vision centers around user-friendly, functional pieces that inspire comfort and style.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rooted in aesthetic sensibilities and built on a belief in integrity, durability, and modern minimalism, every product is the result of careful selection and design, created to meet the highest standards of quality and elegance.
            </p>
          </div>

          {/* Image Block */}
          <div>
            <img
              src={AboutBanner}
              alt="Founder"
              className="w-full h-auto min-h-[400px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
