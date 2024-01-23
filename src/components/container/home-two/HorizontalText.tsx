import React, { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const HorizontalText = () => {
  useEffect(() => {
    const applyHorizontalScrollOne = () => {
      const sectionElement = document.querySelector(".hr-t-one");
      if (sectionElement) {
        const sections = gsap.utils.toArray(
          ".hr-t-one .hr-text-single-wrapper"
        );
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top-=440px top",
            pin: false,
            invalidateOnRefresh: true,
            scrub: 1,
            end: `+=${sectionElement.clientWidth}`,
          },
        });
      }
    };

    const applyHorizontalScrollTwo = () => {
      const sectionElement = document.querySelector(".hr-t-two");
      if (sectionElement) {
        const sections = gsap.utils.toArray(
          ".hr-t-two .hr-text-single-wrapper"
        );
        gsap.to(sections, {
          xPercent: 100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top-=440px top",
            pin: false,
            invalidateOnRefresh: true,
            scrub: 1,
            end: `+=${sectionElement.clientWidth}`,
          },
        });
      }
    };

    const applyHorizontalScrollThree = () => {
      const sectionElement = document.querySelector(".hr-t-three");
      if (sectionElement) {
        const sections = gsap.utils.toArray(
          ".hr-t-three .hr-text-single-wrapper"
        );
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1.5),
          ease: "none",
          scrollTrigger: {
            trigger: sectionElement,
            start: "top-=440px top",
            pin: false,
            invalidateOnRefresh: true,
            scrub: 1,
            end: `+=${sectionElement.clientWidth}`,
          },
        });
      }
    };

    applyHorizontalScrollOne();
    applyHorizontalScrollTwo();
    applyHorizontalScrollThree();
  }, []);

  return (
    <section className="pt-120 hr-text">
      <div className="hr-text-wrapper hr-t-one">
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="hr-text-wrapper hr-t-two">
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="hr-text-wrapper hr-t-three">
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
        <div className="hr-text-single-wrapper">
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Launch Marketing /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Identify Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Product Development /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Ui Design /</Link>
            </h2>
          </div>
          <div className="hr-text__single">
            <h2 className="title-xxl">
              <Link href="service-single">Web Development /</Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalText;
