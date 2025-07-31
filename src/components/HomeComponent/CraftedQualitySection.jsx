import { useEffect, useRef, useState } from "react";
import woodwork from "../../assets/images/woodwork.png";
import sofaImage from "../../assets/images/sofaImage.png";
import ExploreButton from '../ExploreButton';

export default function CraftedQualitySection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 1000;
    const startTime = performance.now();

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCounts({
        experience: Math.floor(progress * 20),
        clients: Math.floor(progress * 483),
        projects: Math.floor(progress * 150),
      });
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-start h-full gap-2">
          <p className="text-sm font-semibold text-amberGold mb-0">Our Product</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
            Crafted by talented hands &{" "}
            <span className="block text-black">premium quality materials</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            At <strong>Woodora</strong>, every piece is a reflection of skillful craftsmanship and
            thoughtful design. We use only the finest materials to ensure long-lasting beauty and
            comfort in every product.
          </p>
          <ExploreButton className="mb-12"/>
          <img
            src={woodwork}
            alt="Woodwork craftsmanship"
            className="rounded-xl w-full h-full object-cover "
          />
          
        </div>

        {/* Right Images */}
        <div className="gap-4 sm:gap-6 flex flex-col">
            {/* Stats */}
          <div className="mt-4 mb-8 flex flex-col sm:flex-row sm:justify-end gap-8">
            {[
              { value: counts.experience + "+", label: "Years Experience" },
              { value: counts.clients, label: "Happy Clients" },
              { value: counts.projects + "+", label: "Projects Finished" },
            ].map((item, idx) => (
              <div key={idx} className="text-left">
                <h3 className="text-3xl font-extrabold text-primary">{item.value}</h3>
                <p className="text-sm font-medium text-amberGold">{item.label}</p>
              </div>
            ))}
          </div>
          
          <img
            src={sofaImage}
            alt="Sofa premium quality"
            className="rounded-xl w-full h-full object-cover mt-4 sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
}
