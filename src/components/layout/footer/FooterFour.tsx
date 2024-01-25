import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import chroma from "chroma-js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FooterFour = () => {
  const currentYear = new Date().getFullYear();

  const animatedTextRef = useRef<any>(null);
  const [animatedTextContent, setAnimatedTextContent] = useState("");

  useEffect(() => {
    const animatedChars = document.querySelectorAll(".animated-char");

    if (animatedChars.length > 0) {
      const folksBD = gsap.timeline({
        repeat: -1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".animated-text",
          start: "bottom 100%-=50px",
        },
      });

      const folksGradient = chroma.scale(["#ffffff", "#ffffff"]);

      animatedChars.forEach((charElement, index) => {
        const delay = index * 0.04;

        folksBD.to(
          charElement,
          {
            duration: 0.5,
            scaleY: 0.6,
            ease: "power3.out",
            transformOrigin: "center bottom",
          },
          delay
        );

        folksBD.to(
          charElement,
          {
            yPercent: -20,
            ease: "elastic",
            duration: 0.8,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            scaleY: 1,
            ease: "elastic.out(2.5, 0.2)",
            duration: 1.5,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            color: () => {
              return folksGradient(index / animatedChars.length).hex();
            },
            ease: "power2.out",
            duration: 0.3,
          },
          delay + 0.5
        );

        folksBD.to(
          charElement,
          {
            yPercent: 0,
            ease: "back",
            duration: 0.8,
          },
          delay + 0.7
        );

        folksBD.to(
          charElement,
          {
            color: "#ffffff",
            duration: 1.4,
          },
          delay + 0.9
        );
      });
    }
  }, [animatedTextContent]);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    const textContent = animatedTextRef.current?.textContent;
    if (textContent) {
      setAnimatedTextContent(textContent);
      animatedText.innerHTML = "";
    }
  }, []);

  return (
    <footer className="footer pt-120 footer--four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__intro d-flex align-items-center justify-content-center flex-column flex-sm-row justify-content-sm-between flex-wrap">
              <h2 className="title-xl text-quaternary fw-4 title-anim">
                Let&apos;s Work Together
              </h2>
              <h5 className="title-sm">SEND ME A MESSAGE</h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="footer__content text-center pt-120">
              <h2 className="light-title-xl text-uppercase fw-5">
                <Link
                  href="mailto:ahmedcvrle@gmail.com"
                  className="animated-text"
                  ref={animatedTextRef}
                >
                  ahmedcvrle@gmail.com
                  {animatedTextContent.split("").map((char, index) => (
                    <span
                      aria-hidden="true"
                      className="animated-char"
                      key={index}
                    >
                      {char}
                    </span>
                  ))}
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12">
              <div className="footer__copyright-text text-center">
                <p className="text-senary tertiary-text">
                  &copy; <span id="copyYear">{currentYear}</span>. All Rights
                  Reserved{" "}
                  <Link href="/" className="fw-6">
                    CA DEV
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="social justify-content-center">
                <Link
                  href="https://www.linkedin.com/in/ca-dev/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/_mr.assertive_/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="https://www.facebook.com/cvrcak.ahmed/"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-messenger"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
