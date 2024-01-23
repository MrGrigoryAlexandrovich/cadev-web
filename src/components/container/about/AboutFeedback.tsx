import React from "react";
import Image from "next/image";
import quote from "public/images/testimonial/quote.png";

const AboutFeedback = () => {
  return (
    <section className="pt-120 h-s-f fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <div className="section__header text-center fade-top">
              <h2 className="title-xxl reveal-title">
                Client&apos;s
                <span className="fw-7">Feedback</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="h-s-f-inner">
              <div className="h-s-f-single fade-top">
                <h4>Rate Me</h4>
                <Image src={quote} alt="Image" />
                <div className="d-flex gr">
                  <div className="review__icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h4>
                    4.7
                    <span>/ 5</span>
                  </h4>
                </div>
              </div>
              <div className="h-s-f-single fade-top">
                <p className="text-md fw-7">Need Single page site design</p>
                <blockquote>
                  <q>
                    He is a good designer with UI/UX experience. He has compiled
                    my landing page in a good looking way.
                  </q>
                </blockquote>
                <div className="rti">
                  <div className="review__icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    <span>luwise</span>
                    london, UK
                  </p>
                </div>
              </div>
              <div className="h-s-f-single brt fade-top">
                <p className="text-md fw-7">Need Single page site design</p>
                <blockquote>
                  <q>
                    He is a good designer with UI/UX experience. He has compiled
                    my landing page.
                  </q>
                </blockquote>
                <div className="rti">
                  <div className="review__icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    <span>luwise</span>
                    london, UK
                  </p>
                </div>
              </div>
              <div className="h-s-f-single brt fade-top">
                <p className="text-md fw-7">Need Single page site design</p>
                <blockquote>
                  <q>
                    He is a good designer with UI/UX experience. He has compiled
                    my landing page.
                  </q>
                </blockquote>
                <div className="rti">
                  <div className="review__icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    <span>luwise</span>
                    london, UK
                  </p>
                </div>
              </div>
              <div className="h-s-f-single fade-top">
                <p className="text-md fw-7">Need Single page site design</p>
                <blockquote>
                  <q>
                    He is a good designer with UI/UX experience. He has compiled
                    my landing page in a good looking way.
                  </q>
                </blockquote>
                <div className="rti">
                  <div className="review__icons">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <p>
                    <span>luwise</span>
                    london, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeedback;
