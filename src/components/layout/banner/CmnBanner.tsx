import React from "react";

const CmnBanner = ({ title }: any) => {
  return (
    <section className="pb-120 cmn-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cmn-banner__content">
              <h2 className="title-xl fw-7 title-anim">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmnBanner;
