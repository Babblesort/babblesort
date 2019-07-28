import React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';
import format from 'date-fns/format';
import EntryHeader from './log-entry/entry-header';
import SEO from './seo';

function BrowseLogEntries({ pageContext }) {
  const { pagedLogEntries, pageEntries, page } = pageContext;
  return (
    <Layout>
      <SEO title={'Dev Log'} />
      {pageEntries.map(({ node }) => {
        const { title, date } = node.frontmatter;
        const displayDate = format(date, 'MM/DD/YYYY');
        return (
          <div key={node.id}>
            <EntryHeader title={title} displayDate={displayDate} />
            <p>{node.excerpt}</p>
            <Link to={node.fields.slug}>Read Entry</Link>
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
