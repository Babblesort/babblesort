import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './header.scss';

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1>
      <Link to="/log/1" className="site-header-title-link">
        {siteTitle}
      </Link>
    </h1>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
