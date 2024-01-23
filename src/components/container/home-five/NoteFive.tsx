import React from "react";
import Image from "next/image";
import Link from "next/link";
import signa from "public/images/note/signa.png";
import one from "public/images/note/one.png";
import two from "public/images/note/three.png";
import three from "public/images/note/three.png";

const NoteFive = () => {
  return (
    <section className="pt-120 pb-120 note ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div className="section__header text-center mb-0 pb-120">
              <span className="sub-title">welcome note</span>
              <h2 className="title-xxl title-anim">
                Every Journey Starts With The First Step, So You Just Made
                Yours.
              </h2>
              <p>
                At the Good Samaritan Society, you aren&apos;t just a custoer.
                We believe you&apos;re someone who deserves to simply free text
                available in be treated with respect, dignity and compassion.
                con adipiscing elit tiam convallis elit id impedie. Quisq
                commodo simply free ornare tortor. If you are going to use a
                passage.
              </p>
              <Image src={signa} alt="Image" />
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single fade-top">
              <Image src={one} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single note__single-alt fade-top">
              <h3 className="title-md">
                <Link href="case-study-single">Effective Speaking</Link>
              </h3>
              <p>
                At the Good Samaritan Society, you aren&apos;t just a custoer.
                We believe you&apos;re someone who deserves to simply free text
                available.
              </p>
              <div className="section__content-cta">
                <Link href="case-study-single">
                  <span>Read More</span>
                  <i className="arrow"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single fade-top">
              <Image src={two} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single note__single-alt fade-top">
              <h3 className="title-md">
                <Link href="case-study-single">personal Motivation</Link>
              </h3>
              <p>
                At the Good Samaritan Society, you aren&apos;t just a custoer.
                We believe you&apos;re someone who deserves to simply free text
                available.
              </p>
              <div className="section__content-cta">
                <Link href="case-study-single">
                  <span>Read More</span>
                  <i className="arrow"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single fade-top">
              <Image src={three} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="note__single note__single-alt fade-top">
              <h3 className="title-md">
                <Link href="case-study-single">improve Leadership</Link>
              </h3>
              <p>
                At the Good Samaritan Society, you aren&apos;t just a custoer.
                We believe you&apos;re someone who deserves to simply free text
                available.
              </p>
              <div className="section__content-cta">
                <Link href="case-study-single">
                  <span>Read More</span>
                  <i className="arrow"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoteFive;
