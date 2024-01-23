import React, { useState } from "react";

const AboutExperience = () => {
  const [tab, setTab] = useState<"faqOne" | "faqTwo">("faqOne");

  const handleSwitchChange = (isChecked: boolean) => {
    setTab(isChecked ? "faqTwo" : "faqOne");
  };

  return (
    <section className="pt-120 experience fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header text-center">
              <h2 className="title-xl title-anim">Education And Experience</h2>
              <p className="text-septenary text-center">
                Your website is an extension of your brand, and I&apos;m here to
                help you make it the
              </p>
              <div className="faq-two__switch">
                <p className="abc cd">Experiences</p>
                <div className="switcher">
                  <input
                    type="checkbox"
                    id="switch"
                    onChange={(e) => handleSwitchChange(e.target.checked)}
                  />
                  <label htmlFor="switch">Toggle</label>
                </div>
                <p className="atc">Education</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className={`faq-tab-content ${
                tab === "faqOne" ? "show" : "hide"
              }`}
              id="faqOne"
            >
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      full stack web Developer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Brunodee digital Agency
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      senior UX/UI Designer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Brain craft apps ltd
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      Software engineer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      creative cloud digital Agency
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      Product Designer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Creationic Inc.
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`faq-tab-content ${
                tab === "faqTwo" ? "show" : "hide"
              }`}
              id="faqTwo"
            >
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      full stack web Developer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Brunodee digital Agency
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      senior UX/UI Designer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Brain craft apps ltd
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      Software engineer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      creative cloud digital Agency
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="experience__single fade-top">
                    <span>2020 - 2021</span>
                    <h4 className="title-sm text-capitalize">
                      Product Designer
                    </h4>
                    <p className="text-capitalize text-quaternary">
                      Creationic Inc.
                    </p>
                    <p className="text-septenary">
                      I&apos;m a web developer from Southampton, UK. Currently
                      lead developer at a local agency, Fhoke. In my spare time
                      I enjoy DIY, gaming and building my own projects. My
                      preferred tools are PHP, Laravel and Vue.js.
                    </p>
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

export default AboutExperience;
