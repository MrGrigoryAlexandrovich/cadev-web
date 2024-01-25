import React from "react";
import Layout from "@/components/layout/Layout";
import BannerOne from "@/components/layout/banner/BannerOne";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <BannerOne />
    </Layout>
  );
};

export default Home;
