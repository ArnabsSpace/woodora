import { useEffect, useState } from "react";
import sliderData from "./sliderData";

export default function BannerSliderManual() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // change every 5 sec

    return () => clearInterval(timer); // Cleanup on unmount
  }, [totalSlides]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const slide = sliderData[currentIndex];

  return (
    <section className={`${slide.bgColor} w-full relative overflow-hidden`}>
      <div className="container mx-auto relative py-12">
        <div className="absoluteBgRight absolute bg-primary z-1 rounded-b-3xl"></div>

        {/* Slide Content */}
        <div className="BannerInnerSlide w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-8 relative z-2 transition-all duration-700">
          {/* Text Section */}
          <div className="flex-1 relative z-10 text-center sm:text-left">
            <p className="text-red-600 font-bold text-lg">
              {slide.price}{" "}
              <span className="line-through text-gray-500">{slide.oldPrice}</span>
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 my-4">{slide.title}</h2>
            <p className="text-gray-600 text-base md:text-lg mb-6">{slide.subtitle}</p>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
              Explore Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 text-center relative">
            <div className="offerCircle rounded-full bg-red absolute z-1 w-40 h-40 p-1 flex items-center justify-center left-1/4">
              <div className="offerCircleInner rounded-full w-full h-full bg-red border border-white p-1">
                <p className="flex items-center flex-col h-full w-full justify-center text-white">
                  <span className="text-lg font-semibold">up to</span>{" "}
                  <span className="text-5xl font-bold">50%</span>{" "}
                  <span className="text-sm">on Selected Item</span>
                </p>
              </div>
            </div>
            <img
              src={slide.image}
              alt="Chair"
              className="mx-auto max-w-2xl w-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            ◀
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            ▶
          </button>
        </div> */}

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full ${
                index === currentIndex ? "bg-red w-6" : "bg-amberGold w-3"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absoluteBgLeft absolute left-0 bg-amberGold w-40 h-40 bottom-0 rounded-tr-3xl z-0"></div>
    </section>
  );
}
