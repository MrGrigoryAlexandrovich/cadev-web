import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import googlecloud from "public/images/company/google-cloud.png";
import googlepartner from "public/images/company/google-partner.png";
import metapartner from "public/images/company/meta-partner.png";
import tiktok from "public/images/company/tiktok.png";
import shopify from "public/images/company/shopify.png";
import bannerfourthumb from "public/images/banner/banner-four-thumb.png";
gsap.registerPlugin(ScrollTrigger);

const BannerFour = () => {
  useEffect(() => {
    const applyBannerAnimation = () => {
      const bannerFourElement = document.querySelector(".banner-four");
      const bannerThumbElement = document.querySelector(".banner-four-thumb");

      if (bannerFourElement && bannerThumbElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: bannerFourElement,
            start: "center center",
            end: "+=60%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(bannerThumbElement, {
          y: "120px",
          duration: 4,
        });
      }
    };

    applyBannerAnimation();
  }, []);

  return (
    <section className="banner-four bg-img">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-four-inner pb-120">
              <div className="row">
                <div className="col-12 col-xxl-9">
                  <div className="banner__content-four text-start">
                    <h1 className="light-title-xxl title-anim">
                      <span className="fw-7">Freelance Digital</span>
                      Marketer
                    </h1>
                    <div className="pt-120 banner-content__inner">
                      <div className="content">
                        <h4 className="title-md title-anim">
                          CURRENTLY AVAILABLE FOR FREELANCE WORLDWIDE 🌎
                        </h4>
                      </div>
                      <div className="arrow-wrapper">
                        <span className="arrow"></span>
                      </div>
                      <form action="#" method="post">
                        <div className="input-group">
                          <input
                            type="email"
                            name="subs-mail"
                            id="subsMail"
                            placeholder="Your Email"
                            required
                          />
                          <button type="submit">
                            <i className="fa-solid fa-paper-plane"></i>
                            <span className="d-none d-sm-inline-flex">
                              Subscribe
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="banner-sponsor pt-120">
                      <h6 className="title-anim">COMPANIES I WORKED WITH</h6>
                      <div className="spon-wrap-w">
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
                              slidesPerView: 5,
                            },
                            992: {
                              slidesPerView: 4,
                            },
                            576: {
                              slidesPerView: 2,
                            },
                          }}
                          className="spon-wrap"
                        >
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={googlecloud} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={googlepartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={metapartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={shopify} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={tiktok} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={googlecloud} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={googlepartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={metapartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={shopify} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={tiktok} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={googlepartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={metapartner} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={shopify} alt="Image" />
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="spon-single">
                              <Image src={tiktok} alt="Image" />
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={bannerfourthumb}
                alt="Image"
                className="banner-four-thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
