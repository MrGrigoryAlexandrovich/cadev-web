import React from "react";
import Image from "next/image";
import avatarfour from "public/images/avatar-four.png";

const FixFour = () => {
  return (
    <section className="pt-120 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="section__header text-center">
              <h2 className="title-xxl title-anim">
                I Combines <Image src={avatarfour} alt="Image" />{" "}
                <span className="fw-7">Customer Data</span> With{" "}
                <span className="fw-7">Thoughtful</span> Work
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="section__header text-center">
              <p className="text-xl">
                We are a five-star rated holistic full-service digital marketing
                agencies, serving thousands of clients. Our digital agency
                covers all aspects of internet marketing: SEO, social media, and
                PPC management, all the way to email marketing, website design,
                and web development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fix-img">
        <video muted loop autoPlay controls>
          <source src="/images/meet.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default FixFour;
