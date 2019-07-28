import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { useSiteMetadata } from '../queries/useSiteMetadata';
import './header.scss';

const Header = ({ siteTitle }) => {
  const { defaultPage } = useSiteMetadata();
  return (
    <header className="site-header">
      <h1>
        <Link to={defaultPage} className="site-header-title-link">
          {siteTitle}
        </Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
