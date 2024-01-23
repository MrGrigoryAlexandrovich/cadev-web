import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactSec from "@/components/container/ContactSec";

const ContactMe = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Contact Me" navigation="Contact Me" />
      <ContactSec />
    </Layout>
  );
};

export default ContactMe;
