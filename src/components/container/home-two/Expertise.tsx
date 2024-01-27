import React from "react";
import Image from "next/image";
import htmlLogo from "@/assets/html-logo.png";
import cssLogo from "@/assets/css-logo.png";
import javascriptLogo from "@/assets/js-logo.png";
import reactLogo from "@/assets/react-logo.png";
import nodeLogo from "@/assets/node-logo.png";
import nextLogo from "@/assets/next-logo.png";

const Expertise = () => {
  return (
    <section className="pt-120 pb-5 expertise fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center">
              <span className="sub-title text-capitalize">
                explore my expertise !
              </span>
              <h2 className="title-xl fw-5 reveal-title">
                Common Technologies
              </h2>
            </div>
          </div>
        </div>
        <div className="row gaper justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={htmlLogo} priority alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">HTML</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={cssLogo} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">CSS</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={javascriptLogo} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">Javascript</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={reactLogo} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">React</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={nodeLogo} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">Node</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div className="expertise__single text-center fade-top">
              <div className="thumb">
                <Image src={nextLogo} alt="Image" />
              </div>
              <div className="content">
                <h4 className="title-md">Next</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
