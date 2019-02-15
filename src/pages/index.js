import React from "react"
import { Link } from "gatsby"
import HomePage from "./homePage"

// import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`dyfact`, `dyfactmusic` ]} />
    <h1>Site en maintenance</h1>
    <p>Vous êtes bien sur le site des DJs/Producteurs 'Dyfact'. Le site est actuellement en cours de maintenance.</p>
    <p>Vous pouvez nous retrouver sur les reseaux sociaux <a href={"https://web.facebook.com/Dyfactmusic"}>Facebook</a>, <a href={"https://www.instagram.com/dyfact/"}>Instagram</a> et <a href="https://www.youtube.com/channel/UC0jIHcMBGwfCz5mCjnngM_g">Youtube</a></p>
  <div>
      <p>test GraphQL</p>
        <HomePage/>
  </div>
  </div>
);

export default IndexPage
