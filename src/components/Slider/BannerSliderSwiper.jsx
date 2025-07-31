import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ExploreButton from '../ExploreButton';

import sliderData from "./sliderData";

export default function BannerSliderSwiper() {
  return (
    <div className="w-full">
        
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className={`${slide.bgColor} w-full relative`}>
              <div className="container mx-auto relative py-12">
                <div className="absoluteBgRight absolute bg-primary z-1 rounded-b-3xl"></div>
                <div className="BannerInnerSlide w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-8 relative z-2">
                  {/* Text Section */}
                  <div className="flex-1 relative z-10 text-center sm:text-left">
                    <p className="text-red-600 font-bold text-lg">
                      {slide.price}{" "}
                      <span className="line-through text-gray-500">
                        {slide.oldPrice}
                      </span>
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 my-4">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                      {slide.subtitle}
                    </p>
                    <ExploreButton/>
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
                      className="mx-auto max-w-xl w-full object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absoluteBgLeft absolute left-0 bg-amberGold w-40 h-40 bottom-0 rounded-tr-3xl z-0"></div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
