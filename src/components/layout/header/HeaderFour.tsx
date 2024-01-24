import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo-two.png";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderFour = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
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

  const defaultClasses = "primary-navbar tertiary--navbar";

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
                    <Link href="/" aria-label="go to home">
                      <Image src={logo} alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas-nav">
        <div
          className={
            "offcanvas-menu" + (openNav ? " show-offcanvas-menu" : " ")
          }
        >
          <nav className="offcanvas-menu__wrapper" data-lenis-prevent>
            <div className="offcanvas-menu__header nav-fade">
              <div className="logo">
                <Link href="/">
                  <Image src={logo} alt="Image" title="Logo" />
                </Link>
              </div>
              <button
                aria-label="close offcanvas menu"
                className="close-offcanvas-menu"
                onClick={closeNav}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="offcanvas-menu__list">
              <div className="navbar__menu">
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
                    <Link href="about-me">About Me</Link>
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
                        "projects"
                      )}`}
                      onClick={() => handleSubmenu("projects")}
                    >
                      Projects
                    </button>
                    <ul
                      className={`navbar__sub-menu ${isSubMenuOpen(
                        "projects"
                      )}`}
                    >
                      <li>
                        <Link href="case-study">My Projects</Link>
                      </li>
                      <li>
                        <Link href="case-study-single">Project Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="navbar__item navbar__item--has-children nav-fade">
                    <button
                      aria-label="dropdown menu"
                      className={`navbar__dropdown-label ${isSubMenuButton(
                        "blog"
                      )}`}
                      onClick={() => handleSubmenu("blog")}
                    >
                      Blog
                    </button>
                    <ul className={`navbar__sub-menu ${isSubMenuOpen("blog")}`}>
                      <li>
                        <Link href="blog">Blog</Link>
                      </li>
                      <li>
                        <Link href="blog-single">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="offcanvas-menu__options nav-fade">
              <div className="offcanvas__mobile-options d-flex">
                <Link href="contact-me" className="btn btn--secondary">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
            <div className="offcanvas-menu__social social nav-fade">
              <Link
                href="https://www.linkedin.com/in/ca-dev/"
                className="in"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link
                href="https://www.instagram.com/_mr.assertive_/"
                className="in"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                href="https://www.facebook.com/cvrcak.ahmed/"
                className="fb"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-messenger"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HeaderFour;
