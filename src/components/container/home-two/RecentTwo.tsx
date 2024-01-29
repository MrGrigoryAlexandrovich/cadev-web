import React from "react";
import Image from "next/image";
import Link from "next/link";
import karrieraJobs from "@/assets/KarrieraJobs.png";
import karrieraDashboard from "@/assets/KarrieraDashboard.png";
import karrieraMessenger from "@/assets/KarrieraMessenger.png";
import osterusDegree from "@/assets/OsterusDegree.png";
import osterusGeneral from "@/assets/OsterusGeneral.png";
import karrieraWebsite from "@/assets/KarrieraWebsite.png";

const RecentTwo = () => {
  return (
    <section className="pt-120 recent st-wrap appear-wrapper ">
      <div className="container">
        <div className="row gaper ">
          <div className="col-12 col-lg-5">
            <div className="section__content st-con">
              <span className="sub-title text-capitalize">
                Long-term partners
              </span>
              <h2 className="title-xl title-anim">
                Karriera & Osterus
                <br /> We realize our visions and build software together
              </h2>
              <div className="section__content-cta">
                <div className="section__content-cta">
                  <Link
                    href="contact-us"
                    className="btn anim-btn btn--secondary"
                  >
                    <span className="btn-anim">Hire Us</span>
                    <span className="btn-m">Hire Us</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="recent__thumb st-con">
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={karrieraJobs} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>Jobs</a>
                  </h3>
                  <p className="text-quaternary">
                    On Karriera Jobs page, you'll find all your jobs in one
                    place. Manage them effortlessly with diverse tools and
                    filter them with a range of criteria to find the perfect
                    fit. Download your jobs in a CSV file and analyze them
                    offline
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Karriera</a>
                    <a>Jobs</a>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={karrieraDashboard} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>Dashboard</a>
                  </h3>
                  <p className="text-quaternary">
                    Track profile completion, view your latest created jobs in a
                    list, and connect with the newest applicants, all
                    conveniently centralized for your professional growth.
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Karriera</a>
                    <a>Dashboard</a>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={karrieraMessenger} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>Messenger</a>
                  </h3>
                  <p className="text-quaternary">
                    Karriera Messenger facilitates direct communication between
                    candidates and recruiters, turning job searches into smooth
                    and seamless interactions while allowing document exchange.
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Karriera</a>
                    <a>Messenger</a>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={osterusGeneral} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>General</a>
                  </h3>
                  <p className="text-quaternary">
                    Osterus boasts advanced analytics and actionable insights,
                    inviting a deeper dive: explore their individual analysis
                    stacks and compare their diverse approaches.
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Osterus</a>
                    <a>General</a>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={osterusDegree} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>Views</a>
                  </h3>
                  <p className="text-quaternary">
                    In the Osterus application, Stack Views and Comparisons are
                    implemented through various types of views, depending on the
                    analyst segment. The most popular views are Jobs and
                    Experience, Education and Demographics.
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Osterus</a>
                    <a>Views</a>
                  </div>
                </div>
              </div>
              <div className="recent__single appear-down">
                <div className="thumb">
                  <a>
                    <Image src={karrieraWebsite} alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <h3 className="title-lg text-capitalize">
                    <a>Karriera</a>
                  </h3>
                  <p className="text-quaternary">
                    Unleash boundless opportunities with Karriera! Dive into our
                    website to uncover your path – explore Karriera's core,
                    discover diverse services, and unlock perfect pricing for
                    your success. Your brighter future starts here
                  </p>
                </div>
                <hr />
                <div className="content-footer">
                  <div className="content-footer__left">
                    <a>Karriera</a>
                    <a>Website</a>
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

export default RecentTwo;
