import React, { useEffect } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const BannerTwo = () => {
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
    <section className="banner-two">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="banner-two__content">
              <div className="banner-two__group">
                <div className="banner-two__left">
                  <h1 className="title-xxl">
                    Hi I&apos;m Ahmed,
                    <br />
                    <Typewriter
                      options={{
                        strings: [
                          "web developer",
                          "mobile developer",
                          "desktop developer",
                          "IT consultant",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                </div>
                <div className="banner-two__right">
                  <p className="text-senary">I&apos;m on</p>
                  <div className="social">
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                      title="twitter"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.github.com/"
                      target="_blank"
                      aria-label="share us on github"
                      title="github"
                    >
                      <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                      title="twitter"
                    >
                      <i className="fa-solid fa-hashtag"></i>
                    </Link>
                    <Link
                      href="https://www.stackoverflow.com/"
                      target="_blank"
                      aria-label="share us on stack overflow"
                      title="stack overflow"
                    >
                      <i className="fa-brands fa-stack-overflow"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
              <div className="banner-content__paragraph">
                <p>
                  I&apos;m a web developer from Southampton, UK. Currently lead
                  developer at a local agency, Fhoke. In my spare time I enjoy
                  DIY, gaming and building my own projects. My preferred tools
                  are PHP, Laravel and Vue.js. I recently converted my Inertia
                  app from Laravel Mix to using Vite. In this post I&apos;ll
                  talk about how it went, as well as some of the gotchas.
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
                      Lives in Maglaj, Bosnia and Herzegovina
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:ahmedcvrle@gmailcom">
                      <i className="fa-regular fa-envelope"></i>
                      ahmedcvrle@gmailcom
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
          <div className="col-12 col-lg-4 col-xxl-3">
            <div className="banner-two__sidebar">
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

export default BannerTwo;
