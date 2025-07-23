const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const isBlogPost = node.fileAbsolutePath.includes('/blog/');
    if (isBlogPost) {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      });
    } else {
      createPage({
        path: `/learn/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/topic-page.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      });
    }
  });
};
