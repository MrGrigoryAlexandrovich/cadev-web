import React from "react";
import Layout from "@/components/layout/Layout";
import AboutMain from "@/components/container/about/AboutMain";
import AboutExperience from "@/components/container/about/AboutExperience";
import AwardsAchievement from "@/components/container/about/AwardsAchievement";

const AboutMe = () => {
  return (
    <Layout header={1} footer={1}>
      <AboutMain />
      <AboutExperience />
      <AwardsAchievement />
    </Layout>
  );
};

export default AboutMe;
