import React from "react";
import Layout from "@/components/layout/Layout";
import BannerFour from "@/components/layout/banner/BannerFour";
import DriveFour from "@/components/container/home-four/DriveFour";
import FixFour from "@/components/container/home-four/FixFour";
import ProjectFour from "@/components/container/home-four/ProjectFour";
import CounterFour from "@/components/container/home-four/CounterFour";
import FeedbackFour from "@/components/container/home-four/FeedbackFour";
import TextSliderFour from "@/components/container/home-four/TextSliderFour";

const HomeFour = () => {
  return (
    <Layout header={4} footer={4}>
      <BannerFour />
      <DriveFour />
      <FixFour />
      <ProjectFour />
      <CounterFour />
      <FeedbackFour />
      <TextSliderFour />
    </Layout>
  );
};

export default HomeFour;
