import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import groupOfficeOne from "@/assets/groupOfficeOne.jpg";
import groupOfficeTwo from "@/assets/groupOfficeTwo.jpg";
import groupOfficeThree from "@/assets/groupOfficeThree.jpg";
import groupOfficeFour from "@/assets/groupOfficeFour.jpg";
import "swiper/swiper-bundle.css";

const AwardsAchievement = () => {
  return (
    <section className="awards pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-6">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <h2 className="title-xl title-anim">
                      The secret to success
                    </h2>
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
                <SwiperSlide>
                  <div className="awards__slider-single">
                    <div className="bn-about-thumb">
                      <Image src={groupOfficeFour} priority alt="Image" />
                    </div>
                    <div className="bn-about__content">
                      <div className="bn-about__content-left">
                        <h3 className="title-lg">Leadership</h3>
                      </div>
                      <div className="bn-about__content-right">
                        <ul>
                          <li>Set clear goals and expectations</li>
                          <li>Create a positive and supportive environment</li>
                          <li>Delegate effectively</li>
                          <li>Be a role model</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="awards__slider-single">
                    <div className="bn-about-thumb">
                      <Image src={groupOfficeOne} priority alt="Image" />
                    </div>
                    <div className="bn-about__content">
                      <div className="bn-about__content-left">
                        <h3 className="title-lg">Programming skills</h3>
                      </div>
                      <div className="bn-about__content-right">
                        <ul>
                          <li>Lightning-fast performance</li>
                          <li>Rocketfuel Apps</li>
                          <li>Attention to detail</li>
                          <li>Quality code</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="awards__slider-single">
                    <div className="bn-about-thumb">
                      <Image src={groupOfficeThree} priority alt="Image" />
                    </div>
                    <div className="bn-about__content">
                      <div className="bn-about__content-left">
                        <h3 className="title-lg">IT Consulting</h3>
                      </div>
                      <div className="bn-about__content-right">
                        <ul>
                          <li>Improved IT performance</li>
                          <li>Increased business agility</li>
                          <li>Reduced costs</li>
                          <li>Increased innovation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="awards__slider-single">
                    <div className="bn-about-thumb">
                      <Image src={groupOfficeTwo} priority alt="Image" />
                    </div>
                    <div className="bn-about__content">
                      <div className="bn-about__content-left">
                        <h3 className="title-lg">Maintenance</h3>
                      </div>
                      <div className="bn-about__content-right">
                        <ul>
                          <li>Enhanced Stability and Reliability</li>
                          <li>Improved Performance and Efficiency</li>
                          <li>Enhanced Security</li>
                          <li>Reduced Development Costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievement;
