import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";
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
          <Link href="service-single">
            <Image src={hrone} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              mobile app
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrtwo} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrthree} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              marketing app
              <br />
              solutions
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrfour} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrfive} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrsix} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrone} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              mobile app
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrtwo} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrthree} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              marketing app
              <br />
              solutions
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrfour} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              LMS web app
              <br />
              lication
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrfive} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              brand identity
              <br />
              difference
            </Link>
          </h2>
        </div>
      </div>
      <div className="project-sl__single">
        <div className="thumb">
          <Link href="service-single">
            <Image src={hrsix} alt="Image" priority />
          </Link>
        </div>
        <div className="content">
          <h2>
            <Link href="service-single">
              digital website
              <br />
              development
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;
