import React, { useEffect, useState } from 'react';
import CallIcon from '../assets/icons/Call.svg';
import ChatIcon from '../assets/icons/chat.svg';
import GuaranteeIcon from '../assets/icons/guranty.svg';

const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-primary text-left">{count}+</p>
      <p className="text-sm md:text-base text-primary">{label}</p>
    </div>
  );
};

export default function WhoWeAre() {
  return (
    <section className="py-12 font-montserrat bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Title & Counters */}
        <div>
          <h4 className="text-amberGold font-semibold mb-2">Our Mission</h4>
          <h2 className="text-3xl md:text-5xl font-bold md:leading-snug mb-12">
            Our team dedicated to <br /> help find smart home product
          </h2>

          <div className="flex justify-between max-w-md gap-4">
            <Counter end={20} label="Years Experience" />
            <Counter end={483} label="Happy Clients" />
            <Counter end={150} label="Project Finished" />
          </div>
        </div>

        {/* Right: Feature List with Icons */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 mb-10">
            <img src={CallIcon} alt="Support Icon" className="w-10 h-10 mt-1" />
            <div>
              <h5 className="font-bold text-2xl mb-4">24/7 Supports</h5>
              <p className="text-gray-600 text-xl">
                24/7 support means a support service that is provided 24 hours a day and 7 days a week.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-10">
            <img src={ChatIcon} alt="Consultation Icon" className="w-10 h-10 mt-1" />
            <div>
              <h5 className="font-bold text-2xl mb-4">Free Consultation</h5>
              <p className="text-gray-600 text-xl">
                A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-10">
            <img src={GuaranteeIcon} alt="Guarantee Icon" className="w-10 h-10 mt-1" />
            <div>
              <h5 className="font-bold text-2xl mb-4">Overall Guarantee</h5>
              <p className="text-gray-600 text-xl">
                The comprehensive guarantee is required for impact, workmanship, brand partnership, and specific use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
