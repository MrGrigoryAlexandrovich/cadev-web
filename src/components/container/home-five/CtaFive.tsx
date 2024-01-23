import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ctabg from "public/images/cta-bg.png";
gsap.registerPlugin(ScrollTrigger);

const CtaFive = () => {
  useEffect(() => {
    const applyCtaAnimation = () => {
      const ctaElement = document.querySelector(".cta-s");
      const ctaBgElement = document.querySelector(".cta-bg");

      if (ctaElement && ctaBgElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaElement,
            start: "top center",
            end: "+=80%",
            scrub: 1,
            pin: false,
          },
        });

        tl.to(ctaBgElement, {
          y: "140px",
          zIndex: "-1",
          duration: 6,
        });
      }
    };

    applyCtaAnimation();
  }, []);

  return (
    <section className="pt-120 pb-120 cta-s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cta__content">
              <h3 className="title-md title-anim">Book a Free Consultation!</h3>
              <p>
                At the Good Samaritan Society, you aren&apos;t just a custoer.
                We believe you&apos;re someone
              </p>
              <h3 className="title-xxl">
                <Link href="tel:23-59784-002">
                  <i className="fa-solid fa-phone-volume"></i>
                  +23 59784 002
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Image src={ctabg} alt="Image" className="cta-bg" />
    </section>
  );
};

export default CtaFive;
