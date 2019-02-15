import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
    <StaticQuery
        query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          biographyText
        }
      }
    `}
        render={({
                     contentfulHomePage: {
                         title,
                         biographyText

                     }
                 }) => (
            <>
                <h1>{title}</h1>
                <p>{biographyText}</p>
            </>
        )}
    />
);

export default HomePage;