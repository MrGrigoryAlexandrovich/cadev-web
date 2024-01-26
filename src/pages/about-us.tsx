import React from "react";
import Layout from "@/components/layout/Layout";
import AboutMain from "@/components/container/about/AboutMain";
import AwardsAchievement from "@/components/container/about/AwardsAchievement";
import CmnBanner from "@/components/layout/banner/CmnBanner";

const AboutMe = () => {
  return (
    <Layout header={1} footer={1}>
      <AboutMain />
      <AwardsAchievement />
    </Layout>
  );
};

export default AboutMe;
