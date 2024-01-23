import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import YoutubeEmbed from "@/components/container/youtube/YoutubeEmbed";
import signature from "public/images/signature.png";
import avatar from "public/images/avatar.png";
import avatartwo from "public/images/avatar-two.png";
import avatarthree from "public/images/avatar-three.png";
import avatarfour from "public/images/avatar-four.png";
gsap.registerPlugin(ScrollTrigger);

const BannerThree = () => {
  const [videoActive, setVideoActive] = useState(false);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const endTriggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const panels = gsap.utils.toArray(".nt-s");
      const scrollTriggers: globalThis.ScrollTrigger[] = [];

      panels.forEach((panel, i) => {
        const scrollTrigger = ScrollTrigger.create({
          trigger: panel as Element,
          start: "top-=20% top",
          end: "bottom+=80% bottom",
          onEnter: () => {
            const ntIRight = document.querySelectorAll(".nt-w-right .nt-i");
            ntIRight.forEach((item) => item.classList.remove("activer"));
            ntIRight[i].classList.add("activer");
          },
          onLeave: () => {
            const ntIRight = document.querySelectorAll(".nt-w-right .nt-i");
            ntIRight.forEach((item) => item.classList.remove("activer"));
            if (ntIRight[i + 1]) {
              ntIRight[i + 1].classList.add("activer");
            }
          },
          onLeaveBack: () => {
            const ntIRight = document.querySelectorAll(".nt-w-right .nt-i");
            ntIRight.forEach((item) => item.classList.remove("activer"));
            ntIRight[i].classList.add("activer");
          },
        });

        scrollTriggers.push(scrollTrigger);
      });

      const metaElement = triggerRef.current;
      if (metaElement) {
        const pin = gsap.to(metaElement.querySelector(".scrollpanels"), {
          scrollTrigger: {
            trigger: triggerRef.current,
            endTrigger: endTriggerRef.current,
            scrub: 1,
            start: "top-=50% top",
            end: "bottom+=30% bottom",
            markers: false,
            pin: true,
          },
        });

        ScrollTrigger.create({
          trigger: endTriggerRef.current,
          start: "top top",
          onEnterBack: () => {
            pin.kill();
          },
        });

        return () => {
          pin.kill();
          scrollTriggers.forEach((trigger) => trigger.kill());
        };
      }
    }
  }, []);

  return (
    <section
      className="banner-three fade-wrapper st-wrap-t"
      ref={endTriggerRef}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-10">
            <div className="banner-three__meta">
              <div className="banner-three__meta-left">
                <div className="thumb">
                  <Link href="about-me">
                    <Image src={avatartwo} alt="Image" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title-md fw-7">
                    <Link href="about-me">Patricia D. Razo</Link>
                  </h4>
                  <p>
                    <Link
                      href="https://goo.gl/maps/ktoFZVxqpYmtJNiR8"
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot"></i>
                      Lives in New York, USA
                    </Link>
                  </p>
                </div>
              </div>
              <div className="banner-three__meta-right">
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
                <div className="available-btn">
                  <Link
                    href="contact-me"
                    className="btn btn--tertiary anim-btn"
                  >
                    <span className="btn-m">Available now</span>
                    <span className="btn-anim">Available now</span>
                    <i className="fa-solid fa-bolt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-3 col-xxl-2 offset-xxl-1">
            <div className="banner-three__sidebar st-con">
              <div className="side-single fade-top">
                <h6 className="title-xs">Hours per week</h6>
                <p className="text-senary">
                  <i className="fa-solid fa-clock"></i>
                  30 hrs/
                  <span>week</span>
                </p>
              </div>
              <div className="side-single fade-top">
                <h6>Languages Expert</h6>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    English /<span>Fluent</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Hindi /<span>Medium</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    French /<span>Basic</span>
                  </li>
                </ul>
              </div>
              <div className="side-single fade-top">
                <h6>Top Skills</h6>
                <div className="tags">
                  <Link href="services">Mockup</Link>
                  <Link href="services">Prototyping</Link>
                  <Link href="services">Website Redesign</Link>
                  <Link href="services">UX</Link>
                  <Link href="services">Style Guide</Link>
                  <Link href="services">User Flow</Link>
                </div>
              </div>
              <div className="side-single fade-top">
                <h6>Education level</h6>
                <div className="d-flex">
                  <p>
                    <i className="fa-solid fa-graduation-cap"></i>
                  </p>
                  <div>
                    <p className="text-sm">Royal College of Art</p>
                    <p className="text-xs">Associate of Arts (AA)</p>
                    <p className="text-xs">2000-2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-xxl-8">
            <div className="banner-three__review st-con">
              <div className="review-about fade-top">
                <div className="review-about__left">
                  <div className="intro d-flex flex-wrap align-items-center">
                    <p className="text-white fw-7">More About me</p>
                    <p className="text-xs text-senary">
                      <span className="text-white">6+</span>
                      years of experience
                    </p>
                  </div>
                  <p className="text-sm text-senary">
                    I am a creative enthusiast and the technologist with 6+
                    years handful experience in UX & UI Design with the proven
                    know-how to combine creative and usability viewpoints
                    resulting in world-class Web & Mobile applications.
                  </p>
                  <div className="signature">
                    <Image src={signature} alt="Image" />
                  </div>
                </div>
                <div className="review-about__right">
                  <div className="thumb">
                    <Image src={avatarthree} alt="Image" />
                    <div className="video-wrap">
                      <a
                        title="video Player"
                        className="video-btn"
                        onClick={() => setVideoActive(true)}
                      >
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="n-t fade-wrapper">
                <h3 className="title-lg">What They Said</h3>
                <div className="n-t-w">
                  <div
                    className="nt-w-right scrollpanels"
                    id="info"
                    ref={triggerRef}
                  >
                    <div className="nt-i activer">
                      <Image src={avatarfour} alt="Image" />
                    </div>
                    <div className="nt-i">
                      <Image src={avatartwo} alt="Image" />
                    </div>
                    <div className="nt-i">
                      <Image src={avatar} alt="Image" />
                    </div>
                  </div>
                </div>
                <div className="nt-w-left scrollpanels-content">
                  <div className="nt-s fade-top" id="info1">
                    <div className="nt-s-i">
                      <h4 className="title-lg">
                        <q>
                          He is a good designer with UI/UX experience. He has
                          compiled my landing page.
                        </q>
                      </h4>
                      <p>Mira Groel</p>
                      <p className="text-xs">Managing Director</p>
                    </div>
                  </div>
                  <div className="nt-s fade-top" id="info2">
                    <div className="nt-s-i">
                      <h4 className="title-lg">
                        <q>
                          He is a good designer with UI/UX experience. He has
                          compiled my landing page.
                        </q>
                      </h4>
                      <p>Mira Groel</p>
                      <p className="text-xs">Managing Director</p>
                    </div>
                  </div>
                  <div className="nt-s fade-top" id="info3">
                    <div className="nt-s-i">
                      <h4 className="title-lg">
                        <q>
                          He is a good designer with UI/UX experience. He has
                          compiled my landing page.
                        </q>
                      </h4>
                      <p>Mira Groel</p>
                      <p className="text-xs">Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
