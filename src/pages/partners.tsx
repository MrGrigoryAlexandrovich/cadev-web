import React from "react";
import Layout from "@/components/layout/Layout";
import CounterTwo from "@/components/container/home-two/CounterTwo";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import RecentTwo from "@/components/container/home-two/RecentTwo";

const Partners = () => {
  return (
    <Layout header={1} footer={2}>
      <RecentTwo />
      <section className="pt-120">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-8">
              <div className="section__header text-center">
                <h2 className="title-xxl title-anim">
                  Partners whisper our quality
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="section__header text-center">
                <p className="text-xl">
                  To us, partnerships go beyond mere business transactions. They
                  are journeys of aligned visions and shared progress. Over the
                  years, we have cultivated strong and lasting relationships
                  with numerous partners. Their unwavering support and
                  continuous collaboration are invaluable testaments to our
                  commitment to quality.
                </p>
                <p className="text-xl pt-5">
                  It is not just about the number of partners, but the depth and
                  quality of those relationships. We take pride in our multitude
                  of long-standing partnerships filled with positive
                  experiences. Their satisfaction and long-term success validate
                  that our passion for excellence never wanes. It is a
                  continuous process that reflects in all aspects of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CounterTwo />
    </Layout>
  );
};

export default Partners;
