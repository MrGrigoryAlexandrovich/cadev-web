import React from "react";
import Link from "next/link";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-three pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="footer-three__content">
              <h2 className="title-xxl fw-7 title-anim text-center">
                Let&apos;s Make Some Magic ✨ Happen And Show The World What
                Your Brand Is All About!
              </h2>
              <Link href="contact-me" className="footer__thumb ft">
                <span className="title-md">Let&apos;s talk</span>
              </Link>
              <p className="text-center let fw-5 text-capitalize">
                Let&apos;s make your brand the talk of the town
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-lg-6">
              <div className="social justify-content-center justify-content-lg-start">
                <Link href="https://www.twitter.com/" target="_blank">
                  Twitter
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                  Instagram
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  Facebook
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-text text-center text-lg-end">
                <p className="text-senary tertiary-text">
                  &copy; <span id="copyYear">{currentYear}</span>. All Rights
                  Reserved{" "}
                  <Link href="/" className="fw-6">
                    Exgrid
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

export default FooterThree;
