import React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

function BrowseLogEntries({ pageContext }) {
  const { pagedLogEntries, pageEntries, page } = pageContext;
  return (
    <Layout>
      {pageEntries.map(({ node }) => {
        const { title, author } = node.frontmatter;
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>Posting By {author}</div>
            </header>
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>View Article</Link>
            <hr />
          </div>
        );
      })}
      <footer>
        Pages:{' '}
        {pagedLogEntries.map((x, index) => {
          const currentPage = index + 1;
          return (
            <Link
              key={index}
              to={`/log/${currentPage}`}
              className={currentPage === page ? 'active' : null}
            >
              {index + 1}
            </Link>
          );
        })}
      </footer>
    </Layout>
  );
}

export default BrowseLogEntries;
