import React from 'react';
import { Redirect } from '@reach/router';
import Layout from '../../components/layout';

const IndexPage = () => (
  <Layout>
    <Redirect noThrow to="/log/1" />
  </Layout>
);

export default IndexPage;
