import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import one from "public/images/project/one.png";
import two from "public/images/project/two.png";
import three from "public/images/project/three.png";
import four from "public/images/project/four.png";
import avatar from "public/images/avatar.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [OffInfo, setOffInfo] = useState(false);

  const handleInfo = () => {
    setOffInfo(!OffInfo);
  };

  const closeInfo = () => {
    setOffInfo(false);
  };

  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? " nav__dropdown-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " navbar__item-active" : " ";
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
      setOffInfo(false);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  return (
    <>
      <header className="header secondary-header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__profile d-none d-xl-block">
                    <Link href="/" aria-label="home page" title="logo">
                      <Image src={avatar} alt="Images" />
                    </Link>
                  </div>
                  <div className="navbar__logo d-block d-xl-none">
                    <Link
                      href="/"
                      aria-label="home page"
                      title="logo"
                      className="logo"
                    >
                      <Image src={logo} alt="Images" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <div className="navbar__logo d-none d-xl-block">
                      <Link
                        href="/"
                        aria-label="home page"
                        title="logo"
                        className="logo"
                      >
                        <Image src={logo} alt="Images" />
                      </Link>
                    </div>
                    <ul className="navbar__list">
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label ps-xl-0"
                        >
                          Home
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="/">Creative Designer</Link>
                          </li>
                          <li>
                            <Link href="index-two">Web Developer</Link>
                          </li>
                          <li>
                            <Link href="index-three">Freelancer</Link>
                          </li>
                          <li>
                            <Link href="index-four">Digital Marketter</Link>
                          </li>
                          <li>
                            <Link href="index-five">Psychiatrist</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">About Us</Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="services">Services</Link>
                          </li>
                          <li>
                            <Link href="service-single">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Case Study
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="case-study">Case Study</Link>
                          </li>
                          <li>
                            <Link href="case-study-single">
                              Case Study Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          Blog
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="blog-single">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact-me">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-mobile-info animated-bar d-none d-xl-flex"
                      aria-label="toggle offset info"
                      title="open offset info"
                      onClick={handleInfo}
                    >
                      <span className="bar-line"></span>
                    </button>
                    <button
                      className="open-mobile-menu animated-bar d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      title="open mobile menu"
                      onClick={handleNav}
                    >
                      <span className="bar-line"></span>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          "mobile-menu d-block d-xl-none" + (openNav ? " show-menu" : " ")
        }
      >
        <nav className="mobile-menu__wrapper" data-lenis-prevent>
          <div className="mobile-menu__header nav-fade">
            <div className="mobile-menu__logo">
              <Link href="/" aria-label="home page" title="logo">
                <Image src={logo} alt="Image" />
              </Link>
            </div>
            <button
              aria-label="close mobile menu"
              className="close-mobile-menu"
              onClick={closeNav}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="mobile-menu__list">
            <ul className="navbar__list">
              <li className="navbar__item navbar__item--has-children nav-fade">
                <button
                  aria-label="dropdown menu"
                  className={`navbar__dropdown-label ${isSubMenuButton(
                    "home"
                  )}`}
                  onClick={() => handleSubmenu("home")}
                >
                  Home
                </button>
                <ul className={`navbar__sub-menu ${isSubMenuOpen("home")}`}>
                  <li>
                    <Link href="/">Creative Designer</Link>
                  </li>
                  <li>
                    <Link href="index-two">Web Developer</Link>
                  </li>
                  <li>
                    <Link href="index-three">Freelancer</Link>
                  </li>
                  <li>
                    <Link href="index-four">Digital Marketter</Link>
                  </li>
                  <li>
                    <Link href="index-five">Psychiatrist</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="about-us">About Us</Link>
              </li>
              <li className="navbar__item navbar__item--has-children nav-fade">
                <button
                  aria-label="dropdown menu"
                  className={`navbar__dropdown-label ${isSubMenuButton(
                    "services"
                  )}`}
                  onClick={() => handleSubmenu("services")}
                >
                  Services
                </button>
                <ul className={`navbar__sub-menu ${isSubMenuOpen("services")}`}>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="service-single">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar__item navbar__item--has-children nav-fade">
                <button
                  aria-label="dropdown menu"
                  className={`navbar__dropdown-label ${isSubMenuButton(
                    "Blog"
                  )}`}
                  onClick={() => handleSubmenu("Blog")}
                >
                  Blog
                </button>
                <ul className={`navbar__sub-menu ${isSubMenuOpen("Blog")}`}>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="blog-single">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="contact-me">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__social social nav-fade">
            <Link
              href="https://www.linkedin.com/in/ca-dev/"
              target="_blank"
              aria-label="share us on linkedin"
              title="linkedin"
              className="in"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              href="https://www.facebook.com/cvrcak.ahmed/"
              target="_blank"
              aria-label="share us on facebook"
              title="facebook"
              className="fb"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              href="https://www.instagram.com/_mr.assertive_/_mr.assertive_/"
              target="_blank"
              aria-label="share us on instagram"
              title="instagram"
              className="in"
            >
              <i className="bi bi-instagram"></i>
            </Link>
          </div>
        </nav>
      </div>
      <div
        className={
          "mobile-menu__backdrop" +
          (openNav ? " mobile-menu__backdrop-active" : " ")
        }
        onClick={() => setOpenNav(false)}
      ></div>
      <div className={"menu" + (OffInfo ? " menu-active" : " ")}>
        <button
          aria-label="close off canvas"
          className="off-canvas-close"
          onClick={closeInfo}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="menu-inner">
          <div className="gallery">
            <div className="title menu-nav-link">
              <h2 className="title-xl text-uppercase fw-7">
                Our Featured Projects
              </h2>
            </div>
            <div className="images">
              <Link className="image-link" href="case-study-single">
                <div className="image" data-label="Development">
                  <Image src={one} alt="Image" />
                </div>
              </Link>
              <Link className="image-link" href="case-study-single">
                <div className="image" data-label="Design">
                  <Image src={two} alt="Image" />
                </div>
              </Link>
              <Link className="image-link" href="case-study-single">
                <div className="image" data-label="Marketting">
                  <Image src={three} alt="Image" />
                </div>
              </Link>
              <Link className="image-link" href="case-study-single">
                <div className="image" data-label="Launch">
                  <Image src={four} alt="Image" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTwo;
