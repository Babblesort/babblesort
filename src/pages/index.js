import React from 'react';
import { Redirect } from '@reach/router';
import Layout from '../components/layout';
import { useSiteMetadata } from '../queries/useSiteMetadata';

const IndexPage = () => {
  const { defaultPage } = useSiteMetadata();

  return (
    <Layout>
      <Redirect noThrow to={defaultPage} />
    </Layout>
  );
};

export default IndexPage;
