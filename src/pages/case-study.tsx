import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseStudySec from "@/components/container/case-study/CaseStudySec";
const CaseStudy = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Case Study" navigation="Case Study" />
      <CaseStudySec />
    </Layout>
  );
};

export default CaseStudy;
