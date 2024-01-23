import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Typewriter from "typewriter-effect";
import bnonethumb from "public/images/banner/bn-one-thumb.png";

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
    <section className="about-me fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xxl-6">
            <div className="banner-two__content fade-top">
              <div className="banner-two__group">
                <div className="banner-two__left">
                  <h2 className="title-xl title-anim">
                    I Bring Your Website With Vision To Life
                  </h2>
                </div>
              </div>
              <hr />
              <div className="banner-content__paragraph">
                <p className="text-septenary">
                  I&apos;m a web developer from Southampton, UK. Currently lead
                  developer at a local agency, Fhoke. In my spare time I enjoy
                  DIY, gaming and building my own projects. My preferred tools
                  are PHP, Laravel and Vue.js. I recently converted my Inertia
                  app from Laravel Mix to using Vite.
                </p>
              </div>
              <hr />
              <div className="banner-content__footer">
                <ul>
                  <li>
                    <Link
                      href="https://goo.gl/maps/ktoFZVxqpYmtJNiR8"
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                      Lives in New York, USA
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info.andrea@mail.com">
                      <i className="fa-regular fa-envelope"></i>
                      info.andrea@mail.com
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
                  <Image src={bnonethumb} alt="Image" />
                </div>
                <div className="content b-c-alter">
                  <h4 className="title-md ">
                    Hi I&apos;m Andrea,
                    <br />
                    <Typewriter
                      options={{
                        strings: [
                          "web developer",
                          "UI designer",
                          "Digital Marketer",
                          "Freelancer",
                          "Psychiatrist",
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
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-messenger"></i>
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <div className="banner-two__sidebar fade-top">
              <h4 className="title-md fw-7">My Special Skills</h4>
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
                  <div className="skill-bar-wrapper" data-percent="90%">
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
                  <div className="skill-bar-wrapper" data-percent="70%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Problem Solving</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="80%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single">
                  <div className="skill-bar-title">
                    <p>Communication Skills</p>
                    <span className="percent-value"></span>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="85%">
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
