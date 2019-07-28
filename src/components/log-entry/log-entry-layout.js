import React from 'react';
import Layout from '../layout';
import Helmet from 'react-helmet';
import format from 'date-fns/format';
import EntryHeader from './entry-header';
import './log-entry-layout.scss';

function LogEntryLayout({ children, pageContext }) {
  const { title, date } = pageContext.frontmatter;
  const displayDate = format(date, 'MM/DD/YYYY');

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <article>
        <EntryHeader title={title} displayDate={displayDate} />
        <div className="entry-content">{children}</div>
      </article>
    </Layout>
  );
}

export default LogEntryLayout;