import React from "react";
import Image from "next/image";
import php from "public/images/expertise/php.png";
import py from "public/images/expertise/py.png";
import word from "public/images/expertise/word.png";
import java from "public/images/expertise/java.png";
import flu from "public/images/expertise/flu.png";

const Expertise = () => {
  return (
    <section className="pt-120  expertise fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center">
              <span className="sub-title text-capitalize">
                explore my expertise !
              </span>
              <h2 className="title-xl fw-5 reveal-title">My Advantages</h2>
            </div>
          </div>
        </div>
        <div className="row gaper justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={php} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">php 6.0.2</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={php} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">php 6.0.2</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={py} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">python 3.0</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={word} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">WordPress</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={java} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">java script</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={flu} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">Flutter App</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
