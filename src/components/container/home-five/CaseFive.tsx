import React from "react";
import Image from "next/image";
import Link from "next/link";
import five from "public/images/five/five.png";
import six from "public/images/five/six.png";

const CaseFive = () => {
  return (
    <section className="case">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="case__inner">
              <div className="case-single appear-down">
                <div className="row gaper align-items-center justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="case__content">
                      <span className="subtitle">case study 01</span>
                      <h4 className="title-md">
                        Every Journey Starts with the First
                      </h4>
                      <p className="text-md text-senary">
                        To achieve our goal, we aimed to create a modern and
                        sleek website design that improved user experience,
                        increased engagement, and better reflected the
                        brand&apos;s identity.
                      </p>
                      <div className="section__cta">
                        <Link
                          href="case-study-single"
                          className="btn btn--tertiary"
                        >
                          discover project
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="case__thumb">
                      <Image src={five} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-single appear-down">
                <div className="row gaper align-items-center justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="case__thumb">
                      <Image src={six} alt="Image" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="case__content">
                      <span className="subtitle">case study 02</span>
                      <h4 className="title-md">
                        Scelerisque eleifend donec pretium
                      </h4>
                      <p className="text-md text-senary">
                        To achieve our goal, we aimed to create a modern and
                        sleek website design that improved user experience,
                        increased engagement, and better reflected the
                        brand&apos;s identity.
                      </p>
                      <div className="section__cta">
                        <Link
                          href="case-study-single"
                          className="btn btn--tertiary"
                        >
                          discover project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-single appear-down">
                <div className="row gaper align-items-center justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="case__content">
                      <span className="subtitle">case study 03</span>
                      <h4 className="title-md">
                        Every Journey Starts with the First
                      </h4>
                      <p className="text-md text-senary">
                        To achieve our goal, we aimed to create a modern and
                        sleek website design that improved user experience,
                        increased engagement, and better reflected the
                        brand&apos;s identity.
                      </p>
                      <div className="section__cta">
                        <Link
                          href="case-study-single"
                          className="btn btn--tertiary"
                        >
                          discover project
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="case__thumb">
                      <Image src={five} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="case-single appear-down">
                <div className="row gaper align-items-center justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="case__thumb">
                      <Image src={six} alt="Image" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="case__content">
                      <span className="subtitle">case study 04</span>
                      <h4 className="title-md">
                        Scelerisque eleifend donec pretium
                      </h4>
                      <p className="text-md text-senary">
                        To achieve our goal, we aimed to create a modern and
                        sleek website design that improved user experience,
                        increased engagement, and better reflected the
                        brand&apos;s identity.
                      </p>
                      <div className="section__cta">
                        <Link
                          href="case-study-single"
                          className="btn btn--tertiary"
                        >
                          discover project
                        </Link>
                      </div>
                    </div>
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

export default CaseFive;
