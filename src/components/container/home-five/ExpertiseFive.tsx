import React, { useState } from "react";

const ExpertiseFive = () => {
  const [hover, setHover] = useState(0);

  return (
    <section className="pt-120  expertise expertise-alt fade-wrapper">
      <div className="container">
        <div className="row gaper justify-content-center">
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 0 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">70%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">Counselling</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 1 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">95%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">Psychology</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 2 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">87%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">Anxiety</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 3 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">65%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">Solo therapy</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 4 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">95%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">solo violinist</h4>
                <div className="section__content-cta">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 col-xxl-2">
            <div
              className={
                "expertise__single text-center fade-top" +
                (hover === 5 ? " expertise__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <div className="thumb">
                <h4 className="title-md text-quinary">80%</h4>
              </div>
              <div className="content">
                <h4 className="title-md">Life coaching</h4>
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

export default ExpertiseFive;
