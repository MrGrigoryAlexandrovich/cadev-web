import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/project/one.png";
import two from "public/images/project/two.png";
import three from "public/images/project/three.png";
import four from "public/images/project/four.png";

const ProjectFour = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const caseStudies = [
    { title: "Web Development", images: [one, two, three, four] },
    { title: "UI Design", images: [one, two, three, four] },
    { title: "Digital Marketing", images: [one, two, three, four] },
    { title: "Product Development", images: [one, two, three, four] },
  ];

  return (
    <section className="pt-120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center">
              <h2 className="title-xxl title-anim">Case Study</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="crc">
        <ul className="case-study-wrapper">
          {caseStudies.map((study, index) => (
            <li
              key={index}
              className={`case-study-name ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <Link href="case-study" className="hover-target">
                {study.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="case-study-images">
          {caseStudies.map((study, index) => (
            <li key={index} className={index === activeIndex ? "show" : ""}>
              <div className="img-hero-background">
                {study.images.map((image, imageIndex) => (
                  <span key={imageIndex}>
                    <Image src={image} alt="Image" />
                  </span>
                ))}
              </div>
              <div className="hero-number-back">{`0${index + 1}`}</div>
              <div className="hero-number">{`0${index + 1}`}</div>
              <div className="hero-number-fixed">{`0${caseStudies.length}`}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectFour;
