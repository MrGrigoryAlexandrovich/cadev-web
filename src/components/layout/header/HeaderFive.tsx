import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo-two.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderFive = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
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

  const defaultClasses = "primary-navbar header--quaternary";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="home page" title="logo">
                      <Image src={logo} alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul className="navbar__list justify-content-end">
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
                        <ul
                          className={`navbar__sub-menu ${isSubMenuOpen(
                            "home"
                          )}`}
                        >
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
                        <ul
                          className={`navbar__sub-menu ${isSubMenuOpen(
                            "services"
                          )}`}
                        >
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
                            "case"
                          )}`}
                          onClick={() => handleSubmenu("case")}
                        >
                          Case Study
                        </button>
                        <ul
                          className={`navbar__sub-menu ${isSubMenuOpen(
                            "case"
                          )}`}
                        >
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
                          className={`navbar__dropdown-label ${isSubMenuButton(
                            "Blog"
                          )}`}
                          onClick={() => handleSubmenu("Blog")}
                        >
                          Blog
                        </button>
                        <ul
                          className={`navbar__sub-menu ${isSubMenuOpen(
                            "Blog"
                          )}`}
                        >
                          <li>
                            <Link href="blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="blog-single">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <Link
                      href="contact-us"
                      className="btn btn--secondary d-none d-md-flex"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                      Book a consultation
                    </Link>
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
                <Link href="contact-us">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__social social nav-fade">
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
              href="https://www.youtube.com/"
              className="yt"
              target="_blank"
              aria-label="share us on youtube"
              title="youtube"
            >
              <i className="fa-brands fa-youtube"></i>
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
    </>
  );
};

export default HeaderFive;
