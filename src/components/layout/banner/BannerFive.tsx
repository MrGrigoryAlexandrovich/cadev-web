import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerfivethumb from "public/images/banner/banner-five-thumb.png";

const BannerFive = () => {
  return (
    <section className="banner-five bg-img">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-five__inner bg-img">
              <div className="row">
                <div className="col-12 col-lg-9 col-xxl-7">
                  <div className="banner-five__content">
                    <div className="s-t">
                      <i className="fa-solid fa-bahai"></i>
                      <span className="text-xs text-quaternary fw-7">
                        Verified by:
                      </span>
                      <span className="fw-7 text-xs text-tertiary">
                        Psychology Today
                      </span>
                    </div>
                    <h1 className="light-title-sm title-anim">
                      Get Treatment For All Your{" "}
                      <span className="fw-7 text-quinary">
                        Mental Healthcare
                      </span>
                    </h1>
                    <p className="title-sm">
                      Your journey to emotional wellness may start here
                    </p>
                    <div className="section__content-cta">
                      <Link
                        href="contact-us"
                        className="btn btn--secondary anim-btn"
                      >
                        <span className="btn-anim">book online</span>
                        <span className="btn-m">book online</span>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Image src={bannerfivethumb} alt="Image" className="bn-f" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFive;
