import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import director from "@/assets/director.jpeg";
import directorOffice from "@/assets/directorOffice.jpg";
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
                    CA DEV
                  </Link>
                </p>
              </div>
              <div className="banner__content">
                <div className="banner__content-single bg-grd-two">
                  <h2 className="title-xxl  fw-5 title-anim">
                    Welcome to
                    <br />
                    <span className="before">
                      CA{" "}
                      <Image src={shape} alt="Image" className="before-image" />
                    </span>
                    <span className="before">
                      DEVELOPMENT
                      <Image src={shape} alt="Image" className="before-image" />
                    </span>
                  </h2>
                  <p>
                    Our expertise lies in creating quality software solutions
                    for different types of devices and systems. We take care of
                    your software.
                  </p>
                  <hr />
                  <div className="cta">
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>5+</span>
                      </p>
                      <p className="text-uppercase text-quaternary text-sm">
                        YEARS EXPERIENCE
                      </p>
                    </div>
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>10+</span>
                      </p>
                      <p className="text-uppercase text-quaternary text-sm">
                        CLIENTS WORLD WIDE
                      </p>
                    </div>
                    <div className="cta-single">
                      <p className="d-flex align-items-center">
                        <i className="fa-solid fa-check"></i>
                        <span>10+</span>
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
                      Hi i&apos;m Ahmed,
                      <span className="fw-7">Software Developer</span>and{" "}
                      <span className="span-block">Director</span> at CA DEV{" "}
                      <span className="fw-7">in Maglaj.</span>
                    </h3>
                    <div className="bn-about-thumb fade-top">
                      <Image src={directorOffice} alt="Image" />
                    </div>
                  </div>
                </div>
                <div className="banner__history fade-wrapper">
                  <h3 className="title-xl">Experience</h3>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">Now</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Director - since 2021</h2>
                      <p>CA DEV</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2023</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Full Stack Developer</h2>
                      <p>Karriera</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2021</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Full Stack Developer</h2>
                      <p>Osterus GMBH</p>
                    </div>
                  </div>
                  <div className="banner__history-single fade-top">
                    <div className="lefter">
                      <h2 className="title-lg">2017</h2>
                    </div>
                    <div className="righter">
                      <h2 className="title-lg">Software Developer</h2>
                      <p>Freelancer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner__sidebar fade-wrapper">
                <div className="banner__sidebar-single bg-grd-two">
                  <h5 className="title-sm">Services</h5>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">Web Development</span>
                    </span>
                    <i className="bi bi-code-slash"></i>
                  </div>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">Mobile development</span>
                    </span>

                    <i className="bi bi-phone"></i>
                  </div>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">Desktop development</span>
                    </span>
                    <i className="bi bi-pc"></i>
                  </div>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">Development coaching</span>
                    </span>
                    <i className="bi bi-code-square"></i>
                  </div>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">Maintenance</span>
                    </span>
                    <i className="bi bi-tools"></i>
                  </div>
                  <div className="banner__sidebar-special fade-top d-flex flex-row justify-content-between align-items-center">
                    <span className="service-info">
                      <span className="fw-5">IT Consulting</span>
                    </span>
                    <i className="bi bi-info-circle"></i>
                  </div>
                </div>
                <div className="banner__sidebar-single bg-grd-two">
                  <h5 className="title-sm">Education</h5>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2020</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">2020</span>
                    </div>
                    <p className="designation text-quaternary">Maglaj</p>
                    <p className="ins-name text-quaternary text-xs">
                      nSoft Full Stack dev-hive
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2016</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">2020</span>
                    </div>
                    <p className="designation text-quaternary">Doboj</p>
                    <p className="ins-name text-quaternary text-xs">
                      information technology
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2012</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">2016</span>
                    </div>
                    <p className="designation text-quaternary">Maglaj</p>
                    <p className="ins-name text-quaternary text-xs">
                      Gymnasium
                    </p>
                  </div>
                  <div className="banner__sidebar-experience fade-top">
                    <div className="time-frame">
                      <span className="text-xs">2005</span>
                      <span className="text-xs">-</span>
                      <span className="text-xs">2012</span>
                    </div>
                    <p className="designation text-quaternary">Novi Šeher</p>
                    <p className="ins-name text-quaternary text-xs">
                      Elementary School
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tag-t" ref={triggerRef}>
        <h2 ref={contentRef}>CA DEV</h2>
      </div>
    </section>
  );
};

export default BannerOne;
