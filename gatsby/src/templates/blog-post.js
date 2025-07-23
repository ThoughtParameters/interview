import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="prose prose-invert mx-auto">
        <h1>{frontmatter.title}</h1>
        <p className="text-gray-400">{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPostTemplate;
