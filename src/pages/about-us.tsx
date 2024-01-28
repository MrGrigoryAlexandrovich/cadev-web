import React from "react";
import Layout from "@/components/layout/Layout";
import AboutMain from "@/components/container/about/AboutMain";
import AwardsAchievement from "@/components/container/about/AwardsAchievement";
import groupOfficeOne from "@/assets/groupOfficeOne.jpg";
import groupOfficeTwo from "@/assets/groupOfficeTwo.jpg";
import groupOfficeThree from "@/assets/groupOfficeThree.jpg";
import groupOfficeFour from "@/assets/groupOfficeFour.jpg";

const AboutMe = () => {
  const secretItems = [
    {
      title: "Leadership",
      subtitles: [
        "Set clear goals and expectations",
        "Create a positive and supportive environment",
        "Delegate effectively",
        "Be a role mode",
      ],
      image: groupOfficeFour,
    },
    {
      title: "Programming skills",
      subtitles: [
        "Lightning-fast performance",
        "Rocketfuel Apps",
        "Attention to detail",
        "Quality code",
      ],
      image: groupOfficeOne,
    },
    {
      title: "IT Consulting",
      subtitles: [
        "Improved IT performance",
        "Increased business agility",
        "Reduced costs",
        "Increased innovation",
      ],
      image: groupOfficeThree,
    },
    {
      title: "Maintenance",
      subtitles: [
        "Enhanced Stability and Reliability",
        "Improved Performance and Efficiency",
        "Enhanced Security",
        "Reduced Development Costs",
      ],
      image: groupOfficeTwo,
    },
  ];

  return (
    <Layout header={1} footer={2}>
      <AboutMain />
      <AwardsAchievement title="The secret to success" items={secretItems} />
    </Layout>
  );
};

export default AboutMe;
