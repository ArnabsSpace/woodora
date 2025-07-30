// src/components/TestimonialsSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from "./testimonialData";

export default function TestimonialsSlider() {
  return (
    <section className="py-16 bg-white">
      <div className="container-fluid mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          What our Customer Say
        </h2>
        <Swiper className="pb-8"
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
         
          modules={[Autoplay]}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl border-lightBg shadow hover:shadow-lg transition-all border relative h-full p-8">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-xl text-gray-800">{item.name}</h4>
                  <span className="ml-auto flex items-center text-sm font-semibold text-yellow-500">
                    ★ <span className="text-primary pl-2">{item.rating}</span>
                  </span>
                </div>
                <p className="text-gray-600 text-xl font-medium leading-relaxed">{item.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
