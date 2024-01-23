import React from "react";
import Image from "next/image";
import thumb from "public/images/case/thumb.png";

const ProcessThree = () => {
  return (
    <section className="pt-120 pb-120 process fade-wrapper">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="process__content">
              <div className="section__header">
                <span className="subtitle">My Working Process</span>
                <h4 className="title-md title-anim">
                  Your Dream Website In Just Few Steps
                </h4>
              </div>
              <div className="process-wrap">
                <div className="process__single fade-top">
                  <h4 className="title-md">concept</h4>
                  <p className="text-md senary-color">
                    During the concept phase, I work closely with my clients to
                    understand their needs and goals for their website.
                  </p>
                </div>
                <div className="process__single fade-top">
                  <h4 className="title-md">design</h4>
                  <p className="text-md senary-color">
                    During the concept phase, I work closely with my clients to
                    understand their needs and goals for their website.
                  </p>
                </div>
                <div className="process__single fade-top">
                  <h4 className="title-md">development</h4>
                  <p className="text-md senary-color">
                    During the concept phase, I work closely with my clients to
                    understand their needs and goals for their website.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="process__thumb fade-top">
              <Image src={thumb} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessThree;
