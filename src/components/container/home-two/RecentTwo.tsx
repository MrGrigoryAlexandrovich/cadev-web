import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/recent/one.png";
import two from "public/images/recent/two.png";

const RecentTwo = () => {
  return (
    <section className="pt-120 recent st-wrap appear-wrapper ">
      <div className="container">
        <div className="row gaper ">
          <div className="col-12 col-lg-5">
            <div className="section__content st-con">
              <span className="sub-title text-capitalize">
                recent completed project
              </span>
              <h2 className="title-xl title-anim">
                Does More Then Ever Platform To Achieve Goal Stages.
              </h2>
              <div className="section__content-cta">
                <div className="section__content-cta">
                  <Link
                    href="contact-us"
                    className="btn anim-btn btn--secondary"
                  >
                    <span className="btn-anim">Hire Us</span>
                    <span className="btn-m">Hire Us</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="recent__thumb st-con">
              <div className="recent__single appear-down">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={one} alt="Image" />
                  </Link>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p className="text-quaternary">
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod molestiae. Quo sed optio quia ducimus aut sed.
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <Link href="services">Web Application</Link>
                    <Link href="services">Branding</Link>
                  </div>
                  <div className="content-footer__right">
                    <Link href="/">Visit Website</Link>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={two} alt="Image" />
                  </Link>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <Link href="case-study-single">sense</Link>
                  </h3>
                  <p className="text-quaternary">
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod molestiae. Quo sed optio quia ducimus aut sed.‍
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <Link href="services">Web Application</Link>
                    <Link href="services">Branding</Link>
                  </div>
                  <div className="content-footer__right">
                    <Link href="/">Visit Website</Link>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={one} alt="Image" />
                  </Link>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p className="text-quaternary">
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod molestiae. Quo sed optio quia ducimus aut sed.‍
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <Link href="services">Web Application</Link>
                    <Link href="services">Branding</Link>
                  </div>
                  <div className="content-footer__right">
                    <Link href="/">Visit Website</Link>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <Link href="service-single">
                    <Image src={two} alt="Image" />
                  </Link>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <Link href="case-study-single">sense</Link>
                  </h3>
                  <p className="text-quaternary">
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod molestiae. Quo sed optio quia ducimus aut sed.‍
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <Link href="services">Web Application</Link>
                    <Link href="services">Branding</Link>
                  </div>
                  <div className="content-footer__right">
                    <Link href="/">Visit Website</Link>
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

export default RecentTwo;
