import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/container/blog/BlogMain";

const Blog = () => {
  return (
    <Layout header={1} footer={1}>
      <CmnBanner title="Blog Standard" navigation="Blog" />
      <BlogMain />
    </Layout>
  );
};

export default Blog;
