import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import logo from "public/images/testimonial/logo.png";
import aone from "public/images/testimonial/a-one.png";
import atwo from "public/images/testimonial/a-two.png";

const TestimonialFive = () => {
  return (
    <section className="pt-120 pb-0 testimonial-two testimonial-alt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-6">
                  <div className="section__header mb-0 text-center text-lg-start">
                    <span className="sub-title">client&apos;s feedback</span>
                    <h2 className="title-xxl title-anim">
                      What My Clients Say
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="slide-dots testimonial-dots justify-content-center justify-content-lg-end"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial__slider-wrapper">
        <div className="testimonial-slider-w">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            slidesPerGroup={2}
            speed={1200}
            loop={true}
            roundLengths={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".testimonial-dots",
              clickable: true,
            }}
            className="testimonial-slider"
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
                  Aiko&apos;s expertise in web design breathed life into our
                  brand. She captured our vision with precision, and delivered a
                  website that stands out among
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
    </section>
  );
};

export default TestimonialFive;
