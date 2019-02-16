import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "@contentful/gatsby-transformer-contentful-richtext";

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
            </>
        )}
    />
);

export default HomePage;