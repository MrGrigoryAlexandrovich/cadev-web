import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceDetailsSec from "@/components/container/service/ServiceDetailsSec";
import ServiceUxProcess from "@/components/container/service/ServiceUxProcess";

const ServiceSingle = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner
        title="Brand Identity Development"
        navigation="Service Single"
      />
      <ServiceDetailsSec />
      <ServiceUxProcess />
    </Layout>
  );
};

export default ServiceSingle;
