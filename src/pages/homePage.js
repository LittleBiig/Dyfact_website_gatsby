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
        render={({
                     contentfulHomePage: {
                         title,
                         biographyText: {biographyText},
                         biography: {
                            childContentfulRichText: {
                                html
                            }
                         }
                     }
                 }) => (
            <>
                <h1>{title}</h1>
                <p>{biographyText}</p>
                <div dangerouslySetInnerHTML={ { __html: html } }></div>
                <WelcomeBoard />
                <Musics />
                <Biography />
                <Newsletter />
                <Contact />
                <Footer />
            </>
        )}
    />
);

export default HomePage;