import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSlider = () => {
  return (
    <div className="text-slider-wrapper">
      <div className="text-slider-alt">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={7000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="text-slider"
        >
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">WEB DEVELOPER</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">UI Designer</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">Freelancer</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">Digital Marketter</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">Psychiatrist</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">WEB DEVELOPER</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-lg">
                <Link href="service-single">UI Designer</Link>
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TextSlider;
