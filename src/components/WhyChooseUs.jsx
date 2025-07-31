import React from "react";

// Import your SVG icons
import whychoose1 from "../assets/icons/whychoose1.svg";
import whychoose2 from "../assets/icons/whychoose2.svg";
import whychoose3 from "../assets/icons/whychoose3.svg";
import whychoose4 from "../assets/icons/whychoose4.svg";
import whychoose5 from "../assets/icons/whychoose5.svg";
import whychoose6 from "../assets/icons/whychoose6.svg";

const features = [
  {
    icon: whychoose1,
    title: "Global Delivery",
    description: "We ship across the world, ensuring your favorite furniture reaches your home safely, no matter where you are.",
  },
  {
    icon: whychoose2,
    title: "Free Shipping",
    description: "Enjoy free shipping on all eligible orders — no hidden charges, just beautiful furniture delivered with care.",
  },
  {
    icon: whychoose3,
    title: "24/7 Customer Support",
    description: "Have a question? Our friendly team is available round the clock to help you with any inquiries or issues.",
  },
  {
    icon: whychoose4,
    title: "Daily Email Updates",
    description: "Get the latest deals, trends, and furniture inspiration directly in your inbox — stay updated with ease.",
  },
  {
    icon: whychoose5,
    title: "Easy Payments",
    description: "Multiple secure payment options including UPI, Cards, EMI, and COD to make your shopping hassle-free.",
  },
  {
    icon: whychoose6,
    title: "Monthly Vouchers",
    description: "Sign up and enjoy exclusive monthly discount vouchers on our newest arrivals and bestsellers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1f1d40] mb-10">
        WHY CHOOSE US?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
            <h4 className="font-semibold text-2xl text-[#1f1d40] mb-4">{item.title}</h4>
            <p className="text-base text-gray-600 w-full md:px-20 font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
