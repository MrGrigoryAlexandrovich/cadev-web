import React from "react";
import Layout from "@/components/layout/Layout";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import TextSlider from "@/components/container/home-two/TextSlider";
import CounterTwo from "@/components/container/home-two/CounterTwo";
import RecentTwo from "@/components/container/home-two/RecentTwo";
import Expertise from "@/components/container/home-two/Expertise";
import HorizontalText from "@/components/container/home-two/HorizontalText";
import TestimonialTwo from "@/components/container/home-two/TestimonialTwo";

const HomeTwo = () => {
  return (
    <Layout header={2} footer={2}>
      <BannerTwo />
      <TextSlider />
      <CounterTwo />
      <RecentTwo />
      <Expertise />
      <HorizontalText />
      <TestimonialTwo />
    </Layout>
  );
};

export default HomeTwo;
