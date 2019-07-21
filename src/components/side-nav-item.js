import React from "react"
import { Link } from "gatsby"
import "./side-nav-item.scss"

const SideNavItem = ({ text, linkPath }) => (
  <Link className="side-nav-item" to={linkPath}>
    {text}
  </Link>
)

export default SideNavItem
