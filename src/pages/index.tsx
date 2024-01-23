import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOne from "@/components/layout/banner/BannerOne";
import ImgView from "@/components/container/ImgView";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <BannerOne />
      <ImgView />
    </Layout>
  );
};

export default Home;
