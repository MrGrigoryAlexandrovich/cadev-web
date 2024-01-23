import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogDetailsSec from "@/components/container/blog/BlogDetailsSec";

const BlogSingle = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Brand Identity Development" navigation="Blog Single" />
      <BlogDetailsSec />
    </Layout>
  );
};

export default BlogSingle;
