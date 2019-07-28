import React from 'react';
import { Link } from 'gatsby';
import './side-nav-item.scss';

const isPartiallyActive = ({ isPartiallyCurrent, href, location }) => {
  const isLogNavItem = href === '/log/1';
  const isLogEntry = location.pathname.startsWith('/log/');
  const isActiveLogEntry = isLogNavItem && isLogEntry;

  return isPartiallyCurrent || isActiveLogEntry
    ? { className: 'side-nav-item active' }
    : { className: 'side-nav-item' };
};

const SideNavItem = ({ text, linkPath }) => (
  <Link to={linkPath} getProps={isPartiallyActive}>
    {text}
  </Link>
);

export default SideNavItem;
