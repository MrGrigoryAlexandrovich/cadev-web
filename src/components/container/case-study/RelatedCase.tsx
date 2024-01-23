import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import done from "public/images/projects/d-one.png";
import dtwo from "public/images/projects/d-two.png";
import dthree from "public/images/projects/d-three.png";
import dfour from "public/images/projects/d-four.png";
import dfive from "public/images/projects/d-five.png";

const RelatedCase = () => {
  return (
    <div className="project-d__slider-w section__content-cta">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        speed={1200}
        loop={true}
        roundLengths={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          1400: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
        }}
        className="project-d__slider"
      >
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={done} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dtwo} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dthree} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dfour} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dfive} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={done} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dtwo} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dthree} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dfour} alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-d__slider-single">
            <Image src={dfive} alt="Image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RelatedCase;
