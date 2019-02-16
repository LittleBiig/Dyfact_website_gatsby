import React from "react"
import { Link } from "gatsby"
import HomePage from "./homePage"

// import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
      <SEO title="Home" keywords={[`dyfact`, `dyfactmusic` ]} />
      <HomePage />
  </div>
  </div>
);

export default IndexPage
