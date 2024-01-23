import React from "react";
import Layout from "@/components/layout/Layout";
import BannerThree from "@/components/layout/banner/BannerThree";
import CaseThree from "@/components/container/home-three/CaseThree";
import ProcessThree from "@/components/container/home-three/ProcessThree";
import SponsorThree from "@/components/container/home-three/SponsorThree";

const HomeThree = () => {
  return (
    <Layout header={3} footer={3}>
      <BannerThree />
      <CaseThree />
      <ProcessThree />
      <SponsorThree />
    </Layout>
  );
};

export default HomeThree;
