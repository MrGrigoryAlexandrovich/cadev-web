import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/project/one.png";
import two from "public/images/project/two.png";
import three from "public/images/project/three.png";
import four from "public/images/project/four.png";

const CaseStudySec = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="row gapert">
          <div className="col-12 col-lg-6">
            <div className="project__single pr-45 appear-down">
              <Image src={one} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
            <div className="project__single pr-45 appear-down">
              <Image src={three} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project__single pl-45 appear-down">
              <Image src={two} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
            <div className="project__single pl-45 appear-down">
              <Image src={four} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project__single pr-45 appear-down">
              <Image src={one} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
            <div className="project__single pr-45 appear-down">
              <Image src={three} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project__single pl-45 appear-down">
              <Image src={two} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
            <div className="project__single pl-45 appear-down">
              <Image src={four} alt="Image" />
              <div className="content">
                <div className="content-header">
                  <Link href="case-study-single">
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
                <div className="content-footer">
                  <h3 className="title-md">
                    <Link href="case-study-single">impression</Link>
                  </h3>
                  <p>
                    Illo expedita corrupti placeat cupiditate veniam placeat
                    dolorum libero doloremque. Incidunt cum dolorum dolorem.
                    Sunt et quod
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="pt-120 text-center">
              <Link href="case-study" className="btn btn--secondary anim-btn">
                <span className="btn-anim">Load More</span>
                <span className="btn-m">Load More</span>
                <i className="fa-solid fa-spinner"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySec;
