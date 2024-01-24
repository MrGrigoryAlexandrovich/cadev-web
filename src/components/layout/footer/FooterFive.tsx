import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo-two.png";

const FooterFive = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer pt-120 footer--five fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__intro d-flex align-items-center justify-content-center flex-column flex-sm-row justify-content-sm-between flex-wrap">
              <h2 className="title-xl text-quaternary fw-4 title-anim">
                Welcome To Counseling
              </h2>
              <h5 className="title-sm">SEND ME A MESSAGE</h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="footer__five-content">
              <form action="#" method="post">
                <div className="group-wrapper fade-top">
                  <div className="group-input ">
                    <input
                      type="text"
                      name="contact-name"
                      id="contactName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group-input ">
                    <input
                      type="email"
                      name="contact-email"
                      id="contactEmail"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="group-wrapper fade-top">
                  <div className="group-input ">
                    <input
                      type="number"
                      name="contact-number"
                      id="contactNumber"
                      placeholder="Contact No"
                    />
                  </div>
                  <div className="group-input drt">
                    <select className="subject">
                      <option data-display="Subject">Subject</option>
                      <option value="1">Account</option>
                      <option value="2">Service</option>
                      <option value="3">Pricing</option>
                      <option value="4">Support</option>
                    </select>
                  </div>
                </div>
                <div className="group-input fade-top">
                  <textarea
                    name="contact-message"
                    id="contactMessage"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="section__content-cta">
                  <button type="submit" className="btn btn--secondary anim-btn">
                    <span className="btn-anim">send message</span>
                    <span className="btn-m">send message</span>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="row align-items-center gaper">
            <div className="col-12 col-lg-3">
              <div className="text-center text-lg-start">
                <Link href="/" className="logo">
                  <Image src={logo} alt="Image" />
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer__copyright-text text-center">
                <p className="text-senary tertiary-text">
                  &copy; <span id="copyYear">{currentYear}</span>. All Rights
                  Reserved{" "}
                  <Link href="/" className="fw-6">
                    Exgrid
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="social justify-content-center justify-content-lg-end">
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

export default FooterFive;
