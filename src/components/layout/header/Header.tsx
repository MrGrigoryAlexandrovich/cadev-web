import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import development from "@/assets/development.jpg";
import consulting from "@/assets/consulting.jpg";
import maintenance from "@/assets/maintenance.jpg";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
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

  const defaultClasses = "primary-navbar birl";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  return (
    <Fragment>
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
                    <ul className="navbar__list">
                      <li className="navbar__item nav-fade">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">About Us</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="services">Services</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="partners">Partners</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="contact-us">Contact</Link>
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
              <li className="navbar__item nav-fade">
                <Link href="/">Home</Link>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="about-us">About Us</Link>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="services">Services</Link>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="partners">Partners</Link>
              </li>
              <li className="navbar__item nav-fade">
                <Link href="contact-us">Contact</Link>
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
              href="https://www.instagram.com/_mr.assertive_/"
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
                Welcome to CA DEV
              </h2>
            </div>
            <div className="images">
              <a className="image-link">
                <div className="image" data-label="Development">
                  <Image src={development} alt="Image" />
                </div>
              </a>
              <a className="image-link">
                <div className="image" data-label="IT Consulting">
                  <Image src={consulting} alt="Image" />
                </div>
              </a>
              <a className="image-link">
                <div className="image" data-label="Maintenance">
                  <Image src={maintenance} alt="Image" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
