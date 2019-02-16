import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "@contentful/gatsby-transformer-contentful-richtext";

const HomePage = () => (
    <StaticQuery
        query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          siteEnMaintenance {
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
                         siteEnMaintenance: {
                             childContentfulRichText: {
                                 html
                             }
                         }
                     }
                 }) => (
            <>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={ { __html: html } }></div>
            </>
        )}
    />
);

export default HomePage;