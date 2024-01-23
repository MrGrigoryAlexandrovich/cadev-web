import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/five/one.png";
import two from "public/images/five/two.png";
import three from "public/images/five/three.png";
import four from "public/images/five/four.png";

const OfferFive = () => {
  return (
    <section className="pt-120 offer fade-wrapper">
      <div className="container">
        <div className="row align-items-center justify-content-between gaper section__header--secondary">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center text-lg-start mb-0">
              <span className="sub-title text-capitalize">
                service i&apos;m offering
              </span>
              <h2 className="title-xxl title-anim">
                Providing The Best Quality Psycological Therapies
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="text-center text-lg-start">
              <p className="text-senary text-capitalize">
                amet, con adipiscing elit tiam convallis elit id impedie. Quisq
                commodo simply free ornare tortor. If you are going to use a
                passage. We believe you&apos;re
              </p>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xxl-3 fade-top">
            <div className="offer__single">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title-md">
                  <Link href="service-single">Dating & Relationship</Link>
                </h4>
                <p className="fw-5">
                  At the Good Samaritan Society, you aren&apos;t just a custoer.
                  We believe you&apos;re someone who
                </p>
                <div className="section__cta text-start">
                  <Link
                    href="service-single"
                    className="btn btn--secondary anim-btn"
                  >
                    <span className="btn-anim">View More</span>
                    <span className="btn-m">View More</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 fade-top">
            <div className="offer__single">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title-md">
                  <Link href="service-single">Self Esteem Issues</Link>
                </h4>
                <p className="fw-5">
                  At the Good Samaritan Society, you aren&apos;t just a custoer.
                  We believe you&apos;re someone who
                </p>
                <div className="section__cta text-start">
                  <Link
                    href="service-single"
                    className="btn btn--secondary anim-btn"
                  >
                    <span className="btn-anim">View More</span>
                    <span className="btn-m">View More</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 fade-top">
            <div className="offer__single">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={three} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title-md">
                  <Link href="service-single">Kids & Family Psycology</Link>
                </h4>
                <p className="fw-5">
                  At the Good Samaritan Society, you aren&apos;t just a custoer.
                  We believe you&apos;re someone who
                </p>
                <div className="section__cta text-start">
                  <Link
                    href="service-single"
                    className="btn btn--secondary anim-btn"
                  >
                    <span className="btn-anim">View More</span>
                    <span className="btn-m">View More</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 fade-top">
            <div className="offer__single">
              <div className="thumb">
                <Link href="service-single">
                  <Image src={four} alt="Image" />
                </Link>
              </div>
              <div className="content">
                <h4 className="title-md">
                  <Link href="service-single">Life & Career Counseling</Link>
                </h4>
                <p className="fw-5">
                  At the Good Samaritan Society, you aren&apos;t just a custoer.
                  We believe you&apos;re someone who
                </p>
                <div className="section__cta text-start">
                  <Link
                    href="service-single"
                    className="btn btn--secondary anim-btn"
                  >
                    <span className="btn-anim">View More</span>
                    <span className="btn-m">View More</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferFive;
