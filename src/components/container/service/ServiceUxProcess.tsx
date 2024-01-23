import React, { useState } from "react";

const ServiceUxProcess = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="pt-120 pb-120 ux-process bg-tertiary fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <h2 className="title-xl title-anim">Working UX Process</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>User Research</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>story board</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>wireframing</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>Prototyping</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>usability testing</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>UI Design</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                    To deliver the best experience, we thoroughly research and
                    evaluate your product and its users to create a strategic
                    foundation for the brand.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceUxProcess;
