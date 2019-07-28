const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: `/log${value}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) {
      return Promise.reject(errors);
    }

    const logEntries = results.data.allMdx.edges;
    const pageSize = 10;
    const pageCount = Math.ceil(logEntries.length / pageSize);
    const pages = Array(pageCount).fill(undefined);

    let start = 0;
    const pagedLogEntries = pages.map(() => {
      const page = logEntries.slice(start, start + pageSize);
      start += pageSize;
      return page;
    });

    pagedLogEntries.forEach((pageEntries, index) => {
      const page = index + 1;
      createPage({
        path: `/log/${page}`,
        component: path.resolve('./src/components/browse-log-entries.js'),
        context: { pagedLogEntries, pageEntries, page },
      });
    });
  });
};
