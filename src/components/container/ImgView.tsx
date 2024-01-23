import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import one from "public/images/img-view/one.png";
import two from "public/images/img-view/two.png";
import three from "public/images/img-view/three.png";
import four from "public/images/img-view/four.png";
import five from "public/images/img-view/five.png";
import six from "public/images/img-view/six.png";
import seven from "public/images/img-view/seven.png";

const ImgView = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const leftSections = gsap.utils.toArray(
      ".img-view__left .img-view__single"
    );
    gsap.to(leftSections, {
      xPercent: -100 * (leftSections.length - 3),
      ease: "none",
      scrollTrigger: {
        trigger: ".img-view__left",
        pin: false,
        invalidateOnRefresh: true,
        start: "top 60%",
        scrub: 1,
        end: () =>
          "+=" + (document.querySelector(".img-view__left")?.clientWidth || 0),
      },
    });

    const rightSections = gsap.utils.toArray(
      ".img-view__right .img-view__single"
    );
    gsap.to(rightSections, {
      xPercent: 100 * (rightSections.length - 3),
      ease: "none",
      scrollTrigger: {
        trigger: ".img-view__right",
        pin: false,
        invalidateOnRefresh: true,
        start: "top 60%",
        scrub: 1,
        end: () =>
          "+=" + (document.querySelector(".img-view__right")?.clientWidth || 0),
      },
    });
  }, []);

  return (
    <div className="img-view pt-120">
      <div className="img-view__wrapper img-view__left">
        <div className="img-view__single">
          <Image src={one} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={two} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={three} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={four} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={five} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={six} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={seven} alt="Image" />
        </div>
      </div>
      <div className="img-view__wrapper img-view__right">
        <div className="img-view__single">
          <Image src={one} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={two} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={three} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={four} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={five} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={six} alt="Image" />
        </div>
        <div className="img-view__single">
          <Image src={seven} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default ImgView;
