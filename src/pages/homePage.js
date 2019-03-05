import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "@contentful/gatsby-transformer-contentful-richtext";
import WelcomeBoard from "../components/WelcomeBoard/WelcomeBoard";
import Musics from "../components/Musics/Musics";
import Biography from "../components/Biography/Biography";
import Newsletter from "../components/Newsletter/Newsletter";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const HomePage = () => (
    <StaticQuery
        query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          welcomePhoto1 {
              fluid(maxWidth: 613) {
                        src
                      }
              }
          biographyText {
            biographyText
          }
          biography {
              childContentfulRichText {
                   html
              }
          }
        }
      }
    `}
        render={
            (
                data
            ) => (
            <>
                {/*<h1>{title}</h1>*/}
                {/*<p>{biographyText}</p>*/}

                <WelcomeBoard welcomePhoto1={data.contentfulHomePage.welcomePhoto1.fluid.src} />
                <Musics />
                <Biography html={data.contentfulHomePage.biography.childContentfulRichText.html}/>
                <Newsletter />
                <Contact />
                <Footer />
            </>
        )
        }
    />
);

export default HomePage;
