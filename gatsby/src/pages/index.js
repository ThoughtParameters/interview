import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to Thought Parameters</h1>
      <p>Your journey to certification starts here.</p>
    </Layout>
  );
};

export default IndexPage;
