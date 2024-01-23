import React from "react";
import Layout from "@/components/layout/Layout";
import BannerFive from "@/components/layout/banner/BannerFive";
import LanguageFIve from "@/components/container/home-five/LanguageFIve";
import NoteFive from "@/components/container/home-five/NoteFive";
import CtaFive from "@/components/container/home-five/CtaFive";
import OfferFive from "@/components/container/home-five/OfferFive";
import CaseFive from "@/components/container/home-five/CaseFive";
import TestimonialFive from "@/components/container/home-five/TestimonialFive";
import ExpertiseFive from "@/components/container/home-five/ExpertiseFive";

const HomeFive = () => {
  return (
    <Layout header={5} footer={5}>
      <BannerFive />
      <LanguageFIve />
      <NoteFive />
      <CtaFive />
      <OfferFive />
      <CaseFive />
      <TestimonialFive />
      <ExpertiseFive />
    </Layout>
  );
};

export default HomeFive;
