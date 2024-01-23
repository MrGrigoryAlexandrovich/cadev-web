import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/sponsor/one.png";
import two from "public/images/sponsor/two.png";
import three from "public/images/sponsor/three.png";
import four from "public/images/sponsor/four.png";
import five from "public/images/sponsor/five.png";
import six from "public/images/sponsor/six.png";

const SponsorThree = () => {
  return (
    <div className="sponsor fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="sponsor__inner fade-top">
              <div className="section__header text-center">
                <span className="subtitle">Brands</span>
                <h4 className="title-md title-anim">I Worked With</h4>
              </div>
              <div className="sponsor__slider-wrap">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={1200}
                  loop={true}
                  roundLengths={true}
                  centeredSlides={true}
                  centeredSlidesBounds={false}
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    1200: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                  }}
                  className="sponsor__slider"
                >
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={one} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={two} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={three} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={four} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={five} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={six} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={one} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={two} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={three} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={four} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={five} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sponsor__slider-item">
                      <Image src={six} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default SponsorThree;
