import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import SideNav from './side-nav';
import { useSiteMetadata } from '../queries/useSiteMetadata';
import '../scss/layout.scss';

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <div className="layout-grid">
      <Header siteTitle={title} />
      <SideNav />
      <main className="site-main">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
