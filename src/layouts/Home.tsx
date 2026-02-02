import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import swipper1 from "../../src/assets/images/swipper1.jpg";
import swipper2 from "../../src/assets/images/swipper2.jpg";
import swipper3 from "../../src/assets/images/swipper3.jpg";

export default function SimpleSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      speed={1200}
      slidesPerView={1}
      navigation
      pagination={{ clickable:false }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="h-90 w-full"
    >
      {[swipper1, swipper2, swipper3].map((img, i) => (
        <SwiperSlide key={i} className="relative">
          
          {/* Image */}
          <img
            src={img}
            alt={`slide-${i}`}
            className="h-full w-full object-contain scale-105 transition-transform duration-[5000ms]"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Glass Card */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 text-center text-white shadow-2xl max-w-lg animate-fadeUp">
              
              <h1 className="text-5xl font-extrabold tracking-wide">
                Creative Design
              </h1>

              <p className="mt-4 text-lg opacity-90">
                Modern • Clean • Professional UI
              </p>

              <button className="mt-6 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Explore More
              </button>

            </div>
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
}
