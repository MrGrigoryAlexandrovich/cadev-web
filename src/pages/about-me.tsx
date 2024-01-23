import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AboutMain from "@/components/container/about/AboutMain";
import AboutExperience from "@/components/container/about/AboutExperience";
import AwardsAchievement from "@/components/container/about/AwardsAchievement";
import FeedbackFour from "@/components/container/home-four/FeedbackFour";

const AboutMe = () => {
  return (
    <Layout header={1} footer={6}>
      <CmnBanner title="About Me" navigation="About" />
      <AboutMain />
      <AboutExperience />
      <AwardsAchievement />
      <FeedbackFour />
    </Layout>
  );
};

export default AboutMe;
