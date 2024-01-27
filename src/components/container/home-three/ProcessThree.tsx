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
                <span className="subtitle">How do we work ?</span>
                <h4 className="title-md title-anim">
                  Your Dream Website In Just Few Steps
                </h4>
              </div>
              <div className="process-wrap">
                <div className="process__single fade-top">
                  <h4 className="title-md">concept</h4>
                  <p className="text-md senary-color">
                    Let's crack the code together. We'll listen deeply, unearth
                    your hidden desires, and refine raw goals into a dazzling
                    software vision.
                  </p>
                </div>
                <div className="process__single fade-top">
                  <h4 className="title-md">design</h4>
                  <p className="text-md senary-color">
                    Co-piloting your dream: we'll sculpt user experiences, craft
                    features that sing, and build the sleek engine that powers
                    your software to life.
                  </p>
                </div>
                <div className="process__single fade-top">
                  <h4 className="title-md">development</h4>
                  <p className="text-md senary-color">
                    Your software bursts into life! Each brushstroke, each line
                    of code, builds a masterpiece we unveil bit by bit, keeping
                    you on the edge of your seat. Let's paint this vision
                    together.
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
