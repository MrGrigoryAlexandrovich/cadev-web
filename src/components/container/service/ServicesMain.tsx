import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import webDevelopment from "@/assets/web-development.png";
import mobileDevelopment from "@/assets/mobile-development.jpg";
import desktopDevelopment from "@/assets/desktop-development.png";
import developmentCoaching from "@/assets/development-coaching.jpg";
import itConsulting from "@/assets/it-consulting.png";
import maintenance from "@/assets/services-maintenance.jpg";

gsap.registerPlugin(ScrollTrigger);

const ServicesMain = () => {
  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = slider.current;

    if (window.innerWidth >= 992 && ele) {
      gsap.registerPlugin(ScrollTrigger);

      const rightSections = gsap.utils.toArray(".project-sl__single");

      const pin = gsap.to(rightSections, {
        xPercent: -100 * (rightSections.length - 4),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          invalidateOnRefresh: true,
          start: "center center",
          scrub: 1,
          end: () => "+=" + (slider.current?.offsetWidth || 0),
        },
      });

      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="pb-120 project-sl" ref={slider}>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={webDevelopment} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>
              web app
              <br />
              development
            </a>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={mobileDevelopment} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>
              mobile app
              <br />
              development
            </a>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={desktopDevelopment} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>
              desktop app
              <br />
              development
            </a>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={developmentCoaching} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>
              development
              <br />
              coaching
            </a>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={itConsulting} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>
              IT
              <br />
              Consulting
            </a>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <a>
            <Image src={maintenance} alt="Image" priority />
          </a>
        </div>
        <div className="content">
          <h2>
            <a>Maintence</a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
