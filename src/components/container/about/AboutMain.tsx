import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Typewriter from "typewriter-effect";
import companyLogo from "public/images/favicon.png";

gsap.registerPlugin(ScrollTrigger);

const AboutMain = () => {
  const handleDownload = () => {
    const pdfURL = "/images/sample-page.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfURL;
    downloadLink.download = "my-cv.pdf";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    downloadLink.remove();
  };

  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          }
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: "0%",
            snap: {
              textContent: 5,
            },
          },
          "<"
        );
      }
    });
  }, []);

  return (
    <section className="about-me fade-wrapper pt-120 mt-5">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xxl-6">
            <div className="banner-two__content fade-top">
              <div className="banner-two__group">
                <div className="banner-two__left">
                  <h2 className="title-xl title-anim">
                    We will breathe life into your website vision.
                  </h2>
                </div>
              </div>
              <hr />
              <div className="banner-content__paragraph">
                <p className="text-septenary">
                  Build your digital dreams with CA DEV. We breathe life into
                  your ideas, crafting beautiful web, mobile, and desktop
                  applications. And once they're live, we're your trusted
                  partner, providing expert care and insightful IT consulting
                  for smooth operation and continuous growth.
                </p>
              </div>
              <hr />
              <div className="banner-content__footer">
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/place/Maglaj/@44.5442206,18.0749041,14z/data=!3m1!4b1!4m6!3m5!1s0x475e919eb6e2bd8f:0x980dd91ebf7a48e2!8m2!3d44.5454847!4d18.1033619!16zL20vMGQ5OV92?entry=ttu"
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                      Maglaj 74250
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:ahmedcvrle@gmail.com">
                      <i className="fa-regular fa-envelope"></i>
                      ahmedcvrle@gmail.com
                    </Link>
                  </li>
                </ul>
                <button id="downloadCv" onClick={handleDownload}>
                  Download Resume
                  <i className="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="banner__meta fade-top">
              <div className="banner__meta-single bg-grd-one">
                <div className="thumb">
                  <Image src={companyLogo} alt="Image" />
                </div>
                <div className="content b-c-alter">
                  <h4 className="title-md ">
                    We take care of your
                    <br />
                    <Typewriter
                      options={{
                        strings: [
                          "web application",
                          "mobile application",
                          "desktop application",
                          "IT knowledge",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h4>
                </div>
                <div className="dert">
                  <p className="text-quaternary text-md">Follow Me</p>
                  <div className="social justify-content-start">
                    <Link
                      href="https://www.linkedin.com/in/ca-dev/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/_mr.assertive_/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href="https://www.facebook.com/cvrcak.ahmed/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-messenger"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="banner-two__sidebar fade-top">
              <h4 className="title-md fw-7">Special Skills</h4>
              <div className="skill-wrap">
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Team Leadership</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="100%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Programming Languages</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="100%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Program Frameworks</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="100%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Naintenance</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="100%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>IT Consulting</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="100%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
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

export default AboutMain;
