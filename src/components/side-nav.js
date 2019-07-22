import React from "react"
import SideNavItem from "./side-nav-item"
import BabblesortImage from "./babblesort-image"
import "./side-nav.scss"

const SideNav = () => (
  <nav className="side-nav">
    <BabblesortImage />
    <SideNavItem text="Developer Log" linkPath="/" />
    <SideNavItem text="About Me" linkPath="/about-me" />
    <SideNavItem text="About This Site" linkPath="/about-site" />
  </nav>
)

export default SideNav
