import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';

const BlogIndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
            }
            excerpt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Blog" />
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="space-y-8">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.frontmatter.slug}>
            <h2 className="text-2xl font-bold">
              <Link
                to={`/blog/${node.frontmatter.slug}`}
                className="text-blue-400 hover:underline"
              >
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className="text-gray-400">{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndexPage;
