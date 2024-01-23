import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import quote from "public/images/testimonial/quote.png";
import logo from "public/images/testimonial/logo.png";
import aone from "public/images/testimonial/a-one.png";
import atwo from "public/images/testimonial/a-two.png";

const TestimonialTwo = () => {
  return (
    <section className="testimonial-two pt-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-two__inner bg-img">
              <div className="section__header">
                <span className="sub-title">clients feedback</span>
                <h2 className="title-xl title-anim">What My Clients Say</h2>
              </div>
              <Image src={quote} alt="Image" className="quote" />
              <div className="testimonial-two-wrapper">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-2 col-xxl-1">
                    <div className="slide-dots testimonial-two-dots flex-lg-column"></div>
                  </div>
                  <div className="col-12 col-lg-10 col-xxl-11">
                    <div className="testimonial-two__slider-wrap">
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
                          el: ".testimonial-two-dots",
                          clickable: true,
                        }}
                        breakpoints={{
                          992: {
                            slidesPerView: 2,
                          },
                        }}
                        className="testimonial-two__slider"
                      >
                        <SwiperSlide>
                          <div className="testimonial-two-single">
                            <div className="test-thumb">
                              <Image src={logo} alt="Image" />
                            </div>
                            <h3 className="title-md">
                              Aiko&apos;s web design brought our brand
                            </h3>
                            <p>
                              Aiko&apos;s expertise in web design breathed life
                              into our brand. She captured our vision with
                              precision, and delivered a website that stands out
                              among
                            </p>
                            <hr />
                            <div className="meta">
                              <div className="thumb">
                                <Image src={aone} alt="Image" />
                              </div>
                              <div className="content">
                                <p>Anthony D. Saltz</p>
                                <p>Creative Director, Tech base inc.</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="testimonial-two-single">
                            <div className="test-thumb">
                              <Image src={logo} alt="Image" />
                            </div>
                            <h3 className="title-md">
                              Aiko&apos;s web design brought our brand
                            </h3>
                            <p>
                              Aiko&apos;s expertise in web design breathed life
                              into our brand. She captured our vision with
                              precision, and delivered a website that stands out
                              among
                            </p>
                            <hr />
                            <div className="meta">
                              <div className="thumb">
                                <Image src={atwo} alt="Image" />
                              </div>
                              <div className="content">
                                <p>Anthony D. Saltz</p>
                                <p>Creative Director, Tech base inc.</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="testimonial-two-single">
                            <div className="test-thumb">
                              <Image src={logo} alt="Image" />
                            </div>
                            <h3 className="title-md">
                              Aiko&apos;s web design brought our brand
                            </h3>
                            <p>
                              Aiko&apos;s expertise in web design breathed life
                              into our brand. She captured our vision with
                              precision, and delivered a website that stands out
                              among
                            </p>
                            <hr />
                            <div className="meta">
                              <div className="thumb">
                                <Image src={aone} alt="Image" />
                              </div>
                              <div className="content">
                                <p>Anthony D. Saltz</p>
                                <p>Creative Director, Tech base inc.</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="testimonial-two-single">
                            <div className="test-thumb">
                              <Image src={logo} alt="Image" />
                            </div>
                            <h3 className="title-md">
                              Aiko&apos;s web design brought our brand
                            </h3>
                            <p>
                              Aiko&apos;s expertise in web design breathed life
                              into our brand. She captured our vision with
                              precision, and delivered a website that stands out
                              among
                            </p>
                            <hr />
                            <div className="meta">
                              <div className="thumb">
                                <Image src={atwo} alt="Image" />
                              </div>
                              <div className="content">
                                <p>Anthony D. Saltz</p>
                                <p>Creative Director, Tech base inc.</p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
