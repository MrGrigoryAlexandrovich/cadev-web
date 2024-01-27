import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { IAwardComponent, IAwardItem } from "@/models/Awards";

const AwardsAchievement = ({ title, items }: IAwardComponent) => {
  return (
    <section className="awards pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-6">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title-xl title-anim">{title}</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="slide-dots awards-dots justify-content-center justify-content-lg-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="awards__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".awards-dots",
                  clickable: true,
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 2,
                  },
                }}
                className="awards__slider"
              >
                {items.map((item: IAwardItem, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="awards__slider-single">
                      <div className="bn-about-thumb">
                        <Image src={item.image} priority alt="Image" />
                      </div>
                      <div className="bn-about__content">
                        <div className="bn-about__content-left">
                          <h3 className="title-lg">{item.title}</h3>
                        </div>
                        <div className="bn-about__content-right">
                          <ul>
                            {item.subtitles.map(
                              (element: string, index: number) => (
                                <li key={index}>{element}</li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievement;
