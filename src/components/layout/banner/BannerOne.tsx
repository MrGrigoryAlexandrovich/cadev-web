import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import director from "@/assets/director.jpeg";
import bnblog from "public/images/banner/bn-blog.png";
import hoverthumb from "public/images/case-study/hover-thumb.png";
import two from "public/images/case-study/two.png";
import three from "public/images/case-study/three.png";
import thumb from "public/images/case-study/thumb.png";
import shape from "public/images/banner/shape.png";
gsap.registerPlugin(ScrollTrigger);

const BannerOne = () => {
  // mousemove animation
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(
        ".banner__content-study__single"
      );
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // download cv
  const handleDownload = () => {
    const pdfURL = "/images/sample-page.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfURL;
    downloadLink.download = "my-cv.pdf";

    document.body.appendChild(downloadLink);

    downloadLink.click();

    downloadLink.remove();
  };

  // text pinning animation
  const contentRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const endTriggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const metaElement = triggerRef.current;

    if (metaElement) {
      const pin = gsap.to(metaElement.querySelector("h2"), {
        y: "-200px",
        opacity: 0.8,
        duration: 3.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          endTrigger: endTriggerRef.current,
          scrub: 1,
          start: "top top",
          end: "bottom bottom",
          markers: false,
          pin: true,
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="banner" ref={endTriggerRef}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner__inner">
              <div className="banner__meta">
                <div className="banner__meta-single bg-grd-one">
                  <div className="thumb">
                    <Image
                      src={director}
                      alt="director-image"
                      className="director-image"
                    />
                  </div>
                  <div className="content">
                    <p className="title-sm fw-7">
                      <Link href="about-me">Ahmed Cvrčak</Link>
                    </p>
                    <p className="text-sm text-quaternary d-flex align-items-center fw-7">
                      <i className="fa-solid fa-briefcase"></i>
                      Director at CA DEV
                    </p>
                    <p className="text-sm text-quaternary d-flex align-items-center fw-7">
                      <i className="fa-solid fa-location-dot"></i>
                      <span className="location-text">
                        Maglaj, Bosnia and Herzegovina
                      </span>
                    </p>
                  </div>
                  <hr />
                  <div className="social justify-content-start">
                    <Link
                      href="https://www.linkedin.com/in/ca-dev/"
                      className="in"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/_mr.assertive_/"
                      className="in"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link
                      href="https://www.facebook.com/cvrcak.ahmed/"
                      className="fb"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-messenger"></i>
                    </Link>
                  </div>
                </div>
                <div className="banner__meta-btn">
                  <Link
                    href="contact-me"
                    className="fw-7 text-capitalize rt-btn"
                  >
                    Hire Me
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </Link>
                </div>
                <div className="banner__meta-btn">
                  <button
                    aria-label="download my cv"
                    className="fw-7 text-capitalize rt-btn"
                    id="downloadCv"
                    onClick={handleDownload}
                  >
                    Download Resume
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                  </button>
                </div>
                <p className="text-senary tertiary-text">
                  &copy; All Rights Reserved{" "}
                  <Link href="/" className="fw-6">
                    Exgrid
                  </Link>
                </p>
              </div>
              <div className="banner__content">
                <div className="banner__content-single bg-grd-two">
                  <h2 className="title-xxl  fw-5 title-anim">
                    Hi I&apos;m Andrea,
                    <br />
                    <span className="before">
                      Webflow{" "}
                      <Image src={shape} alt="Image" className="before-image" />
                    </span>{" "}
                    Designer
                  </h2>
                  <p>
                    My expertise lies in creating compelling user experiences
                    for early-stage startups, achieved by establishing a strong
                    link between the unique.
                  </p>
                  <hr />
                  <div className="cta">
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>7+</span>
                      </p>
                      <p className="text-uppercase text-quaternary text-sm">
                        YEARS EXPERIENCE
                      </p>
                    </div>
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>125+</span>
                      </p>
                      <p className="text-uppercase text-quaternary text-sm">
                        CLIENTS WORLD WIDE
                      </p>
                    </div>
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>750+</span>
                      </p>
                      <p className="text-uppercase text-quaternary text-sm">
                        TOTAL PROJECTS
                      </p>
                    </div>
                    <div className="cta-single">
                      <Link
                        href="contact-me"
                        className="fw-7 text-capitalize anim-btn"
                      >
                        <span className="btn-anim"> Hire Me</span>
                        <span className="btn-m">hire me</span>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="banner__content-study pt-60 fade-wrapper">
                  <div className="title-animation position-relative d-flex align-items-center justify-content-center">
                    <div className="overflow-hidden position-relative">
                      <h2 className="fw-5 text-white title-xl">Case</h2>
                    </div>
                    <div className="overflow-hidden position-relative">
                      <h2 className="fw-5 text-quinary title-xl">Study</h2>
                    </div>
                  </div>
                  <div className="banner__content-study__inner">
                    <div className="banner__content-study__single fade-top">
                      <div className="tag">
                        <Link href="case-study-single">Web Application</Link>
                        <Link href="case-study-single">
                          Client Review
                          <i className="bi bi-play"></i>
                        </Link>
                      </div>
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="content__left">
                          <h3 className="title-lg">
                            <Link href="case-study-single">
                              Top view idealight bulb draw
                            </Link>
                          </h3>
                        </div>
                        <div className="content__right">
                          <p className="text-sm text-capitalize">
                            <Link href="case-study">design & animation</Link>
                          </p>
                        </div>
                      </div>
                      <div className="case-study-hover d-none d-md-block">
                        <Image src={hoverthumb} alt="Image" />
                      </div>
                    </div>
                    <div className="banner__content-study__single fade-top">
                      <div className="tag">
                        <Link href="case-study-single">Web Application</Link>
                        <Link href="case-study-single">
                          Client Review
                          <i className="bi bi-play"></i>
                        </Link>
                      </div>
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="content__left">
                          <h3 className="title-lg">
                            <Link href="case-study-single">
                              The Wild Hunt web system
                            </Link>
                          </h3>
                        </div>
                        <div className="content__right">
                          <p className="text-sm text-capitalize">
                            <Link href="case-study">design & animation</Link>
                          </p>
                        </div>
                      </div>
                      <div className="case-study-hover d-none d-md-block">
                        <Image src={two} alt="Image" />
                      </div>
                    </div>
                    <div className="banner__content-study__single fade-top">
                      <div className="tag">
                        <Link href="case-study-single">Web Application</Link>
                        <Link href="case-study-single">
                          Client Review
                          <i className="bi bi-play"></i>
                        </Link>
                      </div>
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="content__left">
                          <h3 className="title-lg">
                            <Link href="case-study-single">
                              Netfly provides a user-friendly
                            </Link>
                          </h3>
                        </div>
                        <div className="content__right">
                          <p className="text-sm text-capitalize">
                            <Link href="case-study">design & animation</Link>
                          </p>
                        </div>
                      </div>
                      <div className="case-study-hover d-none d-md-block">
                        <Image src={three} alt="Image" />
                      </div>
                    </div>
                    <div className="banner__content-study__single fade-top">
                      <div className="tag">
                        <Link href="case-study-single">Web Application</Link>
                        <Link href="case-study-single">
                          Client Review
                          <i className="bi bi-play"></i>
                        </Link>
                      </div>
                      <div className="content d-flex align-items-center justify-content-between">
                        <div className="content__left">
                          <h3 className="title-lg">
                            <Link href="case-study-single">
                              marketplaces, view NFT collections
                            </Link>
                          </h3>
                        </div>
                        <div className="content__right">
                          <p className="text-sm text-capitalize">
                            <Link href="case-study">design & animation</Link>
                          </p>
                        </div>
                      </div>
                      <div className="case-study-hover d-none d-md-block">
                        <Image src={thumb} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner__content-about pt-60 fade-wrapper">
                  <div className="title-animation position-relative d-flex align-items-center justify-content-center">
                    <div className="overflow-hidden position-relative">
                      <h2 className="fw-5 text-white title-xl">About</h2>
                    </div>
                    <div className="overflow-hidden position-relative">
                      <h2 className="fw-5 text-quinary title-xl">Me</h2>
                    </div>
                  </div>
                  <div className="banner__content-about-inner">
                    <h3 className="title-xxl text-capitalize fw-4 title-anim">
                      Hi i&apos;m andrea,
                      <span className="fw-7">Webflow Designer</span> I work as
                      the
                      <span className="span-block">Creative Director</span> at
                      Pe Creative Studio{" "}
                      <span className="fw-7">in Brooklyn.</span>
                    </h3>
                    <div className="bn-about-thumb fade-top">
                      <Image src={bnblog} alt="Image" />
                      <Link
                        href="https://www.youtube.com/"
                        className="yt"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </div>
                    <div className="bn-about__content fade-top">
                      <div className="bn-about__content-left">
                        <h3 className="title-lg">Awwwards.</h3>
                      </div>
                      <div className="bn-about__content-right">
                        <ul>
                          <li>site of the day portfolio (2020)</li>
                          <li>best website content (2021)</li>
                          <li>up labs contest winning (2022)</li>
                          <li>site of the day portfolio (2020)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="banner__history fade-wrapper">
                  <h3 className="title-xl">History</h3>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">Now</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Design Lead</h2>
                      <p>Fantasy Interactive</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2021</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Marketing Expert</h2>
                      <p>Fantasy Interactive</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2020</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Senior Developer</h2>
                      <p>Fantasy Interactive</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2017</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Lead Architecture</h2>
                      <p>Fantasy Interactive</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner__sidebar fade-wrapper">
                <div className="banner__sidebar-single bg-grd-two">
                  <h5 className="title-sm">My Specializations</h5>
                  <div className="banner__sidebar-special fade-top">
                    <Link href="service-single">
                      <span className="service-info">
                        <span className="fw-5">Website Design</span>
                        <span className="text-sm">24 Projects</span>
                      </span>
                      <span>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="banner__sidebar-special fade-top">
                    <Link href="service-single">
                      <span className="service-info">
                        <span className="fw-5">web development</span>
                        <span className="text-sm">16 Projects</span>
                      </span>
                      <span>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="banner__sidebar-special fade-top">
                    <Link href="service-single">
                      <span className="service-info">
                        <span className="fw-5">UX/UI Design</span>
                        <span className="text-sm">45 Projects</span>
                      </span>
                      <span>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="banner__sidebar-special fade-top">
                    <Link href="service-single">
                      <span className="service-info">
                        <span className="fw-5">Digital Marketing</span>
                        <span className="text-sm">12 Projects</span>
                      </span>
                      <span>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="banner__sidebar-single bg-grd-two">
                  <h5 className="title-sm">Education & Experience</h5>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2020</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">Present</span>
                    </div>
                    <p className="designation text-quaternary">
                      Desinger & Developer
                    </p>
                    <p className="ins-name text-quaternary text-xs">
                      Brunodee Agency
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2020</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">Present</span>
                    </div>
                    <p className="designation text-quaternary">
                      Webflow Developer
                    </p>
                    <p className="ins-name text-quaternary text-xs">
                      brain craft inc
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2020</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">Present</span>
                    </div>
                    <p className="designation text-quaternary">
                      Desinger & Developer
                    </p>
                    <p className="ins-name text-quaternary text-xs">
                      slicly agency
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2020</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">Present</span>
                    </div>
                    <p className="designation text-quaternary">
                      Leader Team of Marketing
                    </p>
                    <p className="ins-name text-quaternary text-xs">
                      Brunodee Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tag-t" ref={triggerRef}>
        <h2 ref={contentRef}>EXGRID</h2>
      </div>
    </section>
  );
};

export default BannerOne;
