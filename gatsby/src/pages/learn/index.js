import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../../components/layout';
import { SEO } from '../../components/seo';

const LearnPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { title: ASC }}) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  const ckaTopics = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes('/cka/')
  );

  const ckadTopics = data.allMarkdownRemark.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes('/ckad/')
  );

  return (
    <Layout>
      <SEO title="Learn" />
      <h1 className="text-3xl font-bold mb-4">Learning Topics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">CKA Topics</h2>
          <ul className="list-disc pl-5">
            {ckaTopics.map(({ node }) => (
              <li key={node.frontmatter.slug} className="mb-2">
                <Link
                  to={`/learn/${node.frontmatter.slug}`}
                  className="text-blue-400 hover:underline"
                >
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">CKAD Topics</h2>
          <ul className="list-disc pl-5">
            {ckadTopics.map(({ node }) => (
              <li key={node.frontmatter.slug} className="mb-2">
                <Link
                  to={`/learn/${node.frontmatter.slug}`}
                  className="text-blue-400 hover:underline"
                >
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default LearnPage;
