import React, { useState } from "react";
import Image from "next/image";
import thumbtab from "public/images/thumb-tab.png";

const DriveFour = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <section className="pt-120 drive">
      <div className="container">
        <div className="row align-items-center justify-content-between gaper section__header--secondary">
          <div className="col-12 col-lg-6">
            <div className="section__header text-center text-lg-start mb-0">
              <span className="sub-title title-sm text-white">What I Do</span>
              <h2 className="title-xxl title-anim">
                Driving a better way of doing marketing
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="text-center text-lg-start">
              <p className="text-senary">
                To achieve our goal, we aimed to create a modern and sleek
                website design that improved user experience, increased
                engagement, and better reflected the brand&apos;s identity.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="drive__inner">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-12 col-xxl-5">
                  <div className="generate__content">
                    <div>
                      <button
                        className={`generate__content-btn ${
                          activeTabIndex === 0
                            ? "generate__content-btn-active"
                            : ""
                        }`}
                        onClick={() => handleTabClick(0)}
                      >
                        <span className="content">
                          <span className="title-md">
                            Search engine optimization
                          </span>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </span>
                      </button>
                      <button
                        className={`generate__content-btn ${
                          activeTabIndex === 1
                            ? "generate__content-btn-active"
                            : ""
                        }`}
                        onClick={() => handleTabClick(1)}
                      >
                        <span className="content">
                          <span className="title-md">
                            Paid search marketing
                          </span>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </span>
                      </button>
                      <button
                        className={`generate__content-btn ${
                          activeTabIndex === 2
                            ? "generate__content-btn-active"
                            : ""
                        }`}
                        onClick={() => handleTabClick(2)}
                      >
                        <span className="content">
                          <span className="title-md">
                            Conversion rate optimization
                          </span>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </span>
                      </button>
                      <button
                        className={`generate__content-btn ${
                          activeTabIndex === 3
                            ? "generate__content-btn-active"
                            : ""
                        }`}
                        onClick={() => handleTabClick(3)}
                      >
                        <span className="content">
                          <span className="title-md">
                            Social media marketing
                          </span>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-12 col-xxl-7">
                  <div className="generate__thumb">
                    <div
                      className={`tab-content ${
                        activeTabIndex === 0 ? "active" : ""
                      }`}
                    >
                      <div className="tab-content-inner">
                        <div className="tab-left">
                          <p className="fw-7">
                            Increase your organic traffic by ranking high on
                            search engines and AI discovery tools like Chat GPT
                          </p>
                          <ul>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword and competitor research
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              SKAGS (single keyword ad groups)
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Negative keyword pruning
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Ad copy optimization
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Backlink Generation
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword & competitor research
                            </li>
                          </ul>
                        </div>
                        <div className="tab-right">
                          <Image src={thumbtab} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-content ${
                        activeTabIndex === 1 ? "active" : ""
                      }`}
                    >
                      <div className="tab-content-inner">
                        <div className="tab-left">
                          <p className="fw-7">
                            Increase your organic traffic by ranking high on
                            search engines and AI discovery tools like Chat GPT
                          </p>
                          <ul>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword and competitor research
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              SKAGS (single keyword ad groups)
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Negative keyword pruning
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Ad copy optimization
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Backlink Generation
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword & competitor research
                            </li>
                          </ul>
                        </div>
                        <div className="tab-right">
                          <Image src={thumbtab} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-content ${
                        activeTabIndex === 2 ? "active" : ""
                      }`}
                    >
                      <div className="tab-content-inner">
                        <div className="tab-left">
                          <p className="fw-7">
                            Increase your organic traffic by ranking high on
                            search engines and AI discovery tools like Chat GPT
                          </p>
                          <ul>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword and competitor research
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              SKAGS (single keyword ad groups)
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Negative keyword pruning
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Ad copy optimization
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Backlink Generation
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword & competitor research
                            </li>
                          </ul>
                        </div>
                        <div className="tab-right">
                          <Image src={thumbtab} alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div
                      className={`tab-content ${
                        activeTabIndex === 3 ? "active" : ""
                      }`}
                    >
                      <div className="tab-content-inner">
                        <div className="tab-left">
                          <p className="fw-7">
                            Increase your organic traffic by ranking high on
                            search engines and AI discovery tools like Chat GPT
                          </p>
                          <ul>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword and competitor research
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              SKAGS (single keyword ad groups)
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Negative keyword pruning
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Ad copy optimization
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Backlink Generation
                            </li>
                            <li className="text-md text-senary d-flex align-items-center">
                              <i className="fa-solid fa-check"></i>
                              Keyword & competitor research
                            </li>
                          </ul>
                        </div>
                        <div className="tab-right">
                          <Image src={thumbtab} alt="Image" />
                        </div>
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

export default DriveFour;
