import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import CaseStudyDetailsSec from "@/components/container/case-study/CaseStudyDetailsSec";

const CaseStudySingle = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Brand Identity Development" navigation="Case Single" />
      <CaseStudyDetailsSec />
    </Layout>
  );
};

export default CaseStudySingle;
