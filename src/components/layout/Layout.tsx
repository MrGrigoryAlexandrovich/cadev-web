import React, { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollProgressBtn from "./ScrollProgressBtn";
import CustomCursor from "./CustomCursor";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FooterTwo from "./footer/FooterTwo";
import FooterThree from "./footer/FooterThree";
import FooterFour from "./footer/FooterFour";
import FooterSix from "./footer/FooterSix";
import SplitType from "split-type";

type LayoutProps = {
  children: React.ReactNode;
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const Layout = ({
  children,
  header,
  footer,
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
}: LayoutProps) => {
  // navbar
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  let additionalClasses = " ";
  const combinedClasses = `${additionalClasses} my-app`;

  // title animation
  useEffect(() => {
    const titleElements = document.querySelectorAll(".title-animation");

    titleElements.forEach((el) => {
      const triggerEl = el as gsap.DOMTarget; // Use type assertion here
      gsap.to(triggerEl, {
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 100%",
          markers: false,
          onEnter: () => {
            if (el instanceof Element) {
              el.classList.add("title-animation-active");
            }
          },
        },
      });
    });
  }, []);

  // fade animation
  useEffect(() => {
    const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

    fadeWrapperRefs.forEach((fadeWrapperRef) => {
      const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

      fadeItems.forEach((element, index) => {
        const delay = index * 0.15;

        gsap.set(element, {
          opacity: 0,
          y: 100,
        });

        ScrollTrigger.create({
          trigger: element,
          start: "top 100%",
          end: "bottom 20%",
          scrub: 0.5,
          onEnter: () => {
            gsap.to(element, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
            });
          },
          once: true,
        });
      });
    });
  }, []);

  // appear down
  useEffect(() => {
    const appearDownSections = document.querySelectorAll(".appear-down");

    appearDownSections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            scrub: 1,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
        }
      );
    });
  }, []);

  // reveal title
  useEffect(() => {
    const applyRevealTitleAnimation = () => {
      const revealTitleElements = document.querySelectorAll(".reveal-title");

      revealTitleElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            markers: false,
            onEnter: () => {
              el.classList.add("reveal-title-active");
            },
            onLeaveBack: () => {
              el.classList.remove("reveal-title-active");
            },
          },
        });
      });
    };

    applyRevealTitleAnimation();
  }, []);

  // split text animation
  useEffect(() => {
    const myText = new SplitType(".title-anim");
    const titleAnims = document.querySelectorAll(".title-anim");

    titleAnims.forEach((titleAnim) => {
      const charElements = titleAnim.querySelectorAll(".char");

      charElements.forEach((char, index) => {
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const charDelay = index * 0.03;

        tl2.from(char, {
          duration: 0.8,
          x: 70,
          delay: charDelay,
          autoAlpha: 0,
        });
      });
    });
  }, []);

  useEffect(() => {
    const titleElements = document.querySelectorAll(".title-anim");

    titleElements.forEach((el) => {
      const triggerEl = el as gsap.DOMTarget;
      gsap.to(triggerEl, {
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 100%",
          markers: false,
          onEnter: () => {
            if (el instanceof Element) {
              el.classList.add("title-anim-active");
            }
          },
        },
      });
    });
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="robots" content="index,follow" />
        <meta name="geo.position" content="40.741895,-73.989308" />
        <meta name="geo.placename" content="Maglaj, Bosnia and Herzegovina" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://www.ca-dev.eu" />
        <meta name="twitter:site" content="@ca_dev" />
        <meta name="twitter:creator" content="@ca_dev" />
        <meta property="og:site_name" content="Software Sorcerers" />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
        <title>CA DEV Software Development</title>
        <meta
          name="keywords"
          content="software, development, web, software-development, appliation, mobile, desktop,mobile-development , desktop-development, company, ca, dev, ca-dev, ca-development"
        />
        <meta
          name="description"
          content="Software Sorcerers: We enchant your digital world. Software Development company."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CA DEV Software Development" />
        <meta
          property="og:description"
          content="Software Sorcerers: We enchant your digital world."
        />
        <meta property="og:image" content="https://i.imgur.com/6j3cMIQ.jpeg" />
        <meta
          property="twitter:card"
          content="https://i.imgur.com/6j3cMIQ.jpeg"
        />
        <meta
          property="twitter:title"
          content="Stellenanzeigen kostenlos veröffentlichen"
        />
        <meta
          property="twitter:description"
          content="Software Sorcerers: We enchant your digital world."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/6j3cMIQ.jpeg"
        />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/6j3cMIQ.jpeg"
        />
      </Head>
      <div className={`${combinedClasses}${openNav ? " body-active" : " "}`}>
        {header === 1 && (
          <Header
            openNav={openNav}
            handleNav={handleNav}
            setOpenNav={setOpenNav}
          />
        )}
        <main>{children}</main>
        {footer === 1 && <Footer />}
        {footer === 2 && <FooterTwo />}
        {footer === 3 && <FooterThree />}
        {footer === 4 && <FooterFour />}
        {footer === 6 && <FooterSix />}
        <ScrollProgressBtn />
        <CustomCursor
          onTitleMouseEnter={handleMouseEnterTitle}
          onTitleMouseLeave={handleMouseLeaveTitle}
        />
      </div>
    </Fragment>
  );
};

export default Layout;
