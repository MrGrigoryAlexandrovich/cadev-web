import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "public/images/avatar.png";

const FooterTwo = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-120 footer-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-two__inner">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 col-xxl-8">
                  <div className="section__header text-center">
                    <span className="sub-title">Contact me</span>
                    <h2 className="title-xxl title-anim">
                      Let&apos;s Create Together A Unique Site That Looks Like
                      You.
                    </h2>
                    <div className="section__content-cta">
                      <div className="meta">
                        <div className="thumb">
                          <Link href="about-me">
                            <Image src={avatar} alt="Image" />
                          </Link>
                        </div>
                        <h5 className="title-sm">
                          <span>SEND ME</span>{" "}
                          <Link href="contact-me">
                            <span>A MESSAGE</span>
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright cp">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-lg-4">
              <div className="social justify-content-center justify-content-lg-start">
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
                <Link href="https://www.facebook.com/" target="_blank">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="footer__copyright-text text-center text-lg-end">
                <p className="text-senary tertiary-text">
                  &copy; <span id="copyYear">{currentYear}</span>. All Rights
                  Reserved{" "}
                  <Link href="/" className="fw-6">
                    CA DEV
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
