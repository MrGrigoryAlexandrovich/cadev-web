import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServicesMain from "@/components/container/service/ServicesMain";
import ServicesProcess from "@/components/container/service/ServicesProcess";
import Expertise from "@/components/container/home-two/Expertise";

const Services = () => {
  return (
    <Layout header={1} footer={4}>
      <CmnBanner title="Our Services" navigation="Services" />
      <ServicesMain />
      <Expertise />
      <ServicesProcess />
    </Layout>
  );
};

export default Services;
