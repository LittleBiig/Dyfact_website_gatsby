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
          welcomePhoto2 {
              fluid(maxWidth: 613) {
                        src
                      }
              }
          welcomePhoto3 {
              fluid(maxWidth: 613) {
                        src
                      }
              }
          welcomePhoto4 {
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
          footerText
        }
      }
    `}
        render={
            (
                data
            ) => (
            <>
                <WelcomeBoard
                    welcomePhoto1={data.contentfulHomePage.welcomePhoto1.fluid.src}
                    welcomePhoto2={data.contentfulHomePage.welcomePhoto2.fluid.src}
                    welcomePhoto3={data.contentfulHomePage.welcomePhoto3.fluid.src}
                    welcomePhoto4={data.contentfulHomePage.welcomePhoto4.fluid.src}
                />
                <Musics />
                <Biography html={data.contentfulHomePage.biography.childContentfulRichText.html}/>
                <Newsletter />
                <Contact />
                <Footer footerText={data.contentfulHomePage.footerText}/>
            </>
        )
        }
    />
);

export default HomePage;
