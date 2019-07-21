import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutSite = () => (
  <Layout>
    <SEO title="About this site" />
    <h1>About this site</h1>
    <p>
      This site was built with {` `}
      <ul>
        <li>
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </li>
        <li>
          <a href="https://graphql.org/">GraphQL</a>
        </li>
      </ul>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutSite
