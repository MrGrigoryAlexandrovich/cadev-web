import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/poster.png";

const DetailsPoster = () => {
  return (
    <div className="poster__slider-wrapper">
      <div className="poster__slider-w">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={1200}
          loop={true}
          roundLengths={false}
          centeredSlides={false}
          centeredSlidesBounds={false}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".next-project-d",
            prevEl: ".prev-project-d",
          }}
          className="poster__slider"
        >
          <SwiperSlide>
            <div className="poster__slider-single">
              <Image src={poster} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="poster__slider-single">
              <Image src={poster} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="poster__slider-single">
              <Image src={poster} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="poster__slider-single">
              <Image src={poster} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-project-d">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-project-d">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default DetailsPoster;
