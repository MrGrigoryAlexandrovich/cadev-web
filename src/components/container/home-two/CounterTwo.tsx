import React from "react";
import Counter from "../Counter";

const CounterTwo = () => {
  return (
    <section className="counter pt-60 fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="counter__inner pb-120">
              <div className="row justify-content-center">
                <div className="col-12 col-xxl-11">
                  <div className="row gaper">
                    <div className="col-12 col-md-6 col-xxl-3">
                      <div className="counter__single fade-top">
                        <h2 className="title-xl">
                          <span className="odometer">
                            <Counter value={10} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p className="title-sm text-quaternary">
                          Project complete
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xxl-3">
                      <div className="counter__single fade-top">
                        <h2 className="title-xl">
                          <span className="odometer">
                            <Counter value={10} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p className="title-sm text-quaternary">
                          happy customers
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xxl-3">
                      <div className="counter__single fade-top">
                        <h2 className="title-xl">
                          <span className="odometer">
                            <Counter value={5} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p className="title-sm text-quaternary">
                          years of experience
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-xxl-3">
                      <div className="counter__single fade-top">
                        <h2 className="title-xl">
                          <span className="odometer">
                            <Counter value={10} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p className="title-sm text-quaternary">
                          award achievement
                        </p>
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

export default CounterTwo;
