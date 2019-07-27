import React from 'react';
import Layout from './layout';
import Helmet from 'react-helmet';

function LogEntryLayout({ children, pageContext }) {
  const { title, author, date } = pageContext.frontmatter;
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <time>Date: {date}</time>
        </header>
        {children}
      </article>
    </Layout>
  );
}

export default LogEntryLayout;
