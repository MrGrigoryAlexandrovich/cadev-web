import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderFour = () => {
  return (
    <div className="text-slider-wrapper text-slide-alt">
      <div className="text-slider-w">
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
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-slider__single">
              <h2 className="light-title-xxl text-uppercase fw-7">
                good things take time
              </h2>
              <span></span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TextSliderFour;
