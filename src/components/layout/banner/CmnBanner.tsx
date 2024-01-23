import React from "react";
import Link from "next/link";

const CmnBanner = ({ title, navigation }: any) => {
  return (
    <section className="pb-120 cmn-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cmn-banner__content">
              <h2 className="title-xl fw-7 title-anim">{title}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {navigation}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CmnBanner;
